var d1 = {'a': 100, 'b': 200, 'c':300}
var d2 = {'a': 300, 'b': 200, 'd':400}
var d3={}
for (key in d2){
    if (key in d1){
        d2[key]=d2[key]+d1[key]
    }
}
var t=Object.assign({},d1,d2)
console.log(t)