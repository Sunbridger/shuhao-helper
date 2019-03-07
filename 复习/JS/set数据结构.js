let arr = ['name','age','job','where'];
let set = new Set(arr);
let newarr = [];
for(let el of set.entries()){
  newarr.push(el);
}
let map = new Map(newarr)
let newobj = {};
for(let [key,value] of map){
  newobj[key]=value
}
console.log(newobj);


let obj={}
arr.forEach(el=>{
  obj[el]=el
})
console.log(obj);


