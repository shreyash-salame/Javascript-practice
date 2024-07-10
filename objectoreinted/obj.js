// let obj=2;
// function increment(obj){
//     obj++
//     console.log(obj);
// }
// increment(obj)
// console.log(obj);

// let obj={value:10}
// function increment(obj){
//     obj.value++
// }
// increment(obj)
// console.log(obj)
//emcapsulation
// let circle={
//     radius:2,
//     getArea:function (){
//         return 3.14*this.radius*this.radius
//     }
// }
// console.log(circle.getArea());

//factory function
// function circleArea(radius) {
//     return {
//         radius:radius,
//          area :function(){
//           return   3.14*this.radius*this.radius
//         }

//     }
    
// }
// let res=circleArea(2).area()
// console.log(res);


//using constructor function
// function Areaofcircle(radius){
//     this.radius=radius;
//     this.area=function(){
//         return  3.14*this.radius*this.radius
//     }
// }
// let c=new Areaofcircle(3).area()
// console.log(c);

// function Squarearea(side){
//     this.side=side
//     this.area=function (){
//         return this.side*this.side
//     }
// }
// let areaofsquare=new Squarearea(5).area()
// console.log(areaofsquare);

// function Areaofcircle(radius){
//     this.radius=radius;
//     this.area=function(){
//         return  3.14*this.radius*this.radius
//     }
// }
// let c=new Areaofcircle(2)
// console.log(c);

// const Circle1=new Function('radius',`this.radius=radius;
// this.area=function(){
//     return  3.14*this.radius*this.radius
// }`)
// const anothercircle=new Circle1(2)
// console.log(anothercircle); 

// let obj={
//     name:"shreyash",
//     birthyear:1997,
//     gender:'male',
//     age:function () {
//         return 2024-this.birthyear
//     }
// }
// let result=obj.age();
// console.log(result);


// function Person(name,birthyear,gender){
//     this.name=name;
//     this.birthyear=birthyear
//     this.gender=gender;
//     this.calage=function(){
//         let age= 2024-this.birthyear
//         console.log(age);
//     }
    
// }
// let shreyash=new Person('shreyash',1997,'male')
// shreyash.calage()
// console.log(shreyash);


// function Person(name,birthyear,gender){
//     this.name=name;
//     this.birthyear=birthyear
//     this.gender=gender;
//     this.calage=
//     Person.prototype.calage=function(){
//         let age= 2024-this.birthyear
//         console.log(age);
//     }
    
// }
// let shreyash=new Person('shreyash',1997,'male')
// shreyash.calage()
// console.log(shreyash);

// function Stopwatch(){
//     let start=0
//     let end=0
   
//   this.start = function () {
//     start = new Date();
//     console.log("Stopwatch started.");
//     };
//     this.stop = function () {
//         end = new Date();
//         let seconds = (end.getTime() - start.getTime())/1000;
//         duration += seconds;
//         console.log("Stopwatch stopped.");
//       };
    
// }

// function Stopwatch() {
//     let startTime, endTime, running, duration = 0;
//     this.start = function() {
//       if(running) {
//         throw new Error('Stopwatch is already running!');
//       }
//       running = true;
//       startTime = new Date();
//     }
//     this.stop = function() {
//       if(!running) {
//         throw new Error('Stopwatch is not yet running');
//       }
//       running = false;
//       endTime = new Date();
//       const seconds = (endTime.getTime() - startTime.getTime())/1000;
//       duration = duration + seconds;
//     }
//     this.reset = function() {
//       startTime = null;
//       endTime = null;
//       running = false;
//       duration = 0;
//     }
//     Object.defineProperty(this, 'duration', {
//       get: function() {return duration}
//     })
//   }
   
//   let sw = new Stopwatch();

// You're tasked with creating a simple banking application using JavaScript. Implement a BankAccount class with the following functionalities:

// A constructor that initializes the account balance to 0.
// Methods to deposit and withdraw funds from the account.
// A method to check the current balance of the account.
// Additionally, create two instances of BankAccount representing two different customers, and demonstrate the functionality of depositing, withdrawing, and checking balances for both accounts.

// Feel free to implement this task and let me know if you'd like any assistance or feedback!




// function BankAccount(){
// this.balance=0;

// this.deposit=function(amount){
// if(amount<=0){
//   throw new Error('invalid amount for deposit')
// }
// this.balance+=amount;
// }

// this.witdraw=function(amount){
//   if(amount<=0){
//     throw new Error('invalid amount for withdrawal')
//   }
//   this.balance-=amount
// }

// this.checkbalance=function(){
//   return this.balance
// }

// }

// const account1=new BankAccount()
// const account2=new BankAccount()


// account1.deposit(1000)
// account1.witdraw(200)
// console.log(account1.checkbalance());




// function ShoppingCart(){
//   this.items=[]

// this.additem=function(item){
//   this.items.push(item)
// }

// this.removeitems=function(index){
//  if(index < 0 || index>=this.items.length) {
//   throw new Error('invalid index')
//  }
//  this.items.splice(index,1)
// }

// this.updatQuantity=function(index,newquantity){
//   if(index<0 || index>=this.items.length){
//     throw new Error('invalid index')
//   }
//   if(newQuantity <=0){
//     throw new Error('quantity must be greater than zero')
//   }
//   this.item[index].quantity=newQuantity
// }

// this.claculateTotalPrice=function(){
//   let totalPrice=0;
//   for(let items of this.items){
//     totalPrice +=item.price*item.quantity
//   }
//   return totalPrice
// }

// }

// const item = {
//   name: 'Product',
//   price: 10,
//   quantity: 1
// };
// const cart=new ShoppingCart()

// cart.additem({name: 'Item 1', price: 20, quantity: 2})
// cart.additem({name: 'Item 2', price: 30, quantity: 1})

// cart.removeitems(2)
// cart.updatQuantity(0,3) 
// const totalPrice=cartt.claculateTotalPrice()
// console.log(totalPrice);

// function ShoppingCart() {
//   this.items = [];

//   this.addItem = function(item) {
//     this.items.push(item);
//   }

//   this.removeItem = function(index) {
//     if (index < 0 || index >= this.items.length) {
//       throw new Error('Invalid index');
//     }
//     this.items.splice(index, 1);
//   }

//   this.updateQuantity = function(index, newQuantity) {
//     if (index < 0 || index >= this.items.length) {
//       throw new Error('Invalid index');
//     }
//     if (newQuantity <= 0) {
//       throw new Error('Quantity must be greater than zero');
//     }
//     this.items[index].quantity = newQuantity;
//   }

//   this.calculateTotalPrice = function() {
//     let totalPrice = 0;
//     for (let item of this.items) {
//       totalPrice += item.price * item.quantity;
//     }
//     return totalPrice;
//   }
// }

// const item = {
//   name: 'Product',
//   price: 10,
//   quantity: 1
// };

// const cart = new ShoppingCart();

// cart.addItem({ name: 'Item 1', price: 20, quantity: 2 });
// cart.addItem({ name: 'Item 2', price: 30, quantity: 1 });

// cart.removeItem(1);
// cart.updateQuantity(0, 3);

// const totalPrice = cart.calculateTotalPrice();
// console.log(totalPrice);


// function TodoList() {
//   // Initialize an empty array to store tasks
//   this.tasks = [];

//   // Method to add a task to the list
//   this.addTask = function(task) {
//     this.tasks.push({ name: task, completed: false });
//   }

//   // Method to mark a task as completed
//   this.completeTask = function(index) {
//     if (index < 0 || index >= this.tasks.length) {
//       throw new Error('Invalid index');
//     }
//     this.tasks[index].completed = true;
//   }

//   // Method to remove a task from the list
//   this.removeTask = function(index) {
//     if (index < 0 || index >= this.tasks.length) {
//       throw new Error('Invalid index');
//     }
//     this.tasks.splice(index, 1);
//   }

//   // Method to display all tasks in the list
//   this.displayTasks = function() {
//     console.log("Tasks:");
//     this.tasks.forEach((task, index) => {
//       console.log(`${index + 1}. ${task.name} - ${task.completed ? 'Completed' : 'Incomplete'}`);
//     });
//   }
// }

// // Create a TodoList instance
// const todoList = new TodoList();

// // Add tasks to the list
// todoList.addTask('Complete JavaScript assignment');
// todoList.addTask('Buy groceries');
// todoList.addTask('Read a book');

// // Mark a task as completed
// todoList.completeTask(0);

// // Remove a task from the list
// todoList.removeTask(1);

// // Display all tasks in the list
// todoList.displayTasks();




