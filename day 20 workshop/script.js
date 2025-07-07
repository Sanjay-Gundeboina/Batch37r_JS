function handleregister(){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let mbno=document.getElementsByClassName("mbno")[0].value
    let email=document.getElementById("email").value

    console.log(username,password,mbno,email)
    let mbl_exists=window.localStorage.getItem("reg_mobiles")
    mbl_exists=JSON.parse(mbl_exists)
    if(mbl_exists && mbl_exists.includes(mbno)){
        alert("user already exists with same mobile number")
    }
    else{
    console.log("user not found")
    
    let user_details={
          username:username,
          password:password,
          mbno:mbno,
          email:email    

    }
    // let reg_mbl=[]

    fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user_details)

    }).then(res=>res.json()).then(()=>{
        // reg_mbl.push(mbno)
        let reg_mbl=window.localStorage.getItem("reg_mobiles")
        if(!reg_mbl){
            reg_mbl=[]
            reg_mbl.push(mbno)
            window.localStorage.setItem("reg_mobiles",JSON.stringify(reg_mbl))
        }
        else{
            reg_mbl=JSON.parse(reg_mbl)
            reg_mbl.push(mbno)
            window.localStorage.setItem("reg_mobiles",JSON.stringify(reg_mbl))
        }
        location.assign("./sucess.html")
    }).catch((err) => {
        // document.getElementById("err").innerText = "Failed to register";
        console.error("Fetch Error:", err); 
        location.assign("./err.html");
    });

}
}
function getusers(){
  let userslist = [];
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => (userslist = data))
    .catch((err) => console.log(err));
  console.log("fetch called");

  setTimeout(() => {
    userslist.forEach((val) => {
      const container=document.getElementById("user-container")
      let username = document.createElement("h3");
      username.innerText = "Username: " +val.username;
      let mbno = document.createElement("h5");
      mbno.innerText = "Mobile: "+val.mbno;
      let email = document.createElement("h5");
      email.innerText = "Email: "+val.email;
      let line = document.createElement("hr");
      container.append(username,mbno, email, line);
    });
  }, 1000);

}
