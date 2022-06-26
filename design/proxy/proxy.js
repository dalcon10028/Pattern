const person = {
  name: "이연권",
  age: 25,
  nationality: "Korean",
};

const personProxy = new Proxy(person, {
  get: (obj, prop, receiver) => {
    return Reflect.get(obj, prop, receiver);
  },
  set: (obj, prop, value, receiver) => {
    return Reflect.set(obj, prop, value, receiver);
  },
});

console.log(personProxy.ss);
