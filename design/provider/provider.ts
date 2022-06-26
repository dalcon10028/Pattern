interface Person {
    name: string;
    age: number;
    nationality: "American" | "Korean"
}

const person: Person = {
    name: "이연권",
    age: 25,
    nationality: "Korean"
};

const personProxy = new Proxy(person, {
    get: (obj: Person, prop: keyof Person, receiver: Person) => {
        /* https://ui.toast.com/weekly-pick/ko_20210413 */
        console.log(`${prop}의 값은 ${Reflect.get(obj, prop, receiver)}입니다.`);
        return obj[prop];
    },
    /* https://github.com/microsoft/TypeScript/issues/47295 */
    set: (obj: Person, prop: keyof Person, value, receiver: Person) => {
        console.log(`${prop}의 값이 ${obj[prop]}에서 ${value}로 변경되었습니다.`);
        return Reflect.set(obj, prop, value, receiver);
    }
});

export default personProxy;