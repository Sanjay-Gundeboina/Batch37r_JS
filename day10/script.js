const handleLoad=()=>{
    location.assign("http://127.0.0.1:5501/signup.html")
}

function handleregister(){
let username=document.getElementById("username").value 
let mob=document.getElementById("mob").value
let password=document.getElementById("password").value
let con_pass=document.getElementById("con_pass").value
// console.log(username,mob,password,confirm_password)
let user_details={
    name:username,
    mobile:mob,
    password:password
}
let users=window.localStorage.getItem("users")

users = JSON.parse(users)||[ ]

users.push(user_details)
//JSON
user_details=JSON.stringify(users)
// console.log(typeof(user_details))

//setting data in local storage
if( password == con_pass)
{                            
window.localStorage.setItem("users",user_details)
alert("user register successfully")
location.assign("http://127.0.0.1:5501/login.html")
}
else{
console.log("passsword mismatched")
}
}
// window.localStorage.setItem("name","sanjay")
function handleLogin(){
    let user_name=document.getElementById("user_name").value
    let user_password=document.getElementById("user_password").value

    let reg_user_list=window.localStorage.getItem("users")
    reg_user_list=JSON.parse(reg_user_list)
    
    let user_found=false
    reg_user_list.forEach((v,i,a)=>{
        if(user_name==v.name && user_password== v.password){
        alert("Login successfull")
        user_found=true
    }})
//   location.assign("http://127.0.0.1:5501/login.html")
  if(user_found===true){
    location.assign("http://127.0.0.1:5501/prd_index.html")
  }
  else{
        alert("login failed")
        location.assign("http://127.0.0.1:5501/signup.html")
    }
    }