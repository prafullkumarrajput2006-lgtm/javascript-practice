//  function hello() {
//     console.log("Hello");
//  }
//  setTimeout(hello, 4000);  //timeout

// const { useCallback } = require("react");

   

                //   OR     //

               
// setTimeout(() => {
//     console.log("Hello, Prafull Rajput");
// }, 3000);    //timeout





// Asynchronous Programing

// console.log("one");
// console.log("two");
//  setTimeout(() => {
//     console.log("Hello Prafull Rajput");
//  }, 2000);

//  console.log("three");
//  console.log("four");




// CallBack... It is a function passed as an argument to another function

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator (a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(5 , 2, sum);




// this is also an example of Callback...

// const hello = () => {
//     console.log("Hello");
// };
// setTimeout(hello, 3000);




// Callback Hell ... condition of nested Callback

// for ( let i=0; i<5; i++) {
//    let srt = "";
//    for(let j=0; j<5; j++){
//    console.log(j);
//    }
// }







// function getData(dataId, getNextData) {
//    setTimeout (() => {
//       console.log("data", dataId);
//       if (getNextData){
//          getNextData();
//       }
//    }, 1500);
//    console.log("data", dataId);
// }


// // // Callback hell  or Pyramid of Doom

// getData(1, () => {
//    getData(2, () => {
//       getData(3, () => {
//          getData(4, () => {
//             getData(5)                   // for getting something after a particular time period
//          });
//       });
//    });
// });






// Promise... 

// function asyncFunc () {
//    return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//          console.log("Some data1");
//          resolve("success");
//       }, 4000);
//    });
// };


// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//    console.log(res);
// })


// Promises...


let promise = new Promise ((resolve, reject) => {
    console.log("I am a promise");
    resolve();
});











// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//       console.log("I am a promise");
//       resolve("success");
//       // reject("network error");
//    });
// };

// let promise = getPromise();
// promise.then((res) => {
//    console.log("promise fullfilled", res);
// });

// promise.catch((err) => {
//    console.log("rejected", err);
// });







// let promise = new Promise((resolve, reject) => {
//    console.log("I am a promise");
//    resolve(123);
//    reject("Some Error occured");
   
// });




// function getData(dataId, getNextData) {
//    return new Promise((resolve, reject) => {
//       setTimeout (() => {
//          console.log("data", dataId);
//          resolve("success");
//          if(getNextData){
//             getNextData();
//          }
//       }, 5000);
//    });
// }



 


// Synchronization Programming...   Sequentially Access 


// console.log("One")
// console.log("Two")
// console.log("Three")