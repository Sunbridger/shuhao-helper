// // var p1={};//或 new Object()
// // Object.defineProperty(p1,"name",{
// // 	writable:true,//通过设置这个true和false来设置是否只读和可改
// // 	value:"乔"
// // });
// // console.log(p1.name);
// // p1.name="世纪";
// // console.log(p1.name);


// // function Person(age,name) {
// // 	this.age=age;
// // 	this.name=name;
// // 	this.eat=eat1;
// // }

// // function eat1(){
// // 		console.log("外部的");
// // }
// // var p1=new Person(15,"乔");
// // p1.eat();


// // function Stu(){

// // }
// // Stu.prototype.age=12;
// // Stu.prototype.eat=function(){
// // 	console.log("chi");
// // };
// // var stu=new Stu();
// // delete(stu.age);//原型里的是删除不了
// // stu.eat();
// // console.log(stu.age);
// // stu.age=11;
// // console.log(stu.age);//11
// // delete(stu.age);
// // console.log(stu.age);//12同名屏蔽被取消(删除了)了
// // var stu1=new Stu();
// // console.log(stu1.age);


// // function P(){}
// // P.prototype.age=10;
// // P.prototype.eat=function(){
// // 	console.log("ss");
// // };
// // var p=new P();
// // p.eat();
// // var p2=new P();
// // p2.eat=function(){
// // 	console.log("改啦？");
// // };
// // p2.eat();
// // //有construct的原型对象 器里面的东西都改不了 
// // // var keys=Object.keys(P.prototype);//Object.keys()只返回传入进去的自身属性
// // // console.log(keys);//P.prototype下所有的属性
// // // var p=new P();
// // // p.age=2;
// // // console.log(p.age);//通过在实例上添加一个同名属性 可以隐藏原型中不管哪的对应属性 
// // // //然而 对于引用类型来说 就会发生修改啦
// // // console.log(Object.keys(p));
// // // p1.eat=function(){
// // // 	console.log("改啦");
// // // };
// // // var p1=new P();
// // // p1.eat();
// // function S(){}
// // S.prototype={
// // 	age:28,
// // 	eat:["s","a"],
// // 	say:function(){
// // 		console.log("s");
// // 	}
// // };//直接把原型对象给修改替换了 那么其里面的东西就是会发生改变
// // var s=new S();
// // var ss=new S();
// // // console.log(typeof S.constructor);// function
// // s.eat.push("ss");
// // console.log(s.eat);
// // console.log(ss.eat);
// // s.say=function(){
// // 	console.log("sss");
// // };
// // s.say();
// // ss.say();

// // //只修改值是可以看出来的 否则都会发生覆盖问题 
// function Peson(){
// 	this.name="ss";
// }
// var p=new Peson();
// Peson.prototype={
// 	age:12,
// 	eat:function(){
// 		console.log("eattt");
// 	}
// };
// var p2=new Peson();
// // p.eat();//p.eat is not a function
// console.log(p.constructor);//及时被修改了 其原来的prototype对象里还是有constructor 
// // 并且还是指向Person的
// console.log(p.name);
// p2.eat();
// console.log(p.constructor===p2.constructor);
var arr=[1,2,1,0,5,6,1];
function sr(a,b){
	return b-a;//大于0就换
}
console.log(arr.sort(sr));