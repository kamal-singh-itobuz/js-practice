// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const output = document.getElementById("answer");
// function add() {
//     const val1 = parseInt(num1.value);
//     const val2 = parseInt(num2.value);
//     console.log(val1+val2);
//     const ans = val1 + val2;
//     output.innerText = "Answer is : "+ans;
// }

// To add more HTML in our HTML CODE
// document.addEventListener("DOMContentLoaded", () => {
//     createParagraph = () => {
//         const para = document.createElement("p");
//         para.textContent = "This is paragraph content";
//         document.body.appendChild(para);
//     }

//     const button = document.querySelector("button");
//     button.addEventListener("click", createParagraph);
// })

// BIG INT
// const num1 = 222222222222222222227887n;
// const num2 = 4n;
// console.log(num1+num2);



/////////////////////////////////////////////////////// ARRAY  /////////////////////////////////


// Creating array using Array() constructor
// const arr = new Array("apple", "Banana", "car");
// console.log(arr);

// const arr2 = ["apple", "banana", "cat"];
// console.log(arr2);

// const arr = [1,2,3,4,5,6,7,8,9];
// at() method--------------------------------------------------------
// console.log(arr.at(3)) //print the value at index 3
// console.log(arr[3]) //same as above
// console.log(arr.at(-3)) // printing started from end
// console.log(arr[-3]) // this is not valid


// concat() method --------------------------------------------------------
// const arr2 = ["apple", "banana", "cat"];
// let concatRes = arr.concat(arr2);
// console.log(arr)
// console.log(arr2)
// console.log(concatRes)
// concatRes = concatRes.concat(10,12,[3, , 5], [[100, 200, , 300]]);
// console.log(concatRes)

// [Symbol.isConcatSpreadable]: true; // Means values will be concatenated not the whole object
// const obj1 = { 0: 1, 1: 2, 2: 3, length: 5 };
// const obj2 = { 0: 1, 1: 2, 2: 3, length: 6, [Symbol.isConcatSpreadable]: true };
// console.log(arr2.concat(obj1, obj2));


// copyWithIn() method --------------------------------------------------------
// Syntax: arr.copyWithIn(target, start, end); NOTE: Array length will not change, array is modified...
// console.log([1, 2, 6, 4, 5].copyWithin(3)); //move all elements to the right by 2 positions
// console.log([1, 2, 6, 4, 5].copyWithin(2,3));
// console.log([1, 2, 6, 4, 5].copyWithin(1,2,5));

//                      --------------------------------------------------------
// entries() method => creates a new iterator object that contains the key/value pairs for each index
// const arr = [9,3,10,5, ,6];
// const iterator = arr.entries();
// console.log(iterator)
// console.log(iterator.next().value)
// for(let pair of iterator){
//     console.log(pair)
// }

//                      --------------------------------------------------------
// every() method : return true or false as per the condition
// every(callbackFn)
// every(callbackFn, thisArg)
// const arr = [10,102,200,1000,500];
// const res = arr.every((element) => {
//     if(element%10 === 0) return true;
//     return false;
// });
// console.log(res);
// check if one array is subset of another array
// const parent = ["apple","banana","cat","dog"];
// const sub = ["apple", "banana"];
// const res = (parent, sub) => {
//     return sub.every((element) => {
//         return parent.includes(element);
//     })
// }
// console.log(res(parent, sub));


// fill() method --------------------------------------------------------
// Syntax: arr.fill(value, start, end); value: by which elements will be replaced | Original array will be modified
// const arr = [10,102,200,1000,500];
// console.log(arr.fill(0))
// console.log(arr.fill(0, 2))
// console.log(arr.fill(0, 2, 4))
// const tempGirls = Array(5).fill("girl"); //create a new array and fill it with a specific value
// console.log(tempGirls)

//                   --------------------------------------------------------
// filter() method : it creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the given condition
// filter(callbackFn)
// filter(callbackFn, thisArg)
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'presentation'];
// const filteredArray = words.filter((word) => {
//     return word.length > 7;
// })
// console.log(filteredArray)


//                     --------------------------------------------------------
// find(), findIndex() | findLast(), findLastIndex() methods: all receives callback function
// find(): returns first element which meets condition | findLast(): return last element which meets the condition
// find(callbackFn)
// find(callbackFn, thisArg)
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'presentation'];
// const findRes = words.find((element) => {
//     return element.includes("des");
// });
// console.log(findRes);

// const findInd = words.findIndex((element) => {
//     return element === 'elite';
// })
// console.log(findInd);

//                        --------------------------------------------------------
// flat() method: returns a new flattened array | receives a value not the callback function
// flat()
// flat(depth): depth represent the how nested should be flattened, default depth= 1
// const arr = [0, 1, [100], [2, 5, [3, [4, 5]]]];
// console.log(arr.flat()); // default depth is 1
// console.log(arr.flat(Infinity)); //means whole flattened
// console.log(arr.flat(2));

// const sparseArr = [2, 3, , [4, 5, , [6, 7, [8, , 9]]]]; //TWIST here
// console.log(sparseArr.flat(2));



//                  --------------------------------------------------------
// forEach() method : The forEach() method of Array instances executes a provided function once for each array element.
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
// const arr = [0, 1, [100], [2, 5, [3, [4, 5]]]];
// arr.forEach((el) => {
//     console.log(el);
// });

// ForEach with async await
// const ratings = [5, 4, 5];
// let sum = 0;
// const sumFunction = async (a, b) => a + b;
// ratings.forEach(async (rating) => {
//     console.log(sum)
//     sum = await sumFunction(sum, rating);
// });
// console.log(sum);


//                    --------------------------------------------------------
// join() method: return a string after joining all the elements of an array
// join() // by default separator will be same as given in array
// join(separator)
// console.log(["hello", "world"].join()); // bydefault separator is comma
// console.log(["Kolkata", "The City of Joy"].join(' : '));
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
// console.log(matrix.join());
// console.log(matrix.join("; "));


//                        --------------------------------------------------------
// keys() | values() method : This method of Array returns a new array iterator object that contains the keys | values for each index in the array.
// const arr = [74,33,45,22,44,332,13,13,123];
// const iterator = arr.keys();
// for(const key of iterator){
//     console.log(key);
// }


//                         --------------------------------------------------------
// map() method : creates a new array populated with the results of calling a provided function on every element in the calling array.
// map(callbackFn)
// map(callbackFn, thisArg)
// returns a new array with each element being the result of the callback function
// const arr = [1,4,9,16,25,49,144];
// const mapRes = arr.map((el) => {
//     return Math.sqrt(el);
// })
// console.log(mapRes);


//                           --------------------------------------------------------
// Array.of() method : creates a new array with given elements
// console.log(Array.of(1,2,3,4));
// console.log(Array.of(4)); // create an array of size 1.
// console.log(Array(4)); //create an empty array of size 4


//                            --------------------------------------------------------
// reduce() mathod : reduce() method is recommended when you need to have a single value returned from iterating over your array.
// reduce(callbackFn); // if initial value is not provided, first value of array will be taken by accumulator
// reduce(callbackFn, initialValue)
// callbackFn(accumulator, item)
// const arr = [10,20,30,40]; //we want to calculate the sum of arr
// const res = arr.reduce((accumulator, item) => {
//     return accumulator += item;
// }, 0); //here 0 is the initial value of accumulator
// console.log(res);

// example: group the items based on category
// const items = [
//     { name: 'Apple', category: 'Fruit' },
//     { name: 'Onion', category: 'Vegetable' },
//     { name: 'Orange', category: 'Fruit' },
//     { name: 'Lettuce', category: 'Vegetable' },
// ];
// const groupedItems = items.reduce((acc, item) => {
//     const category = item.category;
//     if(!acc[category]) acc[category] = [];
//     acc[category].push(item.name);
//     return acc;
// }, {});
// console.log(groupedItems);


//                            --------------------------------------------------------
// with(idx, val) method : value is replaced at index 'idx' by 'val'
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.with(2, 6));

// const arr = [1, 2, 3, , 4, 5];
// console.log(arr.with(2, 6));
// console.log(arr.with(3, 100));




//////////////////////////////////////// OBJECTS ////////////////////////////

// let student = {
//     firstName: "Kamal",
//     lastName: "Singh",
//     mobile: 8192,
//     address: function (){
//         console.log("Uttar Pradesh");
//     }
// };
// console.log(student);

//access the object values
// console.log(student.mobile);
// console.log(student["mobile"]);
// student.address();

//how to add/ update 
// student['mobile'] = 374822;
// student.state = "U.P";
// console.log(student);

// how to delete a property
// delete student.state;
// console.log(student);
// console.log(student.state);


// check whether a property exists in object
// console.log("state" in student);
// console.log("address" in student);


// We can create an object using Object() constructor
// let obj = new  Object(); // new is optional here
// obj.title = "JS Intro";
// console.log(obj);

// we can pass a value to Object()
// let obj1 = Object(2); //can pass null, undefine, value
// console.log(obj1);
// it returns an object of a type that corresponds to the given value. e.g, passing a int primitive returns a int wrapper object.

// let obj1 = {
//     a : 1,
//     b : 2,
//     c : 3,
//     f : function () {
//         console.log(`The value of b is ${this.b}`);
//     }
// }
// let obj2 = {
//     b : 4,
//     d : 5,
//     e : "hello",
//     2 : 8
// }
//1. Object.assign() method
//syntax: Object.assign(target, source1, source2, /* …, */ sourceN)
// let obj3 = Object.assign(obj1, obj2); //obj1 is target so that will be modified
// console.log(obj3)
// console.log(obj1)



//2. Object.create() method: method is used to create a new object and link it to the prototype of an existing object.
// let obj4 = Object.create(obj1);
// obj4.b = 4;
// console.log(obj4.b);



//3. Object.entries() method: return an array of [key, values] => key must be in string format
// console.log(Object.entries(obj2));
// for(const [key, value] of Object.entries(obj2)){
//     console.log(`${key} : ${value}`);
// }



// 4. Object.freeze() | Object.isFrozen();  insertion, deletion & modification are not allowed
// let newObj2 = Object.freeze(obj2);
// console.log(Object.isFrozen(obj2));
// console.log(Object.isFrozen(newObj2));
// newObj2.name = "Kamal";
// obj2.name = "Singh";
// console.log(newObj2);
// console.log(obj2);



// 5. Object.seal() | Object.isSealed(); insertion & deletion are not allowed, only modification is allowed.
// newObj2 = Object.seal(obj2);
// console.log(Object.isSealed(obj2));
// console.log(Object.isSealed(newObj2));
// newObj2.z = "zz";
// newObj2.e = "hyy";
// console.log(obj2);
// console.log(newObj2);
// delete obj2.e; 
// console.log(obj2);



// 6. Object.keys() | Object.values() methods : create an array of keys | values
// const keyArr = Object.keys(obj2);
// console.log(keyArr);
// const valArr = Object.values(obj2);
// console.log(valArr);


// console.log("hello");
// const text = document.getElementById("input");
// text.addEventListener("input", () => {
//     console.log(text.value);
// })

// const head = document.querySelector("h2");
// head.innerText = "Hello";
// console.log(head.innerText);
// console.log(head.textContent);