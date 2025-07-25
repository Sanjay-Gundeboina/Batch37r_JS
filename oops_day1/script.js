// class Car{
//     static type="4*4"
//     #price=10000000
//     constructor(company,color){
//         this.company=company;
//         this.color=color;
//     }

//     getinstacevar(){
//         return `car company ${this.company},color ${this.color}`;
//     }

//     setinstancevar(new_company,new_color){
//         this.company=new_company;
//         this.color=new_color        
//     }

//     getcarinfo(){
//         return `this is a ${this.company} car. with the color ${this.color} and car prics is ${this.#price}`
//     }

//     static getcartype(){
//         return `the car is type of ${Car.type}`
//     }
// }
// c1=new Car("THAR","black")
// // console.log(c1.getcarinfo())
// // // console.log(Car.type)
// // console.log(Car.getcartype())

// console.log(c1.getinstacevar())
// c1.setinstancevar("audi","blue")
// console.log(c1.getinstacevar())
// // console.log(Car.#price) --->with in the class only it is accessible i.e in class methood


// '''inheritance

// class parent{
//     constructor(name){
//         this.name=name
//     }
//     getparentname(){
//         console.log("parent name is "+this.name);
//     }
//     getproperties(){
//         console.log("this property belongs to parent");
//     }
// }

// class child extends parent{
//     constructor(name,lastname){
//         super(name)
//         this.lastname=lastname;
//     }
//     getchildname(){
//         console.log("child name "+this.name,this.lastname)
//     }
// }

// obj1=new child("gundeboina","sanjay")
// obj1.getchildname()




//Abstraction & encapsulation

// class ATM{
//     #balance=5000;
//     #min_bal=1000;
//     #prev_pin=1121;
//     bal=this.#balance
//     getamount(amount,pin){
//         if(this.#verifypin(pin)){
//             if(this.#balance-amount>=this.#min_bal){
//                 console.log("withdraw sucessfull");
//             }
//             else{
//                 console.log("insuffient balance")
//             }
//         }
//         else{
//             console.log("incorrect pin")
//         }

//     }
//     #verifypin(pin){
//         return pin==this.#prev_pin
//     }
//     deposit(amount,pin){
//         if(this.#verifypin(pin)){
//             if(amount>0){
//                 this.bal+=amount
//                 console.log("amount deposited sucessfully");
//                 console.log(this.bal)
//             }
//             else{
//                 console.log("amount must be greater than zero");
//             }
//         }
//         else{
//             console.log("incorrect pin")
//         }

//     }
// }
// obj=new ATM()
// // obj.getamount(6000,1121)
// obj.deposit(500,1121)