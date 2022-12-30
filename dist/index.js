"use strict";
let age = 22; // age will be a number
let fullName = "Ajibola Segun"; // string
let isDark = true; // boolean
let hobbies = "coding"; // can be any data type
let ids = [4, 5, 2]; // array of numbers
let store = [4, "five", 2]; //array of any data types
// Tuple
let person = [3, true, "Hi"]; // array will contain number, boolean and string in the order
// Tuple Array
let person2; // array of arrays and will only contain number and string in the order, example below
person2 = [
    [1, "John"],
    [2, "Mike"],
    [3, "Lekan"],
];
// Union
let pid; // can be string or number
pid = "22";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up, Direction.Left); // output = 1, 3
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction.Up, Direction.Left); // output = 2, 4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "one";
    Direction2["Down"] = "two";
    Direction2["Left"] = "three";
    Direction2["Right"] = "four";
})(Direction2 || (Direction2 = {}));
console.log(Direction.Up, Direction2.Left); // output = one, three
const user = {
    id: 5,
    name: "Segun",
};
// can also be written as this below for user2
const user2 = {
    id: 5,
    name: "Segun",
};
// Type Assertion
let cid = "hello"; // cid can be any type
let customerID = cid; // customerID can have cid as a number
let customerID2 = cid; // same as above, customerID2 can have cid as a number
// cid can be anything but customerID can only be a number
customerID = cid = 2;
// Functions
function addNum(x, y) {
    // parameters can be numbers, the return will be a number.
    return x + y;
}
// Void
function log(message) {
    // parameters can be string or number, the return is not specified so it's void.
    console.log(message);
}
log("hello"); // Can be able to pass string or number to log() function
const user3 = {
    id: 5,
    secondid: 3,
    name: "Segun",
    age: 3,
};
// user3.secondid = 4 // cannot change value because it is only read-only
user3.age = 4; // can change value of age
const p1 = 2;
// Arrow function
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(3, "brad");
const mike = new Person(2, "mike");
console.log("brad", brad.id, brad.name);
console.log("mike", mike.id, mike.name);
