// 2-2-52
// 作用域 1 全局作用域 2 函数作用域 3 块状作用域 4 动态作用域   let&&const
// 块状作用域的意义
// var 定义的叫全局变量（变量是不可以被删除的，熟悉是可以被删除的） 没有用var定义的被当作 window的属性被调用

/*var abc = 1234;

function test()
{
	ab = 45;
}

test();*/

// 函数作用域 （局部作用域）
// 块作用域 （和 let 有关）
// 作用域链

function test(){
	var a = 3;
	function test2()
	{
		return a+4;
	}
	return test2();
}

console.log(test());

// 动态作用域
window.a = 3

function test()
{
	console.log(this.a);
}

test()
test.bind({a:100})()