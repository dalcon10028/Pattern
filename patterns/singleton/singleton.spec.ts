import Counter from "./singleton";

it('1회 increment할 경우 1이 됩니다.', () => {
    Counter.increment();
    expect(Counter.getCount()).toBe(1);
});

it('2회 decrement할 경우 -1이 됩니다.', () => {
    Counter.decrement();
    Counter.decrement();
    expect(Counter.getCount()).toBe(-1);
});