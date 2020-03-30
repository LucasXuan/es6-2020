// 2.7-52,2.8-52
// 数组
// es5 中数组用多少种遍历方法。

var arr = [1,2,3,4,5,6,7,8];

// for 循环 支持 continue break
for(var i=0;i<=arr.length;i++){
	if(i == 2){
		continue; // 跳过
		
		break;   // 退出
	}
	//console.log(arr[i]);
}

// forEach 不支持 continue break
arr.forEach(function(item){
	//console.log(item)
})

// es5 新增api every  可以达到  continue break 效果
arr.every(function(item){
	if(item === 2){
		//return false;
	} else {
		//console.log(item);	
	}
	
	return true;
})

// for in  为对象设计的
// arr.a=9; 
// == 只检测值  === 值和类型的检查
// 支持 continue break
for(let index in arr){
	if(index*1 === 2){ // *1 类型转换
		continue;
	}
	//console.log(index,arr[index]);
}


// es6 for of
// 可以遍历自定义数据结构
for (let item of arr){
	//console.log(item);
}

const Price = {
	A:[1.5,2.3,4.5],
	B:[3,4,5],
	C:[0.5,0.8,1.2]
};

for (let index in Price){
	for(item in Price[index]){
		console.log(Price[index][item]);;
	}
}