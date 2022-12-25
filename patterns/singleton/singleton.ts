let counter = 0;
let instance: Counter | null = null;

class Counter {
    
    constructor() {
        if (instance)
            throw new Error('하나의 인스턴스만 생성할 수 있습니다.');
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return counter++;
    }

    decrement() {
        return counter--;
    }
}

const singletonCounter = new Counter();
export default singletonCounter;