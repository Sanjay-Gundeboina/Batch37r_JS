
function handleRegister(){

let stu_name=document.getElementById("stu_name").value
let stu_age=document.getElementById("stu_age").value
let stu_grade=document.getElementById("stu_grade").value
let stu_mob_no=document.getElementById("stu_mblno").value
let stu_address=document.getElementById("stu_address").value

// console.log(stu_name,stu_mob_no,stu_grade,stu_age,stu_address)

let user_details={
    name:stu_name,
    Age:stu_age,
    mbl_no:stu_mob_no,
    Grade:stu_grade,
    Address:stu_address
}
let users=window.localStorage.getItem("users")
users=JSON.parse(users)||[ ]
users.push(user_details)
users_str=JSON.stringify(users)

window.localStorage.setItem("users",users_str)
alert("user register successfully")


let displayDiv = document.getElementById("userDisplay");
    displayDiv.innerHTML = "";


users.forEach((v)=>{
    const div=document.createElement("div")
    div.className="user_details"
    div.innerHTML = `
            <br>
              <strong>Name:</strong> ${v.name}<br>
              <strong>Age:</strong> ${v.Age}<br>
              <strong>Grade:</strong> ${v.Grade}<br>
              <strong>Mobile number:</strong> ${v.mbl_no}<br>
              <strong>Address:</strong> ${v.Address}<br>
            `;
displayDiv.appendChild(div)

})


// document.body.append(user_details)
}