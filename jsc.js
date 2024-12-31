var p = console.log.bind(console);
console.log('hi')

const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    console.log('running function')
  }
};

// dot notation
console.log(myObject.property); // 'Value!'

// bracket notation
console.log(myObject["obnoxious property"]); // [Function]

const variable = 'property';

myObject.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable]; // this is equivalent to myObject['property'] and returns 'Value!'



function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return (`${this.title} ${this.author} ${this.pages} ${this.read}`)
  }
}
const Hobbit = new Book('The Hobbit', 'Tolkien', 457, false)
console.log(Hobbit.title)
console.log(Hobbit.info())

console.log(Object.getPrototypeOf(Hobbit))
console.log(Player.prototype)
console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2))
console.log(Object.getPrototypeOf(player1) === Object.getPrototypeOf(Hobbit))
console.log(player1.valueOf())


const name = "Bob";
const age = 28;
const color = "red";
console.log(name, age, color);
console.log({ name, age, color });

const nowFancyObject = { name, age, color };
p(nowFancyObject.name, nowFancyObject.age)