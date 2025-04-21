//FIND
let numbers = [2, 4, 5, 10, 54, 30, 60, 54];
// tìm phần tử đầu tiên lớn hơn 20
const findNumber = numbers.find((item) => {
    return item > 20;
});
console.log("🚀 ~ findNumber:", findNumber)

//Object.key
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));


//Object.values
const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj1));


//bài 1
let names = ["John", "Alice"];
names.push('Tom');
console.log(names);

//bài 2
let number = [1, 2, 3, 4];
let newarray = number.map((item) => {
    return item * item
});
console.log(newarray);

//bài 3
let number1 = [5, 10, 15, 20, 25];
let evenNumbers = number1.filter((item1) => {
    // trả về phần tử khi phần tử đó thoả mãn điều kiện return
    return item1 % 2 === 0;
});
console.log(evenNumbers);

//bài 4
let sinhvien = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
let found = sinhvien.find((item2) => {
    return item2.score >= 8
});
console.log(found);

//bài 5
const number2 = [3, 5, 8, 12, 15];
const index = number2.findIndex(element => element > 10);
console.log(index);

//bài 6
let ABC = ['a', 'b', 'c', 'd', 'e'];
ABC.splice(3, 1, "f")
console.log(ABC);

//bài 7
const obj3 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log(Object.keys(obj3));

//bài 8
const obj4 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log(Object.values(obj4));

//bai 9
let ab = { a: 1, b: 2 };
let cd = { c: 3, d: 4 };
let abcd = Object.assign({}, ab, cd);
console.log(abcd);

//bai 10
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];
console.log(arr2);

//bai 11
let namers = { name: 'Alice', age: 25 };
let namers2 = { job: 'Developer' };
let namers3 = { ...namers, ...namers2 };
console.log(namers3);

//bai 12
let namers10 = ['john', 'alice', 'tom'];
let namersNew = namers10.map((item) => {
    return item.toUpperCase();
});
console.log(namersNew);

//bai 13
let numbers10 = [1, 2, 3, 4, 5, 6];
let evenNumbers10 = numbers10.filter((item) => {
    return item % 2 === 0;
});
console.log(evenNumbers10);

let Sum10 = evenNumbers10.reduce((sum, item) => {
    return sum + item;
}, 0);
console.log(Sum10);

//let 14
let number20 = [1, 2, 2, 3, 4, 4, 5];










