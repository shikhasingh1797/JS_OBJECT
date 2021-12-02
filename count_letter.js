var word="MISSISSIPPI" 
const l=[]
let dic={}
for (i of word) {  
if(l.includes(i)){
dic[i]=dic[i]+1
}else{
l.push(i);
dic[i]=1;
}
}
console.log(dic);