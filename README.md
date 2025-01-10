# Boot.dev Javascript
#### Camel Case in JS
You'll remember that by convention in Python we used snake_case to write variable names. In JavaScript, the convention we encourage is to use camelCase.

Here are some casing examples:

- camelCase
- snake_case
- PascalCase
- SCREAMING_SNAKE_CASE

We aren't choosing these casing rules arbitrarily - it's true that the Python community as a whole prefers snake_case, while the JavaScript community tends to prefer camelCase.

#### In JavaScript the let keyword is used to create new variables. We've already written some strings directly in console.log statements, so now lets practice using them as variables.
```js
let name = 'John'
console.log(name)
// prints: John
```
#### JavaScript Strings
In JavaScript, a string can be written using either single quotes, for example: 'Hello', or double quotes, such as "Hello".

We prefer single quotes for JavaScript here at Boot.dev. It's important to have styling conventions so that all the code in a project looks consistent, making it easier to read and contribute to.
```js
const greeting = 'Hello'
greeting[0]    // 'H'
greeting[1]    // 'e'
greeting[2]    // 'l'
greeting[3]    // 'l'
greeting[4]    // 'o'
// you can also get the last char at length-1
greeting[greeting.length - 1] // 'o'
```
#### In JavaScript, you can use a template literal to interpolate dynamic values into a string template. Template literals are JavaScript's version of Python's f-strings.

For example:
```js
const shadeOfRed = 101
console.log(`the shade is ${shadeOfRed}`)
// prints: "the shade is 101"
```
 #### When a comparison happens, the result of the comparison is just a boolean value, it's either true or false.

Take the following two examples:
```js
const isBigger = 5 > 4
const isBigger = true
```
#### In Python, a function had to be defined before it could be used. That's not the case in JavaScript! Like most other programming languages, as long as the function is defined somewhere in the code, it can be called even before the definition.
```js
console.log(getLabel(3))
// prints 'awful'

function getLabel(numStars) {
  if (numStars > 7) {
    return 'great'
  } else if (numStars > 3) {
    return 'okay'
  } else {
    return 'awful'
  }
}
```
#### The way to think about how it works is that the JavaScript interpreter reads all the code first (including function definitions), then goes back and starts executing the code from the beginning.
```js
console.log(getLabel(3))
// prints 'awful'

function getLabel(numStars) {
  if (numStars > 7) {
    return 'great'
  } else if (numStars > 3) {
    return 'okay'
  } else {
    return 'awful'
  }
}
```
#### "Functions as values", or "first-class" functions are supported by JavaScript. That means that functions themselves can be passed around as data.
```js
function sayHello() {
  console.log('Hello there!')
}

function doTwice(f) {
  f()
  f()
}

doTwice(sayHello)
// Prints:
// Hello there!
// Hello there!
```
#### The #1 rule of programming in my book is "KISS":
```
Keep it simple, stupid
```
#### The var keyword is one such piece of "legacy code". var is similar to let and const in that it allows us to define a new variable. Like let, var creates a "mutable" or "changeable" variable. However, unlike let, var is less safe because it does some strange things with scope.
Basically, var works as you would expect within function scopes, but not within block scopes. An "if" statement is an example of a block scope.
```js
function printX(shouldSet) {
  if (shouldSet) {
    var x = 2
  }
  console.log(x);
  // Prints: 2
}
printX(true)
```
```js
function printX(shouldSet) {
  if (shouldSet) {
    let x = 2
  }
  console.log(x);
  // ReferenceError: x is not defined
}
printX(true)
```
#### Fat arrow functions, or "arrow functions" are another way to define functions in JavaScript. Arrow functions are newer than the function keyword, however, unlike the let/var issue, arrow functions are sometimes more appropriate, not always.
```js
const add = function(x, y) {
  return x + y
}
```
```js
const add = (x, y) => {
  return x + y
}
```
#### There are a couple of ways to concatenate two arrays (smushing them together) in JavaScript.
```js
let nums = [1, 2, 3]
nums = nums.concat([4, 5, 6])
console.log(nums)
// Prints: [1, 2, 3, 4, 5, 6]
```
#### The spread operator ... in JavaScript lets you unpack all the elements from an array and include them in a new one. It's a super handy way to quickly combine arrays or add elements without messing with the original array.
```js
const nums = [1, 2, 3]
nums.concat([4, 5, 6])
console.log(nums)
// Prints: [1, 2, 3]
```
#### JavaScript makes it easy to slice and dice arrays to work only with the section you care about.
The syntax is as follows: slice(fromIndex, untilIndex).
Like in Python, the first argument of a slice is inclusive and the second argument is exclusive.
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2))
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// ["camel", "duck"]

console.log(animals.slice(1, 5))
// ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// ["duck", "elephant"]

console.log(animals.slice(2, -1))
// ["camel", "duck"]

console.log(animals.slice())
// ["ant", "bison", "camel", "duck", "elephant"]
```
#### Modifying const Arrays
It's important to note that const arrays can still be modified, they just can't be reassigned. That means we can add and remove elements, but we can't set a new array value with the assignment operator: =.
```js
const drinks = []

// this works
drinks.push('lemonade')

// this breaks
drinks = ['root beer']
```
### Traditional Syntax For
```js
for (let i = 0; i < woods.length; i++) {
  console.log(woods[i])
}
```
### For-Of Syntax
```js
for (let wood of woods) {
  console.log(wood)
}
```
### Objects preferred syntax
```js
const name = 'Apple'
const radius = 2
const color = 'red'
const apple = {
  name: name,
  radius: radius,
  color: color,
}
```
#### Prefer 2nd example
```js
const name = 'Apple'
const radius = 2
const color = 'red'
const apple = {
  name,
  radius,
  color,
}
```
#### Objects can contain other objects! This means we can have properties that are potentially nested quite deep.
```js
const tournament = {
  referee: {
    name: 'Sally',
    age: 25,
  },
  prize: {
    units: 'dollars',
    value: 100,
  },
}
```
