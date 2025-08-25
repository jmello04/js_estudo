for(let index = 0; index <= 10; index++) {
    console.log(index);
}

const cars = ['Ferrari', 'Mercedes', 'Tesla', 'VW'];

for (let i = 0; i < cars.length; i++) {

    console.log(cars[i])
}

for (let car of cars) {
    //console.log(car);
}
cars.forEach(function(car, index) {
    console.log(car);
    console.log(index);
});

let index = 0;

while (index < 10) {
    console.log("index é maior que 10!");
     index = index + 1;
    index++;
}
const person={

    name: 'jason',
    age: "20"
}

for (property in person) {
    console.log(person[property]);
}


 