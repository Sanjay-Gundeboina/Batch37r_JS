function add(a ,b, ...c){
    
    // console.log(a,b,c)
    sum=a+b
    if (c.length>0){
        for(let i=0;i<c.length;i++){
            sum+=c[i]
        }
    }
    return sum       
}
console.log(add(5,2,4,3,8))