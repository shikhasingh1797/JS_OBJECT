var dic=[{'item': 'item1', 'amount': 400}, 
{'item': 'item2', 'amount': 300}, 
{'item': 'item1', 'amount': 750},
{'item':'item2','amount':200},
{'item': 'item1', 'amount': 999}
]
var i=0
var d={}
while(i<dic.length){
  if (i>1){
    if(dic[i]["item"]=="item2"){
      d["item2"]=d["item2"]+dic[i]["amount"]
    }
    if(dic[i]["item"]=="item1"){
      d["item1"]=d["item1"]+dic[i]["amount"]
    }
  }
  else{
    d[dic[i]["item"]]=dic[i]["amount"]
  }
  i=i+1
}
console.log(d)