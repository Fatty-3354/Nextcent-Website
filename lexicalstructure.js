
    // ==============================
// JavaScript Lexical Grammar Demo
// ==============================

// ------------------------------
// 1. IDENTIFIERS (Valid & Invalid)
// ------------------------------

// Valid identifiers
let userName = "Alice";       // letters and camelCase
let _age = 25;                // underscore allowed
let $salary = 5000;           // $ sign allowed
let score123 = 90;            // numbers allowed, but not at start

// Invalid identifiers (uncomment to see errors)
// let 123score = 10;          // ❌ Cannot start with a number
// let let = 5;                // ❌ Cannot use reserved keyword as identifier

// ------------------------------
// 2. KEYWORDS & RESERVED WORDS
// ------------------------------

// 'let', 'const', 'if', 'for', 'return' are keywords
// They cannot be used as identifiers
const isLoggedIn = true;      // keyword 'const' used to declare variable
let forLoopExample = 0;       // 'for' is reserved and cannot be variable

// ------------------------------
// 3. LITERALS
// ------------------------------

// Number literals
let decimalNumber = 42;       // integer literal
let floatingNumber = 3.14;    // floating-point literal
let hexNumber = 0xFF;         // hexadecimal literal

// String literals
let greeting = "Hello, world!";     // double quotes
let singleQuote = 'Single quotes';  // single quotes
let multiLine = `This is
a multi-line string
using template literals`;           // backticks (template literal)

// Boolean literals
let isTrue = true;
let isFalse = false;

// Null & Undefined literals
let nothing = null;            // null literal
let notAssigned;               // undefined by default

// ------------------------------
// 4. COMMENTS
// ------------------------------

// Single-line comment: explain simple statement
let x = 10; // initialize x with 10

/*
Multi-line comment: explain multiple lines
The next block calculates total score
using number literals and arithmetic operators
*/
let totalScore = score123 + x;

// ------------------------------
// 5. WHITESPACE & LINE TERMINATORS
// ------------------------------

// JavaScript ignores extra spaces and line breaks
let a = 1;           // single line
let b = 2;           // another line

let c =
    a +
    b;              // line terminators do not affect computation

console.log("Sum of a and b:", c);

// ------------------------------
// 6. AUTOMATIC SEMICOLON INSERTION (ASI)
// ------------------------------

// ASI inserts semicolons if missing, but can cause errors
function testASI() {
    return       // ASI inserts semicolon here
    {
        value: 100
    }
}
console.log("testASI():", testASI()); 
// Returns undefined because ASI added semicolon after return

// Correct way: avoid ASI pitfalls
function testCorrect() {
    return {
        value: 100
    };
}
console.log("testCorrect():", testCorrect());

// ------------------------------
// 7. CASE SENSITIVITY
// ------------------------------

let myVariable = 10;
let myvariable = 20;   // different from myVariable
console.log("myVariable:", myVariable, "myvariable:", myvariable);

// ------------------------------
// 8. UNICODE CHARACTERS IN IDENTIFIERS (BONUS)
// ------------------------------

// JavaScript supports Unicode in identifiers
let café = "Coffee shop";   // é is allowed
let 𝓧 = 100;               // Unicode math symbol
console.log("Unicode identifiers:", café, 𝓧);

// ------------------------------
// 9. FINAL OUTPUT
// ------------------------------

/*console.log("Valid identifiers:", userName, _age, $salary, score123);
console.log("Keywords example:", isLoggedIn, forLoopExample);
console.log("Literals example:", decimalNumber, floatingNumber, hexNumber, greeting, singleQuote, multiLine, isTrue, isFalse, nothing, notAssigned);
console.log("Total score:", totalScore);*/
