console.log(Boolean("a"));
console.log(!("a"));//现默认的把“a”装成它对应的布尔值（其实就是用到了
// boolean（）法 再通过！来替换为相反的布尔值了 其实！ 就是取反布尔的意思）
console.log(!!("a"));//两个逻辑非会将数字转换为布尔值
// console.log(Boolean("a"));和这个效果一样
//
//求数组中的最大数的函数
;(function(){
	var arr=[1,5,2,0,9];
	function h(a){
		var s=Math.max.apply(null,a);
		console.log(s);
	}
	h(arr);
})();

(function(){
//javascript对象
var book={
	title:"书名一",
	authors:["乔","王","哈哈"],
	year:1870
};
//转换为json对象
var json=JSON.stringify(book);
console.log(json);
//{"title":"书名一","authors":["乔","王","哈哈"],"year":1870}
}());
(function(){
var arr=[];
console.log(arr instanceof Array);
console.log(Array.isArray(arr));
})();

// (function(){
// 		(function bang(){
// 		console.log(this);//gloable
// 		})();
// 	})();


var sunbridger={
	car:"保时捷",
	play:function(){
		console.log(this.car);
	}
};
var zhangsan={
//张三是个残疾人 没有开车的能力 但是他有车哦 自行车哈哈
car:"自行车"
};

var come=sunbridger.play.bind(zhangsan);//不会自动就调用的 只是个复制的过程哈哈哈
come();
//理解这个原生的bind()的方法是 
//zhangsan趁乔不注意哈哈哈把乔的能力偷过来了,偷完之后不敢立马施展这个能力
//而是躲到下一行才调用了(都是把能力放在自己身体里)
//所以this就是zhangsan



//sunbridger.play();//只能是sunbridger来开他的车
// zhangsan.play();// zhangsan.play is not a function表明张三开不了乔的车哈哈
//sunbridger.play.call(zhangsan);//放在zhangsan身体里去哈哈
//zhangsan借用了乔的能力(play)来开车
//也就是把play()这个方法完全的放到了zhangsan自己的身体里
//如下
//var zhangsan={
//张三是个残疾人 没有开车的能力 但是他有车哦 自行车哈哈
// car:"自行车"
// 借来的放这里咯
// play:function(){
// console.log(this.car);//this就变成了zhangsan了也就是call(借给谁)
// 借给谁 这个this就指向谁了 也就放在谁的身体里了
// }
// };
//总结：call()和apply()方法基本是一样的 只不过传的参数不一样
//	前者为一个个的 后者为数组  
//	开发中多用apply()!!!!!
//
//