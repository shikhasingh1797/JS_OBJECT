var mainStr="My name is kumar, and my friend’s name is Dhamu is shikhu is" 
var sub="is"
var c=0
var s=mainStr.split(" ")
var str1=""
for(var i of s){
    if(i==sub){
        c=c+1
    }
}
console.log(c)