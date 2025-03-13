declare global {
  interface Function {
    myCall(this: Function, thisArg: any, ...args: any[]): any;
    myApply(this: Function, thisArg: any, args: any[]): any;
  }
}

Function.prototype.myCall = function(thisArg: any, ...args: any[]) {
  const _this = this;
  thisArg.fn = _this;
  const result = thisArg.fn(...args);
  delete thisArg.fn;
  return result
}

Function.prototype.myBind = function(thisArg: any, ...args: any[]) {
  const _this = this;
  return function(...args2: any[]) {
    thisArg.fn = _this;
    const result = thisArg.fn( ...args ,...args2)
    delete thisArg.fn;
    return result
  }
}

export {};


function debounce(func: Function, wait: number, immediate?: boolean) {
  const _this = this;
  let lastTime: number = 0 
  return function(...args: any[]) {
    if (immediate && !lastTime) func.apply(_this, args);
    const now = Date.now();
    if (now - lastTime < wait) return;
    lastTime = now;
    func.apply(_this, args);
  }

}