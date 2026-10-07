// Function... It is use for repeat somethign again and again


// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("We are learnig JS");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();





// msg ... It is use for passing some msg 

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I Love JS")





// Function for calculating the sum of two number 

// function sum(a, b){
//     console.log(a+b)

// }
// sum(121,5)
// sum(256,45)
// sum(45685,2547895)




// Arrow FUnction 

// const printHello = () => console.log("Hello Prafull Rajput, How are you ?");
// printHello()         // There is need to rewrite the function which you have decleared... for getting output





// Count the vewels 

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str){
//         if ( char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
//         {
//             count++
//         }
//     }
//     return count;
// }
// countVow("Hello Prafull Rajput")

// It is not working ...






// For Each Loop in Array


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.forEach(function printVal(val){
//     console.log(val);
// })

        //    OR 

     
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.forEach((val) => {
//     console.log(val);
// })      




// let arr = ["Pune", "Delhi", "Shimla", "gahziabad", "Bijnor"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })


 


// For a given array of number, print the square of each value using forEach Loop


// let nums = [2, 5, 8, 25, 15, 55555 , 4, 9, 12]
// nums.forEach((num) => {
//     console.log(num* num);
// } )
 

// for claculating the n^4


// let nums = [2, 5, 8, 9, 78, 59, 85, 36];
// nums.forEach((num) => {
//     console.log(num * num * num* num);
// })




// Some more Array Method 

// 1.   Map Method ... (It is a method of an Arry which works on every element of an Array and creates a new Arry)

// let nums = [67, 78, 25, 36, 98]

// nums.map((val) => {
//     console.log(val);
// })

// let nums = [67, 78, 25, 36, 98]
// let newArr = nums.map((val) => {
//     return val;
// })

// console.log(newArr)

// let calcSquare = (num) => {
//     console.log(num * num);
// }



     

// 2. Filter Method... (Creates a new Array of element that gives true for a condition/filter)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let oddArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(oddArr);


// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(evenArr);


// let evenArr = arr.filter((val) => {
//     return val > 3;
// });
// console.log(evenArr);




// 3.   Reduce Method... (Perform some operations & reduce the array to a single CSSMathValue. It returns that single value )

// For calculate the sum of an Array 

// let arr = [5, 9, 7, 15,25];
// const output = arr.reduce ((res, curr) => {
//     return res + curr;
// });
// console.log(output)


// For finding the largest number of an Arry 

// let arr = [5, 9, 7, 15, 25];
// const output = arr.reduce ((res, curr) => {
//     return prev > curr  ? prev : curr;
// });
// console.log(output);

// Not working 




// let marks = [95, 58, 87, 89, 91, 97, 99, 88];
// let toppers = marks.filter((val) => {
//     return val >90;
// });
// console.log(toppers);







