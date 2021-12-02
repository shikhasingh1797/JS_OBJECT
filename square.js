let n=require("readline-sync")
var num=n.question("Enter a num:")
// console.log(num)
var dic={}
for(var i=1;i<num;i++){
    dic[i]=i*i

}
console.log(dic)