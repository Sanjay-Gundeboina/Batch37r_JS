

let gp=document.getElementById("grand_parent")
let pp=document.getElementById("parent")
let cc=document.getElementById("child")

gp.style.height="400px"
gp.style.width= "400px"
pp.style.height="300px"
pp.style.width= "300px"
cc.style.height="200px"
cc.style.width= "200px"
gp.style.border="2px solid red"
pp.style.border="2px solid yellow"
cc.style.border="2px solid green"

gp.addEventListener("click",()=>{
    console.log("this is a grand parent")
})

pp.addEventListener("click",(e)=>{
    console.log("this is parent")
    e.stopPropagation()
   
})

cc.addEventListener("click",(e)=>{
    console.log("this is child")
    e.stopPropagation()

})