// call by value
let str1="javascript"
let str2=str1         //make a copy of str1 into str2
str1 = "JAVASCRIPT"
console.log(str2);
console.log(str1);


// call by reference
console.log("Call By Reference")

let arr1=[1,5,8,4,6,9]
let arr2=arr1       //make a copy of arr1 into arr2
arr1[1]=7
console.log(arr2);
console.log(arr1);
