//2.13 es5 中怎么申明一个类的  es6是怎么做的
// es5 用函数描述类
// 类的定义和实例化
/*let Animal = function(type){
	this.type = type;
}
// 原型链继承
Animal.prototype.eat = function(){
	console.log('i am eat food');
}
let dog = new Animal('dog');
let monkey = new Animal('monkey');

console.log(dog);
console.log(monkey);
// monkey.constructor 指的就是 function
monkey.constructor.prototype.eat = function (){
	console.log('error');
}

dog.eat();
monkey.eat();*/

// es6 语法糖
/*class Animal {
	constructor(type){
		this.type = type;
	}
	eat(){
		console.log("i am eat food");
	}
}


let dog = new Animal('dog');
let monkey = new Animal('monkey');

//console.log(dog);
//console.log(monkey);

//dog.eat();
//monkey.eat();*/

//console.log(typeof Animal);

// 2.14 属性 
/*
let _age = 4
class Animal {
	constructor(type){
		this.type = type;
	}
	
	get age ()
	{
		return _age;
	}
	
	set age (val)
	{
		if(val < 7 && val > 4){
			_age = val
		}
	}
	eat(){
		console.log("i am eat food");
	}
}

let dog = new Animal('dog');
console.log(dog.age);
dog.age = 6;
console.log(dog.age);*/

// 2.15 1对象实例的方法  2类的静态方法
// 静态方法 es5
/*let Animal = function (type)
{
	this.type = type;
}

Animal.prototype.eat = function()
{
	Animal.walk();
	console.log('i am eat food');
}

Animal.walk = function()
{
	console.log('i am walk');
}

let dog = new Animal('type');
dog.eat();
dog.walk(); // 

class Animal {
	constructor(type){
		this.type = type
	}
	
	eat(){
		Animal.walk();
		console.log('i am eat food');
	}
	
	static walk (){
		console.log('i am walk');
	}
}

let dog = new Animal('dog');
dog.eat()*/

// 2.16 继承




