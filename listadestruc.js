const person = {
    firstname: 'João',
    lastname: 'Mello',
    age: '21',
    hobbies: ['futebol', 'formula 1', 'kart', 'valorant'],
    dog: {
        name: 'Simba',
        age: 4,
    }};

//declarando uma por uma
//const firstname = person.firstname;
//const lastname = person.lastname;
//const age = person.age;
//const hobbies = person.hobbies;

// Usando destructuring mais prático e mais simples onde declara todas com uma única linha
const { firstname: primeiroNome, lastname, age, hobbies, dog: {name} } = person;

const read = hobbies[2];

console.log(primeiroNome);
console.log(lastname);
console.log(age);
console.log(hobbies);
console.log(read);

//person.dog = "simba";
console.log(person);
console.log(dog);