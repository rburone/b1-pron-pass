# Pronounceable password generator
Installation:
```
npm -i b1-pron-pass
```
Usage:
```javascript
const generator = require('b1-pron-pass')

// Generate a password with length of 8, only letters.
console.log(generator(8))
// RAEwCuFoC

// Generate a key of length 10 containing at least 1 of 3 random numbers.
console.log(generator(10, 3))
// d5oPOi0oEp
```
For better password generation the code uses various randomization in routines.