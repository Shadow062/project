"use strict";




var number = 5;
var sting = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log("Sting" * 9);

let persone = {
	name: "John",
	age: 25,
	isMarried: false
};

console.log(persone.name);

let photo = ['plus.png', 'minus.jpg', 'second.bmp'];

console.log(photo[0]);

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = prompt("Есть ли вам 18?", "Да");

// console.log(answer);


let incr = 10,
	decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);
console.log("2" === 2);

let isChecked = true,
	isClose = false;

console.log(isChecked || isClose);