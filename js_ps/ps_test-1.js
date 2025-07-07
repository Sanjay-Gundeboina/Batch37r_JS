// 1. Find the Second Largest Number
//    Write a program to find the second largest number in an array using a single loop. Do not use built-in sort.

// arr1=[5,3,565,22,58,66,4,8]
// max=arr1[0]
// max2=arr1[0]
// for(let i=0;i<arr1.length;i++){
//     if (arr1[i]>max){
//         max2=max
//         max=arr1[i]
//     }
//     else if((arr1[i] > max2) && ( arr1[i]< max)){
//         max2=arr1[i]
//     }}
// console.log(max2)

// 2. Sum of Even Digits
//    Given a number, calculate the sum of its even digits using a loop (e.g., input: 2346, output: 2+4+6 = 12).

// let num=2346
// let sum=0
// while (num>0){
//     let r=num%10
//     if(r%2==0){
//         sum+=r
//     }
//     num=Math.floor(num/10)
// }
// console.log(sum)

// 3. Check for Prime Number
//    Write a function that returns true if the input number is prime, else false. Avoid built-in methods.

// let is_prime=function (n){
//     let fact=0
//     if (n>2){
//         for(let i=2;i<n;i++){
//             if(n%i==0){
//                 fact++;
//                 return false;
//             }
//             else{
//              return true
//             }
//         }
//     }
//     else{
//         console.log("number less than 2")
//     }
// }
// console.log(is_prime(4))

// 4.Reverse a Number
//   Using a loop  reverse the digits of a number.
//   Example: "1234" → "4321"

// let num = 1234
// let t=num
// let rev=0
// while (t>0){
//     let r=t%10;
//     rev=rev*10+r
//     t=Math.floor(t/10)
// }
// console.log(rev)

// 5.Fibonacci Series
//   Generate the first n Fibonacci numbers using a for or while loop.
//   Example: 0, 1, 1, 2, 3, 5, 8...

// let limit=100
// let i=1
// let a=0
// let b=1
// while(i<=limit){
//     let c=a+b
//     if(i==99){ console.log(a)}
//     a=b
//     b=c
//     i+=1
// }

// 6.Check Armstrong Number
//   A number is Armstrong if the sum of its digits raised to the power of number of digits equals the number.
//   Example: 153 = 1³ + 5³ + 3³ = 153

// let num="153"
// let l=num.length
// let temp=+num
// let rev=0
// // console.log(l)
// // console.log(typeof(temp))
// while(temp>0){
//     let r=temp%10
//     rev=rev+r**l
//     temp=Math.floor(temp/10)
// }
// if (rev== +num){
//     console.log("armstrong")
// }
// else{
//     console.log("not armstrong")
// }

// 7.Find Factorial (Loop and Recursion)
//   Write two versions of a factorial function – one using a loop, and another using recursion.

// let fact=1
// let n=5
// for(let i=1;i<=n;i++){
//     fact=fact*i
// }
// console.log(fact)

// function fact(n){
//     if (n>1){
//         return n*fact(n-1)    
// }
// else{
//     return 1
// }}
// console.log(fact(5))

// 8.Count Vowels in a String
//   Write a function that returns the number of vowels (a, e, i, o, u) in a string (case-insensitive).

// s="you may leave for the day"
// let vowels="AEIOUaeiou"
// let v_c=0
// for(let i=0;i<=s.length;i++){
//     if(vowels.includes(s[i])){
//         v_c++;
//     }
// }
// console.log(v_c)

// 9.Find All Palindromes in an Array
//   Write a function that takes an array of strings and returns all elements that are palindromes.
// let str_array=["sos","amma","mam","sir","mother"]
// function is_pallindrome(fun){
//     for(let i=0;i<fun.length;i++){
//         if (fun[i]==fun[i].reverse()){
//             return fun[i]
//         }
//         else{
//             return 0
//         }
//     }
// }
// console.log(is_pallindrome(str_array))

// 10.Kaprekar Number
//    Write a function to check whether a number is a Kaprekar number or not.
//    A Kaprekar number is a number whose square can be split into two parts that add up to the original number.
//    Example: 45 → 45² = 2025 → 20 + 25 = 45 (Kaprekar number)


// 11.Find Intersection of Two Arrays
//    Create a function that returns the common elements between two arrays without using filter, includes, or Set.

// let arr1=[1,3,74,9,33,2,5]
// let arr2=[3,77,54,32,33,5,2]
// let common_arr=[]
// for(let i=0;i<arr1.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if (arr1[i] == arr2[j]){
//             common_arr.push(arr1[i])
//         }
//     }
//    }
// console.log(common_arr)


// 12.Find Duplicates in an Array
//    Write a function that identifies and returns duplicate elements from an array of numbers.

// 13.Write a JavaScript function that takes a string as input and returns the character that appears the most times in the string. 
//    If multiple characters have the same highest frequency, return any one of them.
//    Input: "programming"
//    Output: "g" (since 'g' appears twice, which is the highest)

// 14.Is Anagram?
//    Write a function that checks whether two input strings are anagrams of each other.
//    Example: listen and silent

// 15.Write a JavaScript function to calculate the sum of the series:
//    For n = 6, the sum is 1 - 2 + 3 - 4 + 5 - 6 = -3.
//    Implement the function to return the sum for any given positive integer n.







let str1="ancdefbja"
let str2=" "

for(i=0;i<str1.length;i++){
    for(j=0;j<str2.length;j++){
        if(!str1[i].includes(str2[j])){
            str2+=(str1[i])
        }
    }

}
console.log(str2)