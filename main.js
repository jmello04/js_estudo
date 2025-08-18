const person = {
  firstname: 'João',
  lastname: 'Mello',
  age: '21',
  hobbies: ['futebol', 'formula 1', 'kart', 'valorant']
};

//declarando uma por uma 
//const firstname = person.firstname;
//const lastname = person.lastname;
//const age = person.age;
//const hobbies = person.hobbies;

// Usando destructuring mais prático e mais simples onde declara todas com uma única linha 
const { firstname, lastname, age, hobbies } = person;

const read = hobbies[2];

console.log(firstname); 
console.log(lastname); 
console.log(age); 
console.log(hobbies); 
console.log(read); 
