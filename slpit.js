function Shape() {}

Shape.prototype.calculateArea = function() {
    console.log("Area calculation method of Shape class should be overridden by subclasses.");
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.calculateArea = function() {
    const area = 3.14 * this.radius * this.radius;
    console.log(`Area of the circle with radius ${this.radius} is ${area}`);
};

function Triangle(base, height) {
    this.base = base;
    this.height = height;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.calculateArea = function() {
    const area = 0.5 * this.base * this.height;
    console.log(`Area of the triangle with base ${this.base} and height ${this.height}: ${area}`);
};

const circle = new Circle(5);
circle.calculateArea();

const triangle = new Triangle(6, 8);
triangle.calculateArea();






function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  Employee.prototype.calculateAnnualSalary = function() {
    return this.salary * 12;
  };
  
  function Manager(name, salary, department) {
    Employee.call(this, name, salary);
    this.department = department;
  }
  
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  Manager.prototype.calculateAnnualSalary = function() {
    const bonus = 0.1 * this.salary;
    return (this.salary + bonus) * 12;
  };
  
  const manager1 = new Manager("John Doe", 60000, "Marketing");
  const manager2 = new Manager("Jane Smith", 75000, "Finance");
  
  const annualSalaryManager1 = manager1.calculateAnnualSalary();
  const annualSalaryManager2 = manager2.calculateAnnualSalary();
  
  console.log(annualSalaryManager1);
  console.log(annualSalaryManager2);
  


  function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  
  Book.prototype.displayDetails = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}`);
  };
  
  function Ebook(title, author, publicationYear, bookPrice) {
    Book.call(this, title, author, publicationYear);
    this.bookPrice = bookPrice;
  }
  
  Ebook.prototype = Object.create(Book.prototype);
  Ebook.prototype.constructor = Ebook;
  
  Ebook.prototype.displayDetails = function() {
    Book.prototype.displayDetails.call(this);
    console.log(`Price: $${this.bookPrice}`);
  };
  
  const ebook = new Ebook('JavaScript', 'Shreyash', 2024, 9.99);
  ebook.displayDetails();



  function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
  }
  
  Animal.prototype.makeSound = function() {
    console.log(`The ${this.species} makes a sound: ${this.sound}`);
  };
  
  function Dog(species, sound, color) {
    Animal.call(this, species, sound);
    this.color = color;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.makeSound = function() {
    console.log(`The ${this.color} ${this.species} barks: ${this.sound}`);
  };
  
  const myDog = new Dog('dog', 'woof', 'brown');
  myDog.makeSound();
  



  function Bank(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }
  
  Bank.prototype.addBranch = function(branchName) {
    this.branches.push(branchName);
    console.log(`Branch ${branchName} added to ${this.bankName}`);
  };
  
  Bank.prototype.removeBranch = function(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
        this.branches.splice(index, 1);
        console.log(`Branch ${branchName} removed from ${this.bankName}.`);
    } else {
        console.log(`Branch '${branchName}' not found in ${this.bankName}.`);
    }
  };
  
  Bank.prototype.displayBranches = function() {
    console.log(`Branches of ${this.bankName}:`);
    this.branches.forEach(branch => {
        console.log(branch);
    });
  };
  
  const myBank = new Bank('ABC Bank');
  myBank.addBranch('SBI Bank');
  myBank.addBranch('Canara Bank');
  myBank.addBranch('Axis Bank');
  
  myBank.displayBranches();
  myBank.removeBranch('Axis Bank');
  myBank.displayBranches();
  





  
  
  function Product(productId, name, price, quantity) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  Product.prototype.calculateTotalPrice = function() {
    return this.price * this.quantity;
  };
  
  function PersonalCareProduct(productId, name, price, quantity, warrantyPeriod) {
    Product.call(this, productId, name, price, quantity);
    this.warrantyPeriod = warrantyPeriod;
  }
  
  PersonalCareProduct.prototype = Object.create(Product.prototype);
  PersonalCareProduct.prototype.constructor = PersonalCareProduct;
  
  PersonalCareProduct.prototype.calculateTotalPrice = function() {
    const totalPrice = Product.prototype.calculateTotalPrice.call(this);
    const warrantyPrice = this.price * (this.warrantyPeriod * 0.05);
    return totalPrice + warrantyPrice;
  };
  
  const personalCareProduct = new PersonalCareProduct("PCP001", "Electric Toothbrush", 29.99, 2, 12);
  const totalPrice = personalCareProduct.calculateTotalPrice();
  console.log(totalPrice);
  


















































































