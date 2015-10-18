/*
var bob = new Object();
bob.age = 56;
bob.name = "Bob Smith";

function Person(name, age) {
	this.name = name;
	this.age = age;
}
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

alert("This person's name is " + susan.name + " and she is " + susan.age + " years old");

var d = new Person();
alert(d.constructor);

var n = new Number();
alert(n.constructor);


function Cat(age, color) {
	this.age=age;
	this.color=color;
}
function Dog(age, name, breed, size) {
	this.age=age;
	this.name = name;
	this.breed =breed;
	this.size=size;
}
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.species = "Homo Sapiens";
}
var sally = new Person();
sally.name="Sally Bowles";
sally.age=39;
var holden = new Person();
holden.name="Holden Caulfield";
holden.age=16;


function Rectangle(height, width) {
	this.height = height;
	this.width =width;
	this.calcArea = function() {
		return this.height * this.width;
	};
	this.calcPerimeter = function() {
		return 2 * (this.width + this.height);
	};
}
var rex = new Rectangle(7, 3);
console.log(rex.calcArea());

var x = 200;
var y = 350;
var ballWidth = 300;
var ballHeight = 200;

var draw = function() {
	background(255, 206, 71);

	fill(191, 0, 225);
	ellipse(x, y, ballWidth, ballHeight);

	x++;
	y -= 2;
	ballWidth *= 0.99;
	ballHeight /=1.01;
}
console.log(x);
*/

var luba = {
	name: "Luba",
	status: "friend",
	gender: "woman",
	profession: "pianist",
	passion: {
		dance: "tango",
		music: "piano"
	}
};
alert(luba.name + " is my " + luba.status +". She is a very intelligent " + luba.gender + ". Luba is a " + luba.profession + 
	". She is passionate about " + luba.passion.dance + " and " + luba.passion.music + ".");
