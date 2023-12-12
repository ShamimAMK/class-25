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

// const fruits = ["apple", "mango", "banana", "orange"];

// const fruit = fruits.find((fruit, index, arr) => fruit.startsWith("b"));

// console.log(fruit);

// const fruitIndex = fruits.findIndex((fruit, index, arr) =>
//   fruit.startsWith("a")
// );

// console.log(fruitIndex);

// // some
// const friends = ["mimi", "mim", "tumpa", "rima"];
// const output = friends.some((frnd, index, arr) => frnd.endsWith("a"));

// const output2 = friends.every((frnd, index, arr) => frnd.endsWith("u"));

// // console.log(output);
// // console.log(output2);

// //chaining method
// // const newArr = [2, 4, 6, 8, 10, 11, 5];
// // let sum = 0;
// // const newNums = newArr
// //   .map((num) => num * 2)
// //   .filter((num) => num > 10)
// //   .forEach((num) => (sum += num));

// // console.log(sum);

// // reduce
// const numbers = [12, 15, 112, 122, 1132, 15, 13, 16];
// const sum3 = numbers.reduce((sum, num) => (sum += num));

// // console.log(sum3);

// const product2 = numbers.reduce((product2, num) => (product2 *= num));

// // console.log(product2);

// //reduce right

// const produc32 = numbers.reduceRight((product32, num) => (product32 *= num));

// console.log(produc32);

// const foods = ["biriani", "pasta", "chilliBurger", "noddle"];

// // foods.sort();

// // const srtFood = foods.sort((a, b) => b.localeCompare(a));
// const srtFood = foods.sort((a, b) => a.localeCompare(b));

// // console.log(foods);
// console.log(foods);

const shoppingCart = [
  { id: 1, title: "Shirt", price: 1000, rating: 4.7 },
  { id: 1, title: "T-Shirt", price: 350, rating: 4.6 },
  { id: 1, title: "Pant", price: 1200, rating: 4.0 },
  { id: 1, title: "Tops", price: 560, rating: 3.7 },
  { id: 1, title: "Shoe", price: 1500, rating: 4.9 },
  { id: 1, title: "Skirt", price: 450, rating: 5.0 },
];

// const sortedCart = shoppingCart.sort((a, b) => b.price - a.price);
// console.log(sortedCart);
const sortedCart = shoppingCart.sort((a, b) => a.price - b.price);
// console.log(sortedCart);

//flat
const nestedArr = [1, 2, 3, [3, 4, [5, 6], 5, 7], 9, 8, 7];
// const flatedArr = nestedArr.flat();
// const flatedArr = nestedArr.flat(2);
// const flatedArr = nestedArr.flat(3);

const flatedArr = nestedArr
  .flat(3)
  .flatMap((num, index, arr) => (num = num + 2));

console.log(flatedArr);
