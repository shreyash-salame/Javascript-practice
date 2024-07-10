// class car {
//     constructor(make,model,year,color,fuellevel){
//        this.make=make
//        this.model=model
//        this.year=year
//        this.color=color
//        this.fuellevel=fuellevel
//     }

//     start(){
//         console.log(`The ${this.color} ${this.make} ${this.model} is starting.`);
//     }

//     drive(miles){
//        const fuelConsumed = miles/10;
//        if(fuelConsumed>this.fuellevel){
//         console.log("Not enough fuel to complete the drive.");
//        } else{
//         this.fuellevel -=fuelConsumed
//         console.log(`After driving ${miles} miles, the remaining fuel level is ${this.fuellevel} gallons.`);
//        }  
//     }

//     refuel(gallons){
//         this.fuellevel += gallons
//         console.log(`Refueled ${gallons} gallons. The new fuel level is ${this.fuellevel} gallons.`);
//     }
// }
// const mycar=new car('Mahindra','Scorpio N',2025,'white',15)
// mycar.start()
// mycar.drive(50)
// mycar.refuel(10)

function Car(make,model,year,color,fuellevel){
  this.make=make
  this.model=model
  this.year=year
  this.color=color
  this.fuellevel=fuellevel
}
Car.prototype.start=function(){
  console.log(`The ${this.color} ${this.make} ${this.model} is starting.`);
}
Car.prototype.drive=function(miles){
  const fuelConsumed=miles/10
  if (fuelConsumed > this.fuelLevel) {
    console.log("Not enough fuel to complete the drive.");
} else {
    this.fuelLevel -= fuelConsumed;
    console.log(`After driving ${miles} miles, the remaining fuel level is ${this.fuelLevel} gallons.`);
}
}
Car.prototype.refuel=function(gallons){
  this.fuelLevel += gallons;
    console.log(`Refueled ${gallons} gallons. The new fuel level is ${this.fuelLevel} gallons.`);
}

const myCar = new Car('Mahindra', 'Scorpio N', 2025, 'white', 15);
myCar.start();
myCar.drive(50);
myCar.refuel(10);


// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


// class Person{
//     constructor(name,age,country){
//         this.name= name
//         this.age= age
//         this.country= country
//     }
//     displayDetails(){
//         console.log(`Name:${this.name},Age:${this.age},country:${this.country}`);
//     }
// }
// const person1=new Person('shreyash',26,'india')
// const person2=new Person('sonu',52,'india')

// person1.displayDetails()
// person2.displayDetails()

// function Person(name, age, country) {
//   this.name = name;
//   this.age = age;
//   this.country = country;
// }

// Person.prototype.displayDetails = function() {
//   console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
// };

// const person1 = new Person('shreyash', 26, 'india');
// const person2 = new Person('sonu', 52, 'india');

// person1.displayDetails();
// person2.displayDetails();



// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

// class Rectangle{
//     constructor(width,heigth){
//         this.width=width
//         this.heigth=heigth

//     }
//     CalculateArea(){
//         return this.width*this.heigth
//     }
//     calculatePerimeter(){
//        return 2*(this.width+this.heigth)
//     }
// }
// const rectangle= new Rectangle(5,8)
// const area = rectangle.CalculateArea()
// const perimeter =rectangle.calculatePerimeter()


// console.log(area);
// console.log(perimeter);

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.calculateArea = function() {
//   return this.width * this.height;
// };

// Rectangle.prototype.calculatePerimeter = function() {
//   return 2 * (this.width + this.height);
// };

// const rectangle = new Rectangle(5, 8);
// const area = rectangle.calculateArea();
// const perimeter = rectangle.calculatePerimeter();

// console.log(area);
// console.log(perimeter);


// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
// class Vehical{
//     constructor(make,model,year){
//          this.make=make
//          this.model=model
//          this.year=year
//     }
//     displayDetails(){
//         console.log(`Make:${this.make},Model:${this.model},Year:${this.year}`);
//     }
// }
// class Car extends Vehical{
//     constructor(make,model,year,numDoors){
//         super(make,model,year)
//         this.numDoors=numDoors
//     }
//     displayDetails(){
//         super.displayDetails()
//         console.log(`number of Doors:${this.numDoors}`);
//     }
    
// }
// const vehical=new Vehical("Toyota", "Camry", 2022)
// vehical.displayDetails()
// const car=new Car('honda','accord',2021,4)
// car.displayDetails()





// function Vehicle(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// Vehicle.prototype.displayDetails = function() {
//   console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
// };
// function Car(make, model, year, numDoors) {
//   Vehicle.call(this, make, model, year);
//   this.numDoors = numDoors;
// }
// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.displayDetails = function() {
//   Vehicle.prototype.displayDetails.call(this);
//   console.log(`Number of Doors: ${this.numDoors}`);
// };
// const vehicle = new Vehicle("Toyota", "Camry", 2022);
// vehicle.displayDetails();

// const car = new Car('Honda', 'Accord', 2021, 4);
// car.displayDetails();

// class BankAccount{
//     constructor(accountNumber,balance){
//         this.accountNumber=accountNumber
//         this.balance=balance
//     }

//     toDeposit(amount){
//        this.balance +=amount
//        console.log(`deposited ${amount} into the account ${this.accountNumber}.new balance:${this.balance}`);
//     }
//     towithdraw(amount){
//         if(amount<=this.balance){
//             this.balance -= amount
//             console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
//         }else{
//             console.log(`Insufficient funds in account ${this.accountNumber}`);
//         }

//     }
// }
// const account1=new BankAccount(123456789,1000)
// const account2=new BankAccount(987654321,500)
// account1.toDeposit(500);
// account2.toDeposit(200);
// account1.towithdraw(500);
// account2.towithdraw(200);


// function BankAccount(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;
// }

// BankAccount.prototype.toDeposit = function(amount) {
//   this.balance += amount;
//   console.log(`Deposited ${amount} into the account ${this.accountNumber}. New balance: ${this.balance}`);
// };

// BankAccount.prototype.toWithdraw = function(amount) {
//   if (amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
//   } else {
//       console.log(`Insufficient funds in account ${this.accountNumber}`);
//   }
// };

// const account1 = new BankAccount(123456789, 1000);
// const account2 = new BankAccount(987654321, 500);

// account1.toDeposit(500);
// account2.toDeposit(200);
// account1.toWithdraw(500);
// account2.toWithdraw(200);


// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

// class Shape{
//     calculateArea(){
//         console.log("Area calculation method of Shape class should be overridden by subclasses.");
//     }
// }
// class Circle extends Shape{
//     constructor(radius){
//         super()
//         this.radius=radius
//     }
//     calculateArea(){
//         const area=3.14*this.radius*this.radius
//         console.log(`area of the circle with radius ${this.radius}is${area}`);
//     }
// }
// class Tiangle extends Shape{
//     constructor(base,height){
//         super()
//         this.base = base;
//         this.height = height;

//     }
//     calculateArea() {
//         const area = 0.5 * this.base * this.height;
//         console.log(`Area of the triangle with base ${this.base} and height ${this.height}: ${area}`);
//     }
// }
// const circle=new Circle(5)
// circle.calculateArea()

// const triangle=new Tiangle(6,8)
// triangle.calculateArea()




// function Shape() {}

// Shape.prototype.calculateArea = function() {
//     console.log("Area calculation method of Shape class should be overridden by subclasses.");
// };

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.calculateArea = function() {
//     const area = 3.14 * this.radius * this.radius;
//     console.log(`Area of the circle with radius ${this.radius} is ${area}`);
// };

// function Triangle(base, height) {
//     this.base = base;
//     this.height = height;
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// Triangle.prototype.calculateArea = function() {
//     const area = 0.5 * this.base * this.height;
//     console.log(`Area of the triangle with base ${this.base} and height ${this.height}: ${area}`);
// };

// const circle = new Circle(5);
// circle.calculateArea();

// const triangle = new Triangle(6, 8);
// triangle.calculateArea();



// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

// class Employee{
//  constructor(name,salary){
//     this.name=name
//     this.salary=salary
//  }
//  calculateAnnualSalary(){
//     return this.salary*12
//  }
// }
// class Manager extends Employee{
//     constructor(name,salary,department){
//         super(name,salary)
//         this.department=department
//     }
//     calculateAnnualSalary(){
//         const bonus=0.1*this.salary
//         return (this.salary+bonus)*12
//     }
// }
// const manager1 = new Manager("John Doe", 60000, "Marketing");
// const manager2 = new Manager("Jane Smith", 75000, "Finance");

// const annualSalaryManager1 = manager1.calculateAnnualSalary();
// const annualSalaryManager2 = manager2.calculateAnnualSalary();
// console.log(annualSalaryManager1);
// console.log(annualSalaryManager2);


// function Employee(name, salary) {
//   this.name = name;
//   this.salary = salary;
// }

// Employee.prototype.calculateAnnualSalary = function() {
//   return this.salary * 12;
// };

// function Manager(name, salary, department) {
//   Employee.call(this, name, salary);
//   this.department = department;
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.calculateAnnualSalary = function() {
//   const bonus = 0.1 * this.salary;
//   return (this.salary + bonus) * 12;
// };

// const manager1 = new Manager("John Doe", 60000, "Marketing");
// const manager2 = new Manager("Jane Smith", 75000, "Finance");

// const annualSalaryManager1 = manager1.calculateAnnualSalary();
// const annualSalaryManager2 = manager2.calculateAnnualSalary();

// console.log(annualSalaryManager1);
// console.log(annualSalaryManager2);


// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.
// class Book{
//     constructor(title,author,publicationYear){
//         this.title=title
//         this.author=author
//         this.publicationYear=publicationYear
//     }
//     displayDetails(){
//         console.log(`title:${this.title},Author:${this.author},PublicationYear:${this.publicationYear}`);
//     }
// }
// class Ebook extends Book{
//     constructor(title,author,publicationYear,bookPrice){
//         super(title,author,publicationYear)
//         this.bookPrice=bookPrice
//     }
//     displayDetails(){
//         super.displayDetails()
//         console.log(`Price:$${this.bookPrice}`);
//     }
// }
// const ebook=new Ebook('javascript','shreyash',2024,9.99)
// ebook.displayDetails()

// function Book(title, author, publicationYear) {
//   this.title = title;
//   this.author = author;
//   this.publicationYear = publicationYear;
// }

// Book.prototype.displayDetails = function() {
//   console.log(`Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`);
// };

// function Ebook(title, author, publicationYear, bookPrice) {
//   Book.call(this, title, author, publicationYear);
//   this.bookPrice = bookPrice;
// }

// Ebook.prototype = Object.create(Book.prototype);
// Ebook.prototype.constructor = Ebook;

// Ebook.prototype.displayDetails = function() {
//   Book.prototype.displayDetails.call(this);
//   console.log(`Price: $${this.bookPrice}`);
// };

// const ebook = new Ebook('JavaScript', 'Shreyash', 2024, 9.99);
// ebook.displayDetails();

// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.
// class Animal{
//     constructor(species,sound){
//         this.species=species
//         this.sound=sound
//     }
//     makesound(){
//         console.log(`the ${this.species} makes a sound:${this.sound}`);
//     }
// }
// class Dog extends Animal{
//     constructor(species,sound,color){
//         super(species,sound)
//         this.color=color
//     }
//     makesound(){
//         console.log(`the ${this.color} ${this.species} braks:${this.sound}`);
       
//     }
// }
// const mydog= new Dog('dog','woof','brown')
// mydog.makesound()



// function Animal(species, sound) {
//   this.species = species;
//   this.sound = sound;
// }

// Animal.prototype.makeSound = function() {
//   console.log(`The ${this.species} makes a sound: ${this.sound}`);
// };

// function Dog(species, sound, color) {
//   Animal.call(this, species, sound);
//   this.color = color;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.makeSound = function() {
//   console.log(`The ${this.color} ${this.species} barks: ${this.sound}`);
// };

// const myDog = new Dog('dog', 'woof', 'brown');
// myDog.makeSound();

// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
// class Bank {
//     constructor(bankName){
//         this.bankName=bankName
//         this.branches=[]
//     }
//     addbranch(branchName){
//         this.branches.push(branchName)
//         console.log(`Branch ${branchName} added to ${this.bankName}`);
       
//     }
//     removeBranch(branchName){
//         const index=this.branches.indexOf(branchName)
//         if(index !==-1){
//             this.branches.splice(index,1)
//             console.log(`Branch ${branchName} removed from ${this.bankName}.`);
//         }else{
//             console.log(`Branch '${branchName}' not found in ${this.bankName}.`);
//         } 
//         } 
//         displayBranches(){
//             console.log(`Branches of ${this.bankName}:`);
//             this.branches.forEach(branch => {
//               console.log(branch);
//             });
//         }
//     }
//     const mybank= new Bank ('ABC Bank')
//     mybank.addbranch('sbi bank')
//     mybank.addbranch('canara bank')
//     mybank.addbranch('axis bank')

//     mybank.displayBranches()
//     mybank.removeBranch('axis bank')
//     mybank.displayBranches()

// function Bank(bankName) {
//   this.bankName = bankName;
//   this.branches = [];
// }

// Bank.prototype.addBranch = function(branchName) {
//   this.branches.push(branchName);
//   console.log(`Branch ${branchName} added to ${this.bankName}`);
// };

// Bank.prototype.removeBranch = function(branchName) {
//   const index = this.branches.indexOf(branchName);
//   if (index !== -1) {
//       this.branches.splice(index, 1);
//       console.log(`Branch ${branchName} removed from ${this.bankName}.`);
//   } else {
//       console.log(`Branch '${branchName}' not found in ${this.bankName}.`);
//   }
// };

// Bank.prototype.displayBranches = function() {
//   console.log(`Branches of ${this.bankName}:`);
//   this.branches.forEach(branch => {
//       console.log(branch);
//   });
// };

// const myBank = new Bank('ABC Bank');
// myBank.addBranch('SBI Bank');
// myBank.addBranch('Canara Bank');
// myBank.addBranch('Axis Bank');

// myBank.displayBranches();
// myBank.removeBranch('Axis Bank');
// myBank.displayBranches();



// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
// class Product {
//     constructor(productId,name,price,quantity){
//         this.productId=productId
//         this.name=name
//         this.price=price
//         this.quantity=quantity
//     }
//     claculateTotalPrice(){
//         return this.price*this.quantity
//     }
// }
// class PersonalCareProduct extends Product{
//     constructor(productId, name, price, quantity, warrantyPeriod) {
//         super(productId, name, price, quantity);
//         this.warrantyPeriod = warrantyPeriod;
//     }
//     claculateTotalPrice(){
//         const totalPrice=super.claculateTotalPrice()
//         const warrantyPeriod=this.price *(this.warrantyPeriod*0.05)
//         return totalPrice+warrantyPeriod
//     }
// }
// const personalcareproduct=new PersonalCareProduct("PCP001", "Electric Toothbrush", 29.99, 2, 12)
// const totalPrice=personalcareproduct.claculateTotalPrice()
// console.log(totalPrice);


// function Product(productId, name, price, quantity) {
//   this.productId = productId;
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;
// }

// Product.prototype.calculateTotalPrice = function() {
//   return this.price * this.quantity;
// };

// function PersonalCareProduct(productId, name, price, quantity, warrantyPeriod) {
//   Product.call(this, productId, name, price, quantity);
//   this.warrantyPeriod = warrantyPeriod;
// }

// PersonalCareProduct.prototype = Object.create(Product.prototype);
// PersonalCareProduct.prototype.constructor = PersonalCareProduct;

// PersonalCareProduct.prototype.calculateTotalPrice = function() {
//   const totalPrice = Product.prototype.calculateTotalPrice.call(this);
//   const warrantyPrice = this.price * (this.warrantyPeriod * 0.05);
//   return totalPrice + warrantyPrice;
// };

// const personalCareProduct = new PersonalCareProduct("PCP001", "Electric Toothbrush", 29.99, 2, 12);
// const totalPrice = personalCareProduct.calculateTotalPrice();
// console.log(totalPrice);



// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
// class BankAccount {
//     constructor(accountNumber, accountHolderName, balance) {
//       this.accountNumber = accountNumber;
//       this.accountHolderName = accountHolderName;
//       this.balance = balance;
//     }
//     deposit(amount){
//         if(amount>0){
//             this.balance +=amount
//             console.log(`Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`);
//         }else{
//             console.log("Deposit amount must be greater than 0.");  
//         }
//     }
//     withdraw(amount){
//         if(amount>0){
//             if(amount<=this.balance){
//                 this.balance -= amount
//                 console.log(`Withdrawn $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
//              } else {
//                 console.log("Insufficient funds.");
//             }
//         }else{
//             console.log("Withdrawal amount must be greater than 0.");  
//         }
//     }
//     transfer(amount,recipientAccount){
//         if (amount > 0) {
//             if (amount <= this.balance) {
//               this.balance -= amount;
//               recipientAccount.deposit(amount);
//               console.log(`Transferred $${amount} from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
//             } else {
//               console.log("Insufficient funds for transfer.");
//             }
//           } else {
//             console.log("Transfer amount must be greater than 0.");
//           }
//     }
// }
// const account1=new BankAccount('123455678','shreyash',1000)
// const account2=new BankAccount('987654321','shreyash',500)
// account1.deposit(500);
// account1.withdraw(200);
// account1.transfer(300, account2);


// function BankAccount(accountNumber, accountHolderName, balance) {
//   this.accountNumber = accountNumber;
//   this.accountHolderName = accountHolderName;
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function(amount) {
//   if (amount > 0) {
//       this.balance += amount;
//       console.log(`Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`);
//   } else {
//       console.log("Deposit amount must be greater than 0.");
//   }
// };

// BankAccount.prototype.withdraw = function(amount) {
//   if (amount > 0) {
//       if (amount <= this.balance) {
//           this.balance -= amount;
//           console.log(`Withdrawn $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
//       } else {
//           console.log("Insufficient funds.");
//       }
//   } else {
//       console.log("Withdrawal amount must be greater than 0.");
//   }
// };

// BankAccount.prototype.transfer = function(amount, recipientAccount) {
//   if (amount > 0) {
//       if (amount <= this.balance) {
//           this.balance -= amount;
//           recipientAccount.deposit(amount);
//           console.log(`Transferred $${amount} from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
//       } else {
//           console.log("Insufficient funds for transfer.");
//       }
//   } else {
//       console.log("Transfer amount must be greater than 0.");
//   }
// };

// const account1 = new BankAccount('123455678', 'shreyash', 1000);
// const account2 = new BankAccount('987654321', 'shreyash', 500);

// account1.deposit(500);
// account1.withdraw(200);
// account1.transfer(300, account2);


// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

// class University {
//     constructor(universityName) {
//       this.universityName = universityName;
//       this.departments = [];
//     }
//     addDepartment(departmentName) {
//         if (!this.departments.includes(departmentName)) {
//           this.departments.push(departmentName);
//           console.log(`Department '${departmentName}' added to ${this.universityName}.`);
//         } else {
//           console.log(`Department '${departmentName}' already exists in ${this.universityName}.`);
//         }
//       }
//       removeDepartment(departmentName) {
//         const index = this.departments.indexOf(departmentName);
//         if (index !== -1) {
//           this.departments.splice(index, 1);
//           console.log(`Department '${departmentName}' removed from ${this.universityName}.`);
//         } else {
//           console.log(`Department '${departmentName}' not found in ${this.universityName}.`);
//         }
//       }
//       displayDepartments() {
//         console.log(`Departments of ${this.universityName}:`);
//         this.departments.forEach(department => {
//           console.log(department);
//         });
//       }

// }
// const myUniversity = new University("XYZ University");
// myUniversity.addDepartment("Computer Science");
// myUniversity.addDepartment("Electrical Engineering");
// myUniversity.addDepartment("Mechanical Engineering");
// myUniversity.displayDepartments();
// myUniversity.removeDepartment("Electrical Engineering");

// myUniversity.displayDepartments();

// function University(universityName) {
//   this.universityName = universityName;
//   this.departments = [];
// }

// University.prototype.addDepartment = function(departmentName) {
//   if (!this.departments.includes(departmentName)) {
//       this.departments.push(departmentName);
//       console.log(`Department '${departmentName}' added to ${this.universityName}.`);
//   } else {
//       console.log(`Department '${departmentName}' already exists in ${this.universityName}.`);
//   }
// };

// University.prototype.removeDepartment = function(departmentName) {
//   const index = this.departments.indexOf(departmentName);
//   if (index !== -1) {
//       this.departments.splice(index, 1);
//       console.log(`Department '${departmentName}' removed from ${this.universityName}.`);
//   } else {
//       console.log(`Department '${departmentName}' not found in ${this.universityName}.`);
//   }
// };

// University.prototype.displayDepartments = function() {
//   console.log(`Departments of ${this.universityName}:`);
//   this.departments.forEach(department => {
//       console.log(department);
//   });
// };

// const myUniversity = new University("XYZ University");
// myUniversity.addDepartment("Computer Science");
// myUniversity.addDepartment("Electrical Engineering");
// myUniversity.addDepartment("Mechanical Engineering");
// myUniversity.displayDepartments();
// myUniversity.removeDepartment("Electrical Engineering");
// myUniversity.displayDepartments();
