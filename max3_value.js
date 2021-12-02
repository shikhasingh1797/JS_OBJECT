var dic= { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20,'g':101,'h':99,'i':109}
var lis=[]
for (i in dic){
    lis.push(dic[i])
}
// console.log(lis)
var first=lis[0]
var second=lis[1]
var third=lis[2]

for(var i=0;i<lis.length;i++){
    if (lis[i] > first) 
        { 
            third = second; 
            second = first; 
            first = lis[i]; 
        } 
        else if (lis[i] > second) 
        { 
            third = second; 
            second = lis[i]; 
        } 
   
        else if (lis[i] > third) 
            third = lis[i]; 

}
console.log("Max1=",first)
console.log("Max2=",second)
console.log("Max3=",third)
