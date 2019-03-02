// // // 当你return的是内部function时，就是一个闭包
// // // （单纯的函数嵌套函数并不是闭包（这样嵌套在里面的函数也确实可以访问到外面
// // // 父函数和全局的变量的）)既然f2可以读取f1中的局部变量，那么只要把f2作为返回值
// // // 我们不就可以在f1外部读取它的内部变量了吗！
// // // 闭包的概念：闭包就是能够读取其他函数内部变量的函数
// // // 由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，
// // // 因此可以把闭包简单理解成"定义在一个函数内部的函数"。
// // // 所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// // // 闭包最大用处有两个:
// // // 一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。
// // // ；
// // // 闭包不仅能访问外部函数的变量，也能访问外部函数的参数。
// // // 闭包就是外部函数持有内部函数的一个嵌套函数的 引用
// // // 即使函数已经return，闭包仍然能访问外部函数的变量(参数)
// // // 这意味着return的函数允许持续访问外部函数的所有资源。
// // // 当你的外部函数return一个内部函数，调用外部函数时return的函数并不会被调用。
// // // 你必须先用一个单独的变量保存外部函数的调用，然后将这个变量当做函数来调用。
// // // 如果不使用变量赋值来调用greet函数return的函数，一种方法是使用()两次()()
// //  // 1. 访问 函数内部的变量不需要return:
//  // // var bar;
//  // function foo(){
//  // 	bar = function(){ console.log("s"); } ;
//  // }
//  // console.log(bar);
// // // 返回（获取）函数内部的变量需要return:
//
// // function f(x){
// // 	return function(){ console.log(++x); } ;
// // }
// // var bars=f(5);//bars现在是一个闭包(闭包函数)
// // bars();
// // // 原因就在于f是bars的父函数，而bars被赋（推入到）给了一个全局变量，
// // // 这导致bars始终在内存中，而bars的存在依赖于f，因此f也始终在内存中，
// // // 不会在调用结束后，被垃圾回收机制（garbage collection）回收。
//
//
//
// // function f1(){
//
// // 	　　　　var n=999;
//
// // 	　　　　function f2(){
// // 		　　　　　　alert(n);
// // 	　　　　}
//
// // 	　　　　return f2;
//
// // 　　}
// // var ss=f1();//ss保存的是f2这个函数
// // console.log(ss);
// // // 上面代码中的f2函数，就是闭包。
// // //
// // //
// // function f1(){
// // 	　　　　var n=999;
// // 	　　　　nAdd=function(){n+=1};
// // 	//nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。
// // 	//其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，
// // 	//所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。
// // 	　　　　function f2(){
// // 		console.log(n);
// // 	　　　　}
// // 	　　　　return f2;
// // 　　}
// // 　　var result=f1();
// // 　　result(); // 999
// // // 　　console.log(nAdd);
// // 　　result(); // 1000
//
//
//
// // var name = "The Window";
// // 　var object = {
// // 	　name : "My Object",
// // 	　　getNameFunc: function(){
// // 		　　　return function e(){
// // 			console.log(this);
// // 			　return this.name;
// // 		　};
// // 	　　　　}
//
// // 　　};
// // console.log(object.getNameFunc());
// // console.log(object.getNameFunc()());
// // // javascript使用的是词法作用域，它最重要的特征是它的定义过程发生在代码的书写阶段
// // // 无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定
// // // 当定义了一个函数后，当前的作用域就会被保存下来
// // // 并且成为函数内部状态的一部分，这个是很重要的一个概念。
// // (function foo(){
// //     var a = 3;
// //     console.log( a ); // 3
// // })();//函数包装 其的本质是 把函数声明转化为了一个函数表达式
// // // 区分函数声明和表达式最简单的方法是看 是否是以function 关键字开头
// // // (不仅仅是一行代码，而是整个声明中的位置)。
// // // 如果 function 是声明中 的第一个词，那么就是一个函数声明，否则 就是一个函数表达式
// // // 由于函数被包含在一对 ( ) 括号内部，因此成为了一个表达式，
// // // ，比如 (function foo(){ .. })() 或者是相较于传统的 IIFE 形式
// // // 很多人都更喜欢另一个改进的形式：(function(){ .. }())
// // // 这两种形式在功能上是一致的。选择哪个全凭个人喜好。
// // var oo=function (){
//
// // }();
// // (function(){
// // 	console.log("ha");
// // })();
//
// // ;(function(){
// // 	console.log("ha");
// // })();
//
// // !(function(){
// // 	console.log("ha");
// // })();
//
// // +(function(){
// // 	console.log("ha");
// // })();// 来保证匿名函数立即执行 因为一元操作符都能立即返回后面表达式的值 都放在最最前面的
//
// // !function(){//由于js将function当关键字 所以函数声明后面不可以直接接圆括号
// // 	var a = 0;
// // 	function add(){
// // 		return ++a;
// // 	}
// // console.log(add());//1
// // console.log(add());//2
//
// // }();
//
// // +function(){
// // 	function add(){
// // 	var a = 0;//闭包让局部变量始终保存在内存中。也就是说，闭包可以使得它 诞生环境 一直存在
// // 	return ++a;
// // }
// // console.log(add());//1
// // console.log(add());//1
// // }();
//
// // for(var i=0;i<10;i++){
// // 	setTimeout(function(){
// // console.log(i); //10
// // }, 1000);
// // }
//
// // for(var i=0;i<10;i++){
// // 	(function(){
// // console.log(i); //10
// // })();//使用IIFE来使每次循环中创建全局变量 i 的拷贝
// // }
// //
// //
// // 我们先看一个正常的for循环，普通函数里面有一个for循环，for循环结束后最终返回结果数组
// // function box(){
// //     var arr = [];
// //     for(var i=0;i<5;i++){
// //         arr[i] = i;
// //     }
// //     return arr;
// // }
// // console.log(box());
// // //经典for循环闭包问题
// // !function(){
// // function a(){
// // 	var arr=[];
// // 	for(var i=0;i<5;i++){
// // 		arr[i]=function(){
// // 			return i;//查找i i是最后结果
// // 		};
// // 	}
// // 	return arr;
// // }
// // console.log(a());
// // }();
// // +function(){
//
// function a(){
// 	var arr=[];
// 	for(var i=0;i<5;i++){
// 		arr[i]=function(num){
// 			return num;
// 			}(i);//i当参数传进iife函数内 num复制了一份i
// 		};
// 		return arr;
// 	}
// 	console.log(a());
//
// // }();
// // function test(fn){
// // 	var bar = 1;
// // 	fn();
// // }
// // var bar = 99;
// // test(function foo(){
// //     console.log(bar);
// // });
// // console.log(foo);
// // /*上面相当于
// // var fn = function foo(){
// // 	console.log(bar);//在定义时出词法作用域
// // };
// // test(fn);
// // */
var arr = [1, 2, 5];
console.log(1);
