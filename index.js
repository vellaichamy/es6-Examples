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

let callbacks = [];
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () {
    return i * 2;
  };
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

let odds = evens.map((v) => v + 1);
let pairs = evens.map((v) => ({
  even: v,
  odd: v + 1,
}));
let nums = evens.map((v, i) => v + i);

console.log(`Array odds:`, JSON.stringify(odds));
console.log(`Array pairs:`, JSON.stringify(pairs));
console.log(`Array nums:`, JSON.stringify(nums));

// ========= Statement ==================

// console.clear();
let nums01 = new Array(2, 5, 3, 6, 8, 4, 5, 1, 5);
let fives = new Array();

nums01.forEach((v) => {
  if (v % 5 === 0) fives.push(v);
});

console.log(`Array fives:`, JSON.stringify(fives));
// ============ Lexical  ============
let example = {
  nums: [2, 5, 3, 6, 8, 4, 5, 1, 5],
  fives: [],
  getFives: function () {
    this.nums.forEach((v) => {
      if (v % 5 === 0) this.fives.push(v);
    });
  },
};

example.getFives();

console.log(`Array example.nums:`, JSON.stringify(example.fives));
// Default Parameter ==================
function function1(x, y = 7, z = 42) {
  return x + y + z;
}
console.log(`Compare function1() === 50:`, function1(1) === 50);

// Rest Parameter ==========================

let a01 = new Array(1, 2, 3, 4, 5);

function function2(x, y, ...a01) {
  return (x + y) * a.length;
}
console.log(
  `Compare function2() === 9:`,
  function2(1, 2, 'hello', true, 7) === 9
);

// Spread Operator ======================

function function2(x, y, ...a) {
  return (x + y) * a.length;
}

let params = ['hello', true, 7];
console.log(`Compare function2() === 9:`, function2(1, 2, ...params) === 9);
let other = [1, 2, ...params];
console.log(`Array other:`, JSON.stringify(other));

let str = 'foo';
let chars = [...str];
console.log(`Array chars:`, JSON.stringify(chars));

// Template Literals ====== String Interpolation =
// console.clear();

let customer = {
  name: 'Foo',
};

let card = {
  amount: 7,
  product: 'Bar',
  unitprice: 42,
};

let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

console.log(`Value message:`, message);

// Custom Interpolation ==================
function get(array, param1, param2) {
  console.log(`Value params get():`, JSON.stringify(array), param1, param2);
  let url = `${array[0]}${param1}${array[1]}${param2}`;
  console.log(`Value url:`, url);
}

let bar = `Hello`;
let baz = `Ugra`;
let asd = `Rithu`;

get`http://example.com/foo?bar=${bar + baz}&param =${asd}`;

// Raw String Access

function quux(strings, ...values) {
  console.log(`Compare strings[0] === "foo\\n":`, strings[0] === 'foo\n');
  console.log(`Compare strings[1] === "bar":`, strings[1] === 'bar');
  console.log(`Compare values[0] === 42:`, values[0] === 42);
  console.log(
    `Compare strings.raw[0] === "foo\\\\n":`,
    strings.raw[0] === 'foo\\n'
  );
  console.log(`Compare strings.raw[1] === "bar":`, strings.raw[1] === 'bar');
}
quux`foo\n${42}bar`;

console.log(`Compare String.war:`, String.raw`foo\n${42}bar` === 'foo\\n42bar');

// Binary & Octal Literal ==================

console.log(`Compare binary 0b111110111 === 503:`, 0b111110111 === 503);
console.log(`Compare octal 0o767 === 503:`, 0o767 === 503);

// Property Shorthand =====================
console.clear();
let x01 = 1;
let y01 = 2;

let obj = {
  x01,
  y01,
};

console.log(`Value obj:`, JSON.stringify(obj));

// Computed Property ===================

let q01 = () => ` foo`;

let obj2 = {
  foo: 'bar',
  ['baz' + q01()]: 42,
};

console.log(`Value obj2:`, JSON.stringify(obj2));

// Method Properties ==================

let obj3 = {
  foo(a, b) {
    a + b;
  },
  bar(x, y) {
    x * y;
  },
  * q03(x, y) {
    x + y;
  }
  };
  
  console.log(`Value obj3:`, obj3);




// =========== End ==========================
const appDiv = document.getElementById('app');
appDiv.innerHTML =
  `<h1>ES6 ES7 Examples</h1> 

<br> Block-Scoped <br>
` +
  `Array x:` +
  JSON.stringify(x) +
  `<br> <h3>Block-Scoped Functions</h3>`;
