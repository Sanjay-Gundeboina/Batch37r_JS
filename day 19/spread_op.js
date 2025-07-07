let obj={
    user:"sanjay",
    age:"21",
    city:"hyd"
}

// let obj2=obj  //copy(shallow copy) obj to obj2
// let obj2={...obj} // copy(deep copy) to obj2 with spread operator
// obj.city="kmm"
// console.log(obj2)
// console.log(obj)


console.log("without using spread operator")

let obj2=obj //copy(shallow copy) obj to obj2
obj.city="kmm"
console.log(obj2)
console.log(obj)