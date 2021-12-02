var data=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
var lis=[]
for (var i of data){
for(var j in i ){
    if(!(lis.includes(i[j]))){
        lis.push(i[j])
    }
    }
}
console.log(lis)