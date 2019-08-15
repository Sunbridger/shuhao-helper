

function f(){
	var arr=[];
	for(var i=0;i<10;i++){
		arr[i]=(function(num){
			return num;
		})(i);//对i有所操作才能让其不直接显示最后结果
		
	}
	console.log(arr);
}
f();

function f(){
	var arr=[];
	for(var i=0;i<10;i++){
		 arr[i]=function(){
			var p=i;
			return p;
		};//对i有所操作才能让其不直接显示最后结果
		
	}
	console.log(arr);
}
f();