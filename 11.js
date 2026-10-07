// Classes & Objects

// const student = {
//     fullName: "Prafull Rajput",
//     marks: 95.4,
//     printMarks : function(){
//         console.log("marks = ",this.marks); // means of this keyword... thats main object like here it is student (student.marks)
//     },
// };



// let arr = ["mango", "apple", "banana"];






// // Prototype... It is a reference of an Object...

// const KaranArjun1 = {
//     salary: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };

// const KaranArjun2 = {
//     salary: 50000,
// };

// const KaranArjun3 = {
//     salary: 50000,
// };

// const KaranArjun4 = {
//     salary: 50000,
// };

// const KaranArjun5 = {
//     salary: 50000,
// // };

// KaranArjun1.__proto__ = employee;  //use to set the prototype..
// KaranArjun2.__proto__ = employee;  //use to set the prototype..
// KaranArjun3.__proto__ = employee;  //use to set the prototype..
// KaranArjun4.__proto__ = employee;  //use to set the prototype..
// KaranArjun5.__proto__ = employee;  //use to set the prototype..







// // Class ...


// class ToyotaCar {

//     constructor (brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start () {
//         console.log("start");
//     }

//     stop () {
//         console.log("stop");
//     }

//     // setBrand (brand) {
//     //     this.brandName = brand;      It can replace by the writting the brand name in constructor...

//     // }
// }

// let fortuner = new ToyotaCar("fortuner",10); // constructor
// console.log(fortuner)
// fortuner.setBrand("Toyota");
// let lexux = new ToyotaCar("lexux",8);  //constructor
// console.log(lexux);
// lexux.setBrand("Lexux");







// // Inheritance in JS... passign down the properties and method from parent class to child class.

// // class Parent  {
// //     hello () {
// //         console.log("hello");
// //     }
// // }

// // class Child extends Parent {


// // }


// // let obj = new Child();



// class Person {
//     constructor() {
//         this.species = "home sapiens";
//     }

//     eat (){
//        console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work() {
//         console.log("Do noting");
//     }
// }


// class Engineer extends Person{
//     work() {
//         console.log("Solve problems, build something");
//     }
// }

// class Doctor extends Person{
//     work() {
//         console.log("Treat, Save Life");
//     }
// }


// let PrafullObj = new Engineer();









// // Super Keyword...  It is used to call the constructor of its parent class to access the parent's properties and method


// class Person {
//     constructor () {
//         console.log("enter parent constructor");
//         this.species = "homo sapiens";
//     }

//     eat () {
//         console.log("eat");
//     }
// }


// class Engineer extends Person {
//     constructor(branch) {
//         console.log("enter child constructor");
//         super(name);   //TO invoke the parent class constructor...
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work() {
//         console.log("Sovle Problems , Bulid Something");
//     }
// }

// let engObj = new Engineer("chemical Engg");



// Q1. Method Overriding ?
// Q2. Method Overloading ?
// Q3. USe of "Super" keyword ?
// Q4. Inheritance ?
// Q5. Use of "Extends" keyword ?





// // Practice Question 1...create a website for your college. createa caches;ass user with 2 properties, name & email.

// let DATA = "secret information";

// class User {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log("data =", DATA);
//     }
// }

// let student1 = new User("Dhairya","ash@email.com")
// let student2 = new User("adj","xs@email.com");


// let teacher1 = new User("Dhai","asdfnh@email.com")
// let teacher2 = new User("shai","cdjjffnh@email.com")








// // Practice Question 2... Create a new class called Admin which inherits from UserActivation. Add s new method called edit data to admin that allows it to edit website data 



// let DATA = "secret information";

// class User {
//     constructor (name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log("data =", DATA);
//     }
// }


// class Admin extends User{
//     constructor(name, email) {
//         super(name, email);

//     }


//     editData () {
//         DATA = "some new value";
//     }
// }



// let student1 = new User("Dhairya","ash@email.com")
// let student2 = new User("adj","xs@email.com");


// let teacher1 = new User("Dhai","asdfnh@email.com")
// let teacher2 = new User("shai","cdjjffnh@email.com")


// let admin1 = new Admin("admin", "admin@email.com");






// Error Handling... with the help of try and catch

// let a = 5;
// let b = 10;
// console.log("a =",a);
// console.log("b =",b);
// console.log("a+b = ", a+b);
// try{
// console.log("a-b = ", a-c);
// } catch (err) {
//     console.log(err);
// }
// console.log("a*b = ", a*b);
// console.log("a/b = ", a/b);









// class defination... 


// class ToyotaCar {
//     start() {
//         console.log("start");

//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar();
// let lexux = new ToyotaCar();