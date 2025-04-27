// Error Types
// 1-ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
let firstName = 'Anveshika'
let fullName = firstName + ' ' + lastName
console.log(fullName)

// 2-SyntaxError: A syntax error has occurred
let square = 2 * 2
console.log(square)
console.log('Hello, world')

// 3-TypeError: A type error has occurred
let num = 10
console.log(num.toLowerCase())