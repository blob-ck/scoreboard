let book = {title: "인사이드 자바스크립트", price: 18000};
let copyBook = book;
let copyBook2 = Object.assign({}, book, {title: "제목이 바뀐다."});
copyBook.price = 20000;
console.log(book);      //{ title: '인사이드 자바스크립트', price: 20000 }
console.log(copyBook);  //{ title: '인사이드 자바스크립트', price: 20000 }
console.log(book === copyBook); // true

let copyBook3 = {...book, ...{a:333}, b:141};
console.log(copyBook3);