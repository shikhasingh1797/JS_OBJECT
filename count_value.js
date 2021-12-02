var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],    
    'David': ['subj1', 'subj2']    
    }
var c=0
for (i in dict){
    for (j in dict[i]){
        console.log(dict[i][j])
        c=c+1
    }
}
console.log(c)