/// <reference types="electron"/>

interface Schedule {
  id: number;
  name?: string;
  breakTime: number;
  workTime: number;
  delayTime: number;
  message?: string;
  enable?: boolean;
}

interface ReactBrowserWindowOption
  extends Electron.BrowserWindowConstructorOptions {
  pathname?: string;
  template?: string;
}

interface Window {
  electron?: any;
}

declare const electron: any;
