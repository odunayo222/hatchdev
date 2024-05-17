// //practicing interface 
// interface Person {
//     name: string
//     age: number

//     sayHello(): void
// }
// class greetPerson implements Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.age = age
//         this.name = name
//     }
//     sayHello(): void {
//         console.log(`Hello ${this.name}, You are ${this.age} years old`)
//     }
// }
// let person: Person = new greetPerson("odun", 12);
// console.log(person.sayHello())

// //demonstrating polymorphism
// interface Shape {
//     area() :number;
// }
// class Rectangle implements Shape {
//     constructor(private length: number, private width: number) {}
//     area(): number {
//         return this.length * this.width
//     }
// }
// class Circle implements Shape {
//     constructor(private radius: number){}
//     area() :number {
//         return Math.PI * this.radius * this.radius
//     }
// }
// let rectangle: Shape = new Rectangle(7,8);
// let circle: Shape = new Circle(7)
// console.log(rectangle.area());
// console.log(circle.area());

// //practicing abstrract class
// abstract class Animal {
//     abstract makeSound(): void;

//     eat(): void {
//         console.log('Eating...');
//     }
// }
// class Dog extends Animal {
//     makeSound(): void {
//         console.log('Woof!');
//     }
// }

// let dog = new Dog();
// dog.makeSound(); // Outputs: Woof!
// dog.eat(); // Outputs: Eating...
