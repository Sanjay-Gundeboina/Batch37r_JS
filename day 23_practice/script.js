// let fetchdata=fetch("https://dummyjson.com/carts");
// fetchdata.then((data) => {
//     return data.json();
// }).then((data)=>{
//     console.log(data.carts)
// }).catch((err)=>{
//     console.log(err)
// })

// async function fetchdata(){
//     try{

//         let data=await fetch("https://dummyjson.com/carts");
//         let jsondata=await data.json();
//         console.log(jsondata.carts);

//     }
//     catch{
//         console.log(err)
//     }
// }
// fetchdata()


// let mypromise=async()=>{
//     return new Promise((res,rej)=>{
//     let num=101;
//     if(num%2==0){
//         console.log("hi")
//         setTimeout(()=>{       
//         res("even") 
//        },2000);
    
//     }
//     else{
//         setTimeout(()=>{
//            rej("odd")
//         },2000);
//     }
// })
// } 
// // mypromise.then(msg=>console.log(msg)).catch(err=>console.log(err))
// let fetchdata= async()=>{
//     try{
//         let msg= await mypromise()
//         console.log(msg)
//         console.log("hello")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// fetchdata()