//local scope
//function scope

// function outer(){
//    let a=10
//    console.log(a)
// }
// outer()
// console.log(a)

//block scope

// if(true){
//     let f_name="sanjay"
//     const rool="D9"
//     console.log(f_name,rool)
// }
// console.log(f_name,rool)

//Lexical scope

// debugger
// let f_name="sanjay"
// function outer(){
//     let f_name="vikas"
//     // console.log(f_name)
//     function inner(){
        
//         console.log(f_name)
//     }
//     inner()
// }
// outer()


//closure scope

// function outer(){
//     let lang="javascript"
//     function inner(){
//         console.log(lang)
//     }
//     return inner
// }
// let fun = outer()
// fun()

