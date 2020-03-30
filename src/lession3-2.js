// 2.9-52
// es5 中将伪数组转换成数组该怎么办
// es6 怎么做呢
// 集合调用不了，数组的api
// 伪数组 1.按照索引方式存储数据的，2 ，具备length 属性 {0:'a',1:'b',length:2}
// 伪数组转化数组 es6 已经废弃 arguments
let args = [].slice.call(arguments); // collection
console.log(args);
//
let imgs = [].slice.call(document.querySelector('img')) //NodeList

// es6  Array.prototype.from

let agrs = Array.from(arguments);
let imgs = Array.from(document.querySelectorAll('img'));

let new_arr = Array.from([{length:5}],function(){return 1;})

// 2.10
// es5 中如何创建一个新数组
// es6 怎么做
// let array = Array(5);
// let array = []
// Array.prototype.of
// Array.prototype.fill 填充数组
// Array.fill(valeu,start,end);

//let array = Array.of(1,2,3,4,5);
//let array = Array(6).file(9);
//console.log(array);

// 2.11 如何查找元素

let arr = [1,2,3,4,5];

/*let find = arr.filter(function(item){
	return item === 3;
	return item % 2 === 0;
})

console.log(find);
*/
// Array.prototype.find
let find = arr.find(function(item){
	return item === 2
})

console.log(find);

// Array.prototype.find

// 总结 遍历 转换 生成 查找



