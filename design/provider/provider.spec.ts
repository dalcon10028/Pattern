import YeonProxy from "./provider";

it('이름은 "이연권" 입니다.', () => {
    expect(YeonProxy.name).toBe('이연권');
});

it('국적은 한국인 입니다.', () => {
    expect(YeonProxy.nationality).toBe('Korean');
});

it('나이는 25입니다.', () => {
    expect(YeonProxy.age).toBe(25);
});