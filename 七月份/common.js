/*
 *这是我的时代 乔乔乔加油吧
 *	
 *2018 6月开始
 *
 */



// 功能：插入到一个节点之后
function myInsertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		targetElement.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//功能：追加的类名不发生覆盖
//其实这个功能可不封装啊 \(^o^)h5下用classList.add()或remove()

function myAddClass(ele,value){
	//ele表示对那个元素操作
	//value代表要加的类名
	if(!ele.className){//若元素压根就没有类名哈哈
		ele.className=value;//直接传统方法添加既可！
	}else{
		ele.className=ele.className+""+value;//注意这里的空格符！！
	}
}


//功能：欲表先清 实现无累计的乱跳动画哈哈哈哈
function mySetInterval(ele,move,time){
	if(ele.movement){
		clearInterval(ele.movement);
	}else{
		ele.movement=setInterval(move,time);	
	}
}

// 封装匀速动画函数 ps 只针对有left的 所以必须是绝对或其他非static定位的
function myAnimate(element,target){
	clearInterval(element.timer);//老规矩 欲表先清 
	element.timer=setInterval(function(){//节省变量名 所以定时器以对象属性方式来存着
		var current=element.offsetLeft;//要移动的元素距离最近定位祖宗元素的Left距离
		var step=10;//每次走的步数(长度px)
		step= target>current?step:-step;//判断是否是往前走还是往后走啊
		current += 	step;
		if(Math.abs(current-target)>Math.abs(step)){
			element.style.left=current+"px";
    		//判断是否够一步 如果不够一步就按程序一步步来	
    	} else{
    			clearInterval(element.timer);//否则小于一步10px的话就直接到达目的地
    			element.style.left=target+"px";
    		}
    	},20);//每20ms执行一次
}



//可更改的表单验证模板吧 要用就该嘻嘻
function myCheck(){
  flag=0;
}
myCheck.prototype={
  constructor:Check,
  checkName:function(name){
    if(name.length==0){
      console.log("erroe");
      flag+=0;
      return this;
    }else{
      // console.log(this==check);//true;
      flag+=1;
      return this;//返回的是check{}实力对象
    }
  },
  checkAge:function(age){
    if(age<18){
      console.log("你还太小了");
      flag+=0;
      return this;
    }else{
      flag+=1;
      return this;
    }
  },
  checkPassword:function(password){
    if(password.length<=6){
      console.log("密码太短了");
      flag+=0;
      return this;
    }else{
      flag+=1;
    }
    if(flag==3){
      console.log("注册成功");
      return this;
    } 
  },
};
// var check=new Check();
// check.checkName("sa").checkAge(112).checkPassword("232");
// 有个问题就是 checkPassword一定要是放在最后的！！！如何解决呢？？？
//解决方法是 通过每次都返回 this(也就是实例对象) 来实现”链式法“
//再通过flag来判断是否全部验证成功！




//功能：获取一个想要的块级盒子
function myGetDiv(a,b,c,d){
	var a=document.createElement(a);
	a.style.backgroundColor=d||"pink";
	a.style.width=b+"px";
	a.style.height=c+"px";
	document.body.appendChild(a);						
}


//功能：遍历(伪)数组每一项 并且this指向当前哪项
//和jquery的each方法大同小异
function myEach(arr,fn){
	for(var i=0;i<arr.length;i++){ 
		if(fn.apply(arr[i],[i,arr[i]])===false){
      break;//通过这个外部函数return的结果来控制是否跳出循环！
  }
}
}

//功能:获取所有兄弟元素 可s也可ss
function myGetsiblings(ele,a) {
    if(!ele)return;//判断当前的ele这个元素是否存在
    var elements=[];//定义数组的目的就是存储当前这个元素的所有的指定的兄弟元素
     var elementss=[];//定义数组的目的就是存储当前这个元素的所有的兄弟元素
    var el=ele.previousSibling;//当前元素的前一个节点
    while (el){
    	if(el.nodeType===1){
    		elementss.push(el);
    	if (el.nodeName.toLowerCase()===a){//元素
            elements.push(el);//加到数组中
        }	
    }  
    el=el.previousSibling;//如果还有的话就一直在while里操作 直到el为false才跳出走下步
}
    el=ele.nextSibling;//全局变量的立马重新赋值
    while(el){
    	if(el.nodeType===1){
    		elementss.push(el);
    	if (el.nodeName.toLowerCase()===a){//元素
            elements.push(el);//加到数组中
        }	
    }
    el=el.nextSibling;
}
return a?elements:elementss;
}