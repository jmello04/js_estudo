// Versão corrigida
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}


const person1 = new Person("João", "Neymar", 20);
console.log(person1.firstname); 
console.log(person1.lastname);  
console.log(person1.age); 

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    
    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal = new Animal("Simba");
const dog = new Dog("elnacho");

animal.speak();
dog.speak();