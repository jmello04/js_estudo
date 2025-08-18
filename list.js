const names = ["Felipe", "João", "Júlia", 10, false];

const joao = names[1];

//console.log(joao);

//names.push('Pedro'); //adicionar elemento no inicio de uma lista
//console.log(names);
names.unshift("Fernanda");//adicionar elemento ao final de uma lista
console.log(names);
//retira o ultimo elemento de uma lista
names.pop();
names.pop();
names.pop();
//substituir algum elemento da lista por outro 
names[3] = 'Gustavo';
//localizar algum elemento da lista 
console.log(names.indexOf('Felipe'));
const sortednames = names.sort();

const namesIsarray = Array.isArray(names);


console.log(names.length);
console.log(sortednames);
console.log(namesIsarray);