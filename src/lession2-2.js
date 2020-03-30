// 2-4-52
// var 和 let 区别
{
	let a = 1;
	console.log(a);
}

var b = 3;
let c = 4;

console.log(b,c);
console.log(window.b,window.c);// window 无法读取到 let 定义的变量

var b = 4; // var 可以重复定义相同的变量
let c = 5; // let 不可重复定义 ，不会变量提升。

// const 具备 let 的特性，同时const 是用来定义常量，不可先申明在赋值

// 阅读材料
// 什么是作用域
// javascript深入之词法作用域和动态作用域
// 深入理解js中申明提升，作用域（链）和 this关键字

// 练习
// 请问下面代码输出什么？如何根据I的顺序输出

for(var i = 0;i<3:i++){
	setTimeout(function(){
		console.log(i)
	},1000);
} 

// 请问下面的代码会发生什么
console.log(a);

let a = 1;