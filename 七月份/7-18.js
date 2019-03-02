// var fs=require("fs");
// console.log(__dirname);
// console.log(__filename);
// fs.readFile("7-18.html","utf8",function(err){
// 	if(err){
// 		throw err;
// 	}
// 	console.log("ok拉");
// });
// var str="宽度";

// console.info(str.length);
// console.log(typeof [1,2,3,4].join(""));
//  // charCodeAt()的结果是 48--57 是汉字；

// // charCodeAt(a);通过下标获得子字符串下的字 再利用此可转化为Unicode 编码
// var array = ['a','b','c','d'];
// var removeArray = array.splice(1,0,'insert');
// console.log(array);//弹出a,insert,b,c,d
// var arr=new Array("s");
// console.log(arr.length);//3
// console.log(arr[0]);//undefine
// for(var i=0;i<arr.length;i++){
// 	console.log(arr[i]);//undefine undefine undefine
// }
// var arr=[1,5,8];
// for(var k in arr){
// 	console.log(arr[k]);
// }
var arr=Array.apply(null,{
	length:3
});
console.log(arr instanceof Array);
for(var k in arr){
	console.log(arr[k]);
}

//伪数组两个：
//function内的arguments对象 和 dom树遍历出来的节点
//解决方案：
//可以通过Array.prototype.slice.call(伪数组) 将伪数组转变为真正的Array对象