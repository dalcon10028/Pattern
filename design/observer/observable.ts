type Observer = (message: string) => void

export default class Observerable {
  private observers: Observer[]
  constructor() {
    this.observers = [];
  }

  subscribe(fn: Observer) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Observer) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(message: string) {
    this.observers.forEach(observer => observer(message));
  }
}