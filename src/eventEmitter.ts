export class EventEmitter {
  events: { [eventType: string]: Function[] }

  constructor() {
    this.events = {};
  }
  register(eventType: string, handler: Function) {
    if (!this.events[eventType]) {
      this.events[eventType] = []
    }
    this.events[eventType].push(handler);

  }
  emit(eventType: string, payload: Object) {
    if (this.events[eventType]) {
      this.events[eventType].forEach(cb => cb(payload));
    }
  }
}
