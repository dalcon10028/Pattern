type Observer = (message: string) => void

class Observerable {
  observers: Observer[]
  constructor() {
    this.observers = [];
  }

  subscribe(fn: Observer) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Observer) {
    this.observers = this.observers.filter(observer => observer !== fn);
  }

  notify(data: string) {
    this.observers.forEach(observer => observer(data));
  }
}