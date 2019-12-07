//객체 해체 할당
const obj = {a: 1, b: 2, c: 3}
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

const {a, b, c} = {...obj};

console.log(a, b, c);