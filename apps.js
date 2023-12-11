"use strict";

// //simple array methods
// const numbers = [10, 20, 30, 40, 50];

// //push()
// numbers.push(60);

// //pop()
// numbers.pop();

// //shift()
// numbers.shift();

// //unshift()
// numbers.unshift(5);

// //at()
// console.log(numbers.at(-4));

// //indexOf()
// console.log(numbers.indexOf(50));

// //include()
// console.log(numbers.includes(70));

// //slice()
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15];

// const slicedarr1 = arr1.slice(0, 4);

// console.log(slicedarr1);

// //splice()
// const arr2 = [11, 12, 13, 14, 15, 6, 7, 8, 9, 10, 12, 14, 15];

// const splicedArr = arr2.splice(0, 5);
// const splicedArr1 = arr2.splice(6, 6);
// const splicedArr2 = arr2.splice(12, 2);
// console.log(splicedArr, splicedArr1, splicedArr2);

// //forEach
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // let sum = 0;

// // for (const num of nums) {
// //   sum += nums;
// // }

// // console.log(sum);
// let sum = 0;

// nums.forEach((el, index, arr) => (sum += el));

// //   console.log(el);
// //   console.log(index);
// //   console.log(arr);

// console.log(sum);

// const temp = [18, 19, 21, 23, 25, 26];

// let product = 1;

// temp.forEach((temp, index, arr) => (product *= temp));
// console.log(product);

// //map
// const areas = [4, 5, 6, 7, 3, 4, 56, 43, 23];

// const result = areas.map((area) => area * area);

// console.log(result);

// //filter
// const myArr = [10, 11, 12, 14, 15, 16, 21, 22, 23, 24, 25, 26];

// const oddNum = myArr.filter((el) => el % 2 === 0);
// const evenNum = myArr.filter((el) => el % 2 !== 0);
// console.log(oddNum);
// console.log(evenNum);

//find

const fruits = ["apple", "mango", "banana", "orange"];

const fruit = fruits.find((fruit, index, arr) => fruit.startsWith("b"));

console.log(fruit);

const fruitIndex = fruits.findIndex((fruit, index, arr) =>
  fruit.startsWith("a")
);

console.log(fruitIndex);

// some
const friends = ["mimi", "mim", "tumpa", "rima"];
const output = friends.some((frnd, index, arr) => frnd.endsWith("a"));

const output2 = friends.every((frnd, index, arr) => frnd.endsWith("u"));

// console.log(output);
// console.log(output2);

//flat
