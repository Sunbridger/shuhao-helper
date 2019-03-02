// // // var a=true;
// // // // console.log(a.toString());
// // // console.log(+a);
// // // console.log(Number(a));
// // // console.log(!!a);
// // // console.log(Boolean(a));
// // // var b={
// // // 	age:18
// // // };
// // // //任何类型+其他类型 都是字符串类型
// // // var c=9+"as";
// // // console.log(typeof(c));//返回string
// // // var num=b;
// // // // 这两个只能 字符串转数字
// // // // parseInt(s: string, radix: int)
// // // // parseFloat(s: string)
// // // var str="4554asd";
// // // console.log(Number(b));
// // // console.log(parseInt(str,10));
// // // console.log(isNaN("a10"));
// // // console.log(Boolean(""));

// // // var nu=null;
// // // var obj={
// // // 	aa:10
// // // };


// // // var num = 222;
// // // var str = String(num);
// // // console.dir(str); //"123"
// // // console.log(typeof(str));

// // // function f(){

// // // }
// // // console.log(f.toString());
// // // var b1=new Boolean(false);
// // // console.log(b1.valueOf());
// // // console.dir(b.valueOf());

// // // // new一个Boolean对象
// // // var newBool = new Boolean(1);
// // // // valueOf()返回的是true，两者的值相等
// // // console.dir(newBool.valueOf());
// // // console.log( newBool.valueOf() == newBool ); // true
// // // // 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
// // // console.log( newBool.valueOf() === newBool ); // false
// // //   // var f=function(a){
// // //   //    if(a%3==0){
// // //   //   console.log("能整除");
// // //   //    }
// // //   //    else {
// // //   //    	console.log("不能整除");
// // //   //    }
// // //   // };
// // //   // f(9);
// // // // 000000000000000000000

// // //   var f=function(a){   
// // //      // console.log(product.length);//product.length这是 形参 集合
// // //   	// console.log(arguments);//这是列出所有的 实参 集合！
// // //   	var sum=0;
// // //   	for(var i=0;i<=a;i++){
// // //   		if(i%3==0){
// // //   			sum+=i;
// // //   			console.log(i);
// // //   		}
// // //   	}
// // //   	console.log(sum);
// // //   }; 
// // //   f(6);


// // //   var getSum=function(){
// // //   	var sum=0;
// // //     for(var i=0;i<arguments.length;i++){
// // //      		sum+=arguments[i];
// // //     }
// // //      console.log(sum);
// // //   };

// // // getSum(20,5);


// // // var ff=function(e){
// // // 	if(e%2===0){
// // // 		return (e+":不是奇数");
// // // 	}
// // // 	else{
// // // 		return (e+":是奇数");
// // // 	}
// // // };
// // // var hh=ff(1);
// // // console.log(hh);

// // // var max=function(){
// // // 	var big=0;
// // // 	for(var i=0;i<arguments.length;i++){
// // // 		if(arguments[i]>big){
// // // 			big=arguments[i];
// // // 		}
// // // 	}
// // // 	return big;
// // // };

// // // var ss=max(200,40,5,8000);
// // // console.log(ss);


// // // var s=function(){
// // // 	var ip=3.14;
// // // 	return function(r){
// // // 		console.log("面积："+ ip*r*r);
// // // 		console.log("周长:"+2*ip*r);
// // // 	};
// // // };
// // // var ss=s();
// // // ss(5);

// // // // console.log(Math.PI);

// // // var date=new Date();
// // // var day=date.getDay();	
// // // console.log("今天是星期"+day);


// // // // var a=10;
// // // // console.log(String(a));

// // // var change=function(){
// // // 	for(var i=arguments.length;i>=0;i--){
// // // 		console.log(arguments[i]);
// // // 	}
// // // };
// // // var sss=change(1,2,5,8,3);



// // // function af(n){
// // // 	var result = 1;
// // // 	while(n){
// // // 		result *= n;
// // // 		n--;
// // // 	}
// // // 	return result;
// // // }

// // // var aaf=af(10);
// // // console.log("此阶乘是："+aaf);

// // // 现在已经不推荐用这个方法function factorial(num){
// // //     if (num <=1) {
// // //         return 1;
// // //     } else {
// // //         return num * arguments.callee(num-1);//arguments.callee代表aaf
// // //     } 
// // // }
// // var f=function(n){
	
// // 		return n>1?n*f(n-1):1;
// // };
// // var s=f(5);
// // console.log(s);

// // // //1 1 2 3 5 8 13

// // // var arr=[1,5,5,8,6];
// // // console.dir(arr);
// // // console.log(arr.length);
// // // //类数组？1. 什么是类数组ArrayLike
// // // // 拥有length属性，其它属性（索引）为非负整数(对象中的索引会被当做字符串来处理，这里你可以当做是个非负整数串来理解)
// // // // 不具有数组所具有的方法
// // // var arr=[1,5,6,100,8,10,0,5];
// // // var f=function(e){
// // // 	var max=0;
// // // 	var index=0;
// // // 	for(var i=0;i<e.length;i++){
// // // 		if(e[i]>max){
// // // 			max=e[i];
// // // 			index=i;
// // // 		}
// // // 	}
// // // 	return (max+"===="+index);
// // // };
// // // var ff=f(arr);
// // // console.log(ff);


// // var arr=[1,5,0,5,8,0,6,0];
// // var arr1=[];
// // var isZero=function(e){
// // 	// console.log(isZero.length);
// // 	for(var key in e){
// // 		if(e[key]!==0){
// // 			arr1.push(e[key]);
// // 		}
// // 	}
// // 	 return arr1;
// // };

// // var sss=isZero(arr);
// // console.log(sss);

// // // var aa=null;
// // // console.log(typeof String(aa));

// // // var b={
// // // 	as:10,
// // // 	fs:4
// // // };
// // // console.log(Number(b));

// // var arr1=[1,5,6,100,8,10,0,5];
// // function forEach(arr,fn){
// //   for(var i=0;i<arr.length;i++){
// //   	fn.call(arr[i],i);
// //   }
// // }

// // forEach(arr1,function(){
// //     console.log(this);
// // });

// // var big=function(e){
// //  	console.log(Math.max.apply(Math,e));
// // };
// // big(arr1);
// // 对象转换为任意数据类型
// var a={};
// var f=function(){
// };
// console.log(Number(f)+"===a:"+Number(a));
// console.log(Boolean(f)+"===a:"+Boolean(a));
// console.log(String(f)+"===a:"+String(a));
// //数字转化为任意数据类型
// var c=10;
// console.log(String(c));
// console.log(Boolean(c));
// console.log(Object(c));
// //字符串转化为任意数据类型
// var str="看哈傻傻的好几款";
// console.log(Number(str));
// console.log(Boolean(str));
// console.log(Object(str));
// //数组转化为object
// var arr=[10,20,5,4];
// console.dir(Object(arr));


var xmr=new XMLHttpRequest();
console.log(xmr);