class Counter {
    private counter = 0;
    private instance = null;
    
    constructor() {
        if (this.instance)
            throw new Error('하나의 인스턴스만 생성할 수 있습니다.');
        this.instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;