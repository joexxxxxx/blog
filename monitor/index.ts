interface ErrorInfo {
  type: string
  message: string
  filename?: string
  position?: string
  stack?: string
  selector?: string
  time: number
  count?: number
  lastOccurrence?: number
}

interface ErrorCache {
  count: number
  lastOccurrence: number
  error: ErrorInfo
}

class ErrorMonitor {
  private static instance: ErrorMonitor
  private errorList: ErrorInfo[] = []
  private errorCache: Map<string, ErrorCache> = new Map()
  private readonly deduplicationWindow = 1000 * 60 * 5 // 5 minutes
  private readonly maxCacheSize = 1000 // Maximum number of unique errors to cache

  private constructor() {
    this.initErrorHandler()
    this.initPromiseErrorHandler()
    this.initResourceErrorHandler()
  }

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor()
    }
    return ErrorMonitor.instance
  }

  private initErrorHandler(): void {
    window.onerror = (message, source, lineno, colno, error) => {
      const errorInfo: ErrorInfo = {
        type: 'runtime',
        message: message as string,
        filename: source,
        position: `${lineno}:${colno}`,
        stack: error?.stack,
        time: Date.now()
      }
      this.addError(errorInfo)
    }
  }

  private initPromiseErrorHandler(): void {
    window.addEventListener('unhandledrejection', (event) => {
      const errorInfo: ErrorInfo = {
        type: 'promise',
        message: event.reason?.message || 'Promise rejection',
        stack: event.reason?.stack,
        time: Date.now()
      }
      this.addError(errorInfo)
    }, true)
  }

  private initResourceErrorHandler(): void {
    window.addEventListener('error', (event) => {
      if (event.target && (event.target as HTMLElement).nodeName) {
        const target = event.target as HTMLElement
        const errorInfo: ErrorInfo = {
          type: 'resource',
          message: `Resource loading error: ${target.nodeName.toLowerCase()}`,
          filename: (target as HTMLImageElement | HTMLScriptElement).src || (target as HTMLLinkElement).href,
          selector: this.getSelector(target),
          time: Date.now()
        }
        this.addError(errorInfo)
      }
    }, true)
  }

  private getSelector(element: HTMLElement): string {
    let selector = element.tagName.toLowerCase()
    if (element.id) {
      selector += `#${element.id}`
    } else if (element.className) {
      selector += `.${element.className.split(' ').join('.')}`
    }
    return selector
  }

  private getErrorKey(error: ErrorInfo): string {
    // Create a unique key based on error properties
    return `${error.type}:${error.message}:${error.filename || ''}:${error.position || ''}`
  }

  private cleanupCache(): void {
    const now = Date.now()
    // Remove old entries
    for (const [key, cache] of this.errorCache) {
      if (now - cache.lastOccurrence > this.deduplicationWindow) {
        this.errorCache.delete(key)
      }
    }

    // If still too many entries, remove the oldest ones
    if (this.errorCache.size > this.maxCacheSize) {
      const sortedEntries = Array.from(this.errorCache.entries())
        .sort((a, b) => a[1].lastOccurrence - b[1].lastOccurrence)
      
      const entriesToRemove = sortedEntries.slice(0, sortedEntries.length - this.maxCacheSize)
      entriesToRemove.forEach(([key]) => this.errorCache.delete(key))
    }
  }

  private addError(error: ErrorInfo): void {
    const errorKey = this.getErrorKey(error)
    const now = Date.now()
    
    // Clean up old cache entries periodically
    this.cleanupCache()

    // Check if this error is already in the cache
    const existingError = this.errorCache.get(errorKey)
    
    if (existingError && (now - existingError.lastOccurrence) <= this.deduplicationWindow) {
      // Update existing error
      existingError.count++
      existingError.lastOccurrence = now
      existingError.error = {
        ...error,
        count: existingError.count,
        lastOccurrence: now
      }
    } else {
      // Add new error to cache
      this.errorCache.set(errorKey, {
        count: 1,
        lastOccurrence: now,
        error: {
          ...error,
          count: 1,
          lastOccurrence: now
        }
      })

      // Add to error list
      this.errorList.push(error)
      // Only send to server if it's a new error or outside deduplication window
      this.sendErrorToServer(error)
    }

    console.error('Error captured:', error)
  }

  private sendErrorToServer(error: ErrorInfo): void {
    // TODO: Implement your server logging logic here
    // Example:
    // fetch('/api/log', {
    //   method: 'POST',
    //   body: JSON.stringify(error),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
  }

  public getErrors(): ErrorInfo[] {
    // Return deduplicated errors with count information
    return Array.from(this.errorCache.values()).map(cache => cache.error)
  }

  public clearErrors(): void {
    this.errorList = []
    this.errorCache.clear()
  }
}

// Export singleton instance
export const errorMonitor = ErrorMonitor.getInstance()