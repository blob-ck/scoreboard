//배열 해체 할당: 순서대로 할당
const [a, b, c = 30] = [10, 20];
console.log(a, b, c);

const [d, e, ...f] = [1,2,3,4,5,6,7];
console.log(d, e, f); // 1 2 [ 3, 4, 5, 6, 7 ]
console.log(f instanceof Array); // true