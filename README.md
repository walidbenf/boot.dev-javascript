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

