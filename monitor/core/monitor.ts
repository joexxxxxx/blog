// Core monitoring system using microkernel architecture
export interface ErrorEvent {
  type: string;
  message: string;
  timestamp: number;
  url?: string;
  line?: number;
  column?: number;
  error?: Error;
  stack?: string;
  metadata?: Record<string, unknown>;
}

interface MonitorPlugin {
  name: string;
  install(monitor: Monitor): void;
}

export class Monitor {
 
  private static instance: Monitor;

  private constructor() {}

  public static getInstance(): Monitor {
    if (!Monitor.instance) {
      Monitor.instance = new Monitor();
    }
    return Monitor.instance;
  }

   use( plugin: MonitorPlugin){

   }
  

}