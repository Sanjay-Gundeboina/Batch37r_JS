//DOM
// base_url="http://localhost:3000/users"
// function handlesubmit(){
//     let username=document.getElementById("username").value
//     let password=document.getElementById("password").value
//     let mbno=document.getElementById("mbno").value
//     let email=document.getElementById("email").value

//     let details={
//      username:username,
//      password:password,
//      mbno:mbno,
//      email:email
//     };

// fetch(`${base_url}`,
//     {
//     method:"POST",
//     headers:{"content-Type":"Application/json"},
//     body:JSON.stringify(details)
// }).then(d=>d.json()).then(d=>console.log(d))


// }


//PUTTT 

// fetch("http://localhost:3000/users/6157",{
//     method:"PUT",
//     headers:{"content-Type":"Application/json"},
//     body:JSON.stringify({
//         id:"",
//         name:"madhu",
//         passwoed:"madhu@1",
//         email:"madhu@gmail.com",
//         mbno:"9635253525"
//     })
// })

//PATCHHHHH

// fetch("http://localhost:3000/users/7952",{
//     method:"PATCH",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({
//         mbno: "7993601902",

//     })
// }).then(d=>d.json()).then(d=>console.log(d))


//DELETE 

// fetch("http://localhost:3000/users/6157",{
//     method:"DELETE",
//     headers:{"Content-Type":"application/json"},

// }).then(d=>d.json()).then(d=>console.log(d))