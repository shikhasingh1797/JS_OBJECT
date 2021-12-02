let n=require("readline-sync")
var user=n.question("Enter key name: ")
var dic={name:"Raju", marks:56}
if(dic.hasOwnProperty(user)){
    console.log("Exist")
}
else{
    console.log("Not Exist")
}