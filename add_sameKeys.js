var dic1={1:10, 2:20}
var dic2={3:30,2:40}
var dic3={5:50,6:60}
var t=Object.assign({},dic2,dic3)
for(key in t){
    if (key in dic1){
        t[key]=t[key]+dic1[key]

    }
}
var t1=Object.assign({},dic1,t)
console.log(t1)