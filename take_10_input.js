let n=require("readline-sync")
var user=n.question("Enter num: ")
var dic={}
for (var i=0;i<user;i++){
    var name1=n.question("Enter name : ")
    var marks=n.question("Enter marks : ")
    dic[name1]=marks
}
console.log(dic)