// // console.log(new Date());
// // console.log(new Date("s2015 2"));
// //dom 只是修改行间样式 而不是style中的
// // var date=new Date(2007,0,1);
// // var d=new Date();
// // console.log(d.toLocaleString());//相当于本地的时间格式
// // console.log(d.toString());//带有时区的的时间格式
// // console.log(d.valueOf());//返回的是日期的毫秒表示
// // console.log(Number(d));//返回的是日期的毫秒表示//返回的是日期的毫秒表示
// // console.log(+d);//返回的是日期的毫秒表示
// // console.log(new Date(2017,5));//手动设置的时间通过本地格式显示出来

// // var d1=new Date(2017,2,5);
// // var d2=new Date(2013,3,5);
// // console.log(d1>d2);//相当于是调用了valueof方法啊 console.log(d1.valueOf()>d2.valueOf());
// // var b=3;
// // 命名函数表达式：
// // 1、可以用a()调用该命名函数表达式，b只是一个标识符,不能调用函数。
// // 2、标识符b只有在函数作用域中有效，在外面的作用域中无效
// var a=function(x,c,v,b){
// 	// console.log(arguments);
// 	console.log(Array.prototype.slice.call(arguments,0));
// 	// console.log(b);
// };
// a(1,2,5,8);
// function sum(x, y) {
// 	console.log(x+y);
// }
// setTimeout(sum,2000,1,2);
var a=0;
var ti=null;
function move(){
	a++;
	console.log(a);
	if(a==3){
		clearInterval(ti);
		console.log('over');
	}
}
ti=setInterval(move,1000);

function testCaller() {

	console.log(testCaller.caller);
}

function aCaller() {
	testCaller();
    console.log(Array.prototype.slice.apply(arguments,[1]));//
}
console.log(aCaller.name);
aCaller(1,2,3);

// console.log(!!"ads");
var a=function b(){

};
console.log(a.name);//a可以访问到函数b的名字

var a=3;
// console.log(a++ +2);
console.log(++a+2);
console.log(a);
var a=[1,2];
console.log(a);
