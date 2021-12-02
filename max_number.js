var dic= { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20,'g':101,'h':99}
var lis=[]
for (i in dic){
    lis.push(dic[i])
}
console.log(lis)
var a=0
for (i in lis){
    if(lis[i]>a){
        a=lis[i]
    }
}
console.log(a)