// //匹配所有匹配的子子字符串
// var str="kkjkjalkd kjk alkd as";
// var str1=[];
// var index=str.indexOf("k");//这是第一个k的索引值
// while (index!=-1) {
// 	str1.push(index);
// 	index=str.indexOf("k",index+1);
// }
// console.log(str1);
// //内置 时间 对象（非单体内置对象有8个？ 要用new操作符和Date构造函数来实例对象）
// //（单体内置对象 Math Gloable ）
// var date=new Date(2007,0,2);
// console.log(date.toDateString());
// var date1=Date();
// console.log(date1);
// console.log(new Date(2015,5,8));//==new Date(Date.UTC(2015,5,8))
// console.log(new Date("May 5,2008"));//==new Date(Date.parse("May 5,2008"))
//Date.parse()的字符串不能表示数字时 返回NaN
//Date.UTC()返回表示日期的毫秒数
//后台会调用它们 可省略


// setInterval(ti, 1000);
// function ti(){
// var today=new Date();
// var h=today.getHours();
// var m=today.getMinutes();
// var s=today.getSeconds();
// function checkTime(i)
// {
// 	if(i<10){
// 		i="0" + i;
// 	}
// 	return i;
// }
// m=checkTime(m);
// s=checkTime(s);

// str=("当前时间是："+h+"时"+m+"分"+s+"秒");
// console.log(str);
// }
// ;((function f(){
// 	var a=9;
// 	return function(){
// 		console.log(a);
// 	};
// })());
// var a=9;
// var b=8;
// if(a>b){
// 	console.log(a);
// }
// else{
// 	console.log(b);
// }
// var a=9;
// function f(){
// 	return function(){
// 		console.log(++a);
// 	};
// }
// var ff=f();
// ff();
// ff();
// ff();
// console.log(parseInt(1.5555));
// function f(){
// 	var arr=[];
// 	for(var i=0;i<10;i++){
// 		arr[i]=function(){
// 			return i;
// 		};
// 	}
// 	console.log(arr);
// }
// f();
// console.log(a);     // function a(){console.log(2);  }
// var a = 1;
// function a(){
//     console.log(2);
//  }
//  console.log(a);    //1
//  // a();    //无法执行

var a ;
function a(){
	console.log(2);
}
console.log(a);
a = 1;
console.log(a);
 a() ;//a不是一个函数了


 // 仅仅声明某一个函数，引擎并不会对函数内部的任何变量进行查找或赋值操作。
 // 只会对函数内部的语法错误进行检查。
//  for(var i=0; i<10; i++) {
//  	result[i] = function(){     　　return i;
//  	　　}
//  　　}
// // 我原本以为它是这样的：
// 1 result[0] = function() { return 0;};
// 2 result[1] = function() { return 1;};
// 3 result[2] = function() { return 2;};
// 4 ......
// 实际上它是这样的：
// 1 result[0] = function() { return i;}；
// 2 result[1] = function() { return i;}；
// 3 result[2] = function() { return i;}；
// 4 ......
function createFunctions() {
    var result = newArray();
    for(var i=0; i<10; i++) {
        result [i] = function() {
            return i;
         };
     }
    return result;
}
var foo = createFunctions();
console.log(foo[0]());    //10
