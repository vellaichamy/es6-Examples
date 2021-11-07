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
  *q03(x, y) {
    x + y;
  },
};

console.log(`Value obj3:`, obj3);

// Destructuring  ====================
console.clear();
var list = [1, 2, 3];
var [a3, , b3] = list;
console.log(`Value a3:`, a3);
console.log(`Value b3:`, b3);

[b3, a3] = [a3, b3];
console.log(`Value a3:`, a3);
console.log(`Value b3:`, b3);
// ============================================

function getASTNode() {
  return { op: 1, lhs: 2, rhs: 3 };
}

var { op, lhs, rhs } = getASTNode();

console.log(`Value op:`, op);
console.log(`Value lhs:`, lhs);
console.log(`Value rhs:`, rhs);

// =====================================

function getASTNode2() {
  return { op: 1, lhs: { op: 2 }, rhs: 3 };
}

var {
  op: a4,
  lhs: { op: b4 },
  rhs: c4,
} = getASTNode2();

console.log(`Value a:`, a4);
console.log(`Value b:`, b4);
console.log(`Value c:`, c4);
// ======================
function f([name, val]) {
  console.log(name, val);
}

function g({ name: n, val: v }) {
  console.log(n, v);
}

function h({ name, val }) {
  console.log(name, val);
}

f(['bar', 42]);
g({ name: 'foo', val: 7 });
h({ name: 'bar', val: 42 });
// ============================
var list = [7, 42];
var [a5 = 1, b5 = 2, c5 = 3, d5] = list;
console.log(`Compare a5 === 7:`, a5 === 7);
console.log(`Compare b5 === 42:`, b5 === 42);
console.log(`Compare c5 === 3:`, c5 === 3);
console.log(`Compare d5 === undefined:`, d5 === undefined);

// Classes ===========================
console.clear();

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  getPos() {
    return {
      x: this.x,
      y: this.y,
    };
  }
}

let shape = new Shape(1, 10, 20);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));
shape.move(15, 35);
console.log(`Shape pos:`, JSON.stringify(shape.getPos()));

// =====================================
class Shape01 {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
  toString() {
    return `Shape01(${this.id})`;
  }
}
class Rectangle extends Shape01 {
  constructor(id, x, y, width, height) {
    super(id, x, y);
  }
  toString() {
    return `Rectangle > ${super.toString()}`;
  }
}
class Circle extends Shape01 {
  constructor(id, x, y, radius) {
    super(id, x, y);
  }
  toString() {
    return `Circle > ${super.toString()}`;
  }
}

let Shape001 = new Shape01(1, 10, 20);
console.log(Shape001.toString());
let rectangle = new Rectangle(2, 20, 30);
console.log(rectangle.toString());
let circle = new Circle(3, 30, 40);
console.log(circle.toString());

// Getter/Setter ==========================
class Rectangle01 {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  set width(width) {
    this._width = width;
  }
  get width() {
    return this._width;
  }
  set height(height) {
    this._height = height;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }
}

var r = new Rectangle01(50, 20);
console.log(`Compare rectangle.area === 1000:`, r.area === 1000);

// Symbol Type ===========================
// console.clear();

console.log(`Symbol("foo03"):`, Symbol('foo03'));
console.log(
  `Symbol("foo03") !== Symbol("foo03"):`,
  Symbol('foo03') !== Symbol('foo03')
);

const foo03 = Symbol();
const bar03 = Symbol();
console.log(`typeof foo03 === "symbol":`, typeof foo03 === 'symbol');
console.log(`typeof bar03 === "symbol":`, typeof bar03 === 'symbol');

let obj03 = {};
obj03[foo03] = 'foo03';
obj03[bar03] = 'bar03';
console.log(`Value obj03:`, JSON.stringify(obj03));
console.log(`Value Object.keys(obj03):`, Object.keys(obj03));
console.log(
  `Value Object.getOwnPropertyNames(obj03):`,
  Object.getOwnPropertyNames(obj03)
);
console.log(
  `Value Object.getOwnPropertySymbols(obj03):`,
  Object.getOwnPropertySymbols(obj03)
);
console.log(`Value obj03["foo03"]:`, obj03['foo03']);
console.log(`Value obj03[foo03]:`, obj03[foo03]);
//  Map/Set & WeakMap/WeakSet =========
console.clear();

let s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log(`s.size === 2:`, s.size === 2);
console.log(`s.has("hello"):`, s.has('hello') === true);
for (let key of s.values()) {
  console.log(`Data s:`, key);
}
// ==========================
let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Node {
  constructor(id) {
    this.id = id;
  }
  mark() {
    isMarked.add(this);
  }
  unmark() {
    isMarked.delete(this);
  }
  marked() {
    return isMarked.has(this);
  }
  set data(data) {
    attachedData.set(this, data);
  }
  get data() {
    return attachedData.get(this);
  }
}

let foo05 = new Node('foo05');

console.log(`Value foo05:`, JSON.stringify(foo05));
foo05.mark();
foo05.data = 'bar';
console.log(`foo05.data === "data":`, foo05.data === 'bar');
console.log(`Value foo05:`, JSON.stringify(foo05));
console.log(`foo05 isMarked:`, isMarked.has(foo05));
console.log(`attached data foo05:`, attachedData.has(foo05));
foo05 = null; /* remove only reference to foo05 */
console.log(`attached data foo05:`, attachedData.has(foo05));
console.log(`foo05 isMarked:`, isMarked.has(foo05));

// Promise  ===========================
console.clear();

function msgAfterTimeout(msg, who, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout);
  });
}

msgAfterTimeout('', 'Foo', 100)
  .then((msg) => msgAfterTimeout(msg, 'Bar', 200))
  .then((msg) => {
    console.log(`Response promise after 300ms:`, msg);
  });

// ===================

let fetchPromised = (name, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hi ${name}`), timeout);
  });
};

Promise.all([
  fetchPromised('Foo', 1000),
  fetchPromised('Bar', 500),
  fetchPromised('Baz', 200),
]).then(
  (data) => {
    let [foo, bar, baz] = data;
    console.log(`Response all promises: foo=${foo} bar=${bar} baz=${baz}`);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);

// Reflection ============================
let obj06 = {
  a: 1,
};
Object.defineProperty(obj06, 'b', {
  value: 2,
});
obj06[Symbol('c')] = 3;
console.log(`Reflect.ownKeys(obj06):`, Reflect.ownKeys(obj06));

// =========== End ==========================
const appDiv = document.getElementById('app');
appDiv.innerHTML =
  `<h1>ES6 Examples</h1> 

<br> Block-Scoped <br>
` +
  `Array x:` +
  JSON.stringify(x) +
  `<br> <h3>Block-Scoped Functions</h3>`;
