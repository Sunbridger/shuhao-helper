// if(true){
// 	function f(){
// 		console.log("sd");
// 	}
// }
// else{
// 	function f(){
// 		console.log("false");
// 	}
// }
// f();//老版本浏览器把 if for里的function当函数声明做（只火狐除外）现在javascript
// 都基本向火狐靠拢 把内部的函数当做函数表达式

// 变量的声明被提前到作用域顶部，赋值保留在原地
// 函数声明整个“被提前”，因此函数定义的上方也可以调用
// 函数有个属性 name表示函数名 只有带名字的函数才有否则是"" 
// 具名函数表达式的名字只能在函数内部使用
// 函数表达式时，只有(函数名)变量“被提前”了，函数体没有“被提前”
// ()可以将任何数据包括函数 转换为表达式
// 
// 读取和修改函数内部的变量（完全控制）
// throw new Error("错啦吧");主动的抛出一个错误哈哈
// 
//     闭包应用2
//     不具有私有数据
//    var fn = function(){};
//    function fn(){}

//    具有私有数据
//    var foo = (function(){
//     私有数据
//     return function(){
//         可以访问私有数据
//     }
//   })();
// function f(){
// 	var num=Math.random();
// 	return function a(va){
// 		if(va){
// 			num=va;
// 			return num;
// 		}else{
// 			return num;
// 		}
// 	}
// }
// var aa=f();
// var aaa=aa(55);
// console.log(aaa);
// //2.(保护私有变量)父亲姓张 限定儿子必须也是张咯
// function creatPerson(){
// 	var __name__="";//一般两个下划线代表内部私有的属性 
// 	return {
// 		getName:function(){
// 			return __name__;
// 		},
// 		setName:function(newname){
// 			if(newname.charAt(0)==='张'){
// 				__name__=newname;
// 				return __name__;
// 			}else{
// 				throw new Error('非亲生');
// 			}
// 		}
// 	};
// }
// var p=creatPerson();
// p.setName("张是");
// console.log(p.getName());
// p.setName("方法");
// console.log(p.getName());

// var a=0;
// var a=function(){
// 	console.log(a);
// }
// a();//a is not a function


// var a;
// a=0;
// a=function(){
// 	console.log(a);
// };//发生了覆盖

//利用标记语言调出循环
// 格式  标识符:
// var arr1=[];
// var arr=[
// [1,5,6,2],
// [2,7,8,6],
// [3,5,8,9]
// ];
//  zhangsan:for(var i=0;i<arr.length;i++){
// 	//遍历行
// 	for(var j=0;j<arr[i].length;j++){
// 		if(arr[i][j]===7){
// 			arr1.push(i+1);
// 			arr1.push(j+1);
// 			break zhangsan;//break只能跳出一个for（）循环里
// 		}
// 	}
// }
// console.log("第"+arr1[i]+"行"+"第"+arr1[j]+"列");


// var a=new Array(5);//只单独一个数字时表示a数组长度为5
// console.log(a.length);
// var b=new Array(5,2,"asd");//多个数据时则表示对数组的初始化 非长度
// console.log(b);


// for(var i=0;i<10;i++){
// 	for(var j=0;j<=i;j++){
// 		process.stdout.write("*");
// 	}
// 	console.log();
// }
// 
// 
// 1.加载文件操作模块 fs模块
// var fs=require('fs');
// //2.实现文件写入的操作
// var msg="hello world,你好，世界!";
// //调用fs.writeFile()进行文件写入
// //路径 数据 可选的参数 回调函数
// //fs.writeFile(file,data[,options],callback)
// fs.writeFile("hello.txt",msg,"utf8",function(err){
// 	//如果err===null,表示写入文件成功，没有错误！
// if(err){
// 	console.log('错误是'+err);
// }else{
// // 	console.log("ok拉");
// // }
// // });
// var fs=require("fs");
// 	fs.readFile("hello.txt","utf8",function(err,data){
// 		if(err){
// 			throw err;
// 		}
		//data参数的数据类型是一个Buffer对象，里面保存的是一个个字节（字节数组）
		//转为字符串 用toString()方法
	// 	console.log(data);
	// });
	// console.log(__dirname);//当前正在执行的js文件所在的目录
	// console.log(__filename);//当前正在执行的js文件所在的完整目
	// var path=require("path");
	// 	var d=path.join(__dirname,"7-17.js");//拼接路径 不需要考虑反斜杠的不兼容问题
	// 	console.log(d);
	// 	var fs=require('fs');
			//创建一个目录 也是根据这个js文件位置的相对路径添加的
			// fs.mkdir("./newmulu-mk",function(err){
			// 	if(err){
			// 		console.log("cuowu");
			// 	}
			// 	console.log("成功创建一个目录了");
			// });

			//删除一个目录（必须为空 和上面的对应啊 上面创建也是空）
			// 也是根据这个js文件位置的相对路径添加的
			// fs.rmdir("./newmulu-mk",function(err){
			// 	if(err){
			// 		console.log("cuowu");
			// 	}
			// 	console.log("成功删除一个目录了");
			// 			// 
//创建一个简单的http服务
//1.加载http模块
var http=require("http");
	//2.创建一个http服务对象
var server=http.createServer();
//3.监听用户的请求事件（request事件）
//request对象包含了用户的请求报文的所有内容
//所以说要通过request对象点出来想看的数据
//response对象用来向用户响应一些数据，当服务器要向客户端响应数据必须要用response对象
//有了request和response对象既可以获取用户提交的数据 也可以向用户响应数据
server.on("request",function(req,res){
	//解决乱码思路：服务器通过设置响应报文头，告诉浏览器使用相对应的编码来解析网页
	res.setHeader('content-Type','text/plain; charset=utf-8');
	res.write("hello world!! 你好啊世界");
	res.end();
});

//4.启动服务
server.listen(8080,function(){
	console.log("服务器启动啦 请访问：  http://localhost:8080");
});
//
//