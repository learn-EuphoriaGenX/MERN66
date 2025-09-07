// MAP | FILTER | REDUCE

// let sq = n => n * n
// let gt20 = n => n > 20
// let sum = (a, b) => a + b

let newSquare = [1, 2, 3, 4, 5].map(n => n * n)
let gt20Array = [2, 20, 1, 9, 33, 89, 23, 56, 6, 23].filter(n => n > 20)
let sumArray = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0)

console.log(sumArray);

