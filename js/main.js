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

