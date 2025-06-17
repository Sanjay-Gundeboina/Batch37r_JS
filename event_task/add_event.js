let n1=document.getElementById("num1")
let n2=document.getElementById("num2")
let butn=document.getElementById("btn")
let result=document.getElementById("res")
butn.addEventListener("click",()=>{
    console.log(Number(n1.value)+ Number(n2.value))
    let x1= Number(n1.value) 
    let x2= Number(n2.value)
    let sum= x1+x2;
    result.innerText=sum
    console.log(result)
})