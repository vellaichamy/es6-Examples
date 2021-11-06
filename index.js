// Import stylesheets
import './style.css';


const PI = 3.141593;
console.log(PI > 3.0);
// Block-Scoped 

let a = new Array('a', 'b', 'c');
let b = new Array('d', 'e', 'f');

let x = new Array('1', '2');
let y = new Array('3', '4');

for (let i = 0; i < a.length; i++) {
  let x = a[i];
  console.log(`Value x[${i}]:`, x);
}
for (let i = 0; i < b.length; i++) {
  let y = b[i];
  console.log(`Value y[${i}]:`, y);
}

console.log(`Array x:`, JSON.stringify(x));
console.log(`Array y:`, JSON.stringify(y));

let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function() {
    return i * 2;
  }
}
console.log(`Compare callback[0] === 0:`, callbacks[0]() === 0);
console.log(`Compare callback[1] === 2:`, callbacks[1]() === 2);
console.log(`Compare callback[2] === 4:`, callbacks[2]() === 4);

// ===Block-Scoped Functions==================

console.clear();
function foo() {
  return 1;
}
console.log(`Compare foo() === 1:`, foo() === 1);

{
  function foo() {
    return 2;
  }
  console.log(`Compare foo() === 2:`, foo() === 2);
}

console.log(`Compare foo() === 1:`, foo() === 1);
// =>Arrow Functions================================

// console.clear();

let evens = new Array(1, 2, 3);

let odds = evens.map(v => v + 1);
let pairs = evens.map(v => ({
  even: v,
  odd: v + 1
}));
let nums = evens.map((v, i) => v + i);

console.log(`Array odds:`, JSON.stringify(odds));
console.log(`Array pairs:`, JSON.stringify(pairs));
console.log(`Array nums:`, JSON.stringify(nums));

// ========= Statement ==================

console.clear();
let nums01 = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
let fives = new Array();

nums01.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(`Array fives:`, JSON.stringify(fives));
// ============ Lexical  ============
let example = {
  nums: [2, 5, 3, 6, 8, 4, 5, 1, 5],
  fives: [],
  getFives: function() {
    this.nums.forEach((v) => {
      if (v % 5 === 0)
        this.fives.push(v);
      });
  }
}

example.getFives();

console.log(`Array example.nums:`, JSON.stringify(example.fives));

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ES6 ES7 Examples</h1> 

<br> Block-Scoped <br>
` +`Array x:`+ JSON.stringify(x) +
`<br> <h3>Block-Scoped Functions</h3>` ;