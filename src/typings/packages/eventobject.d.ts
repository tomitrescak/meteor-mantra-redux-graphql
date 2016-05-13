declare module "eventobject" {
  export default class Event {
    on(listener: Function, executeImmediatelly?: boolean): void;
    off(listener: Function): void;
    attachListener(listener: Function): void;
    detachListener(listener: Function): void;
    reset(): void;
    emit(...args: any[]): void;
  }
}
