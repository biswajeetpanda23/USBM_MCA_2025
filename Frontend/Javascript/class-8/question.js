// example of push () pop() shift() unshift()

//push*()

let fruits = ['apple', 'banana'];
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'banana', 'mango']

let length = fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']
console.log(length); // Output: 4

//pop()


let animal = ['tiger', 'leo', 'monkey'];
 animal.pop();
console.log(animal); // Output: ['tiger', 'leo']

//shift()

let car = ['BMW', 'TATA', 'HUNDAI'];
car.shift();
console.log(car); // Output: [ 'TATA', 'HUNDAI' ]

//unshift()

let course=['php','java','javascript'];
course.unshift('python');
console.log(course);// Output:[ 'python', 'php', 'java', 'javascript' ]