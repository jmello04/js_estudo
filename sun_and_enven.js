const numbers = [1, 2, 3, 4, 4];

const numbersMultipliedByTwo = numbers.map(function(number) {

  return number * 2;

});

//console.log(numbers);
//console.log(numbersMultipliedByTwo);

const ages = [10, 15, 19, 55, 81];

//const evenages = ages.filter(function(age){

    //return age % 2 === 0;
//});
//console.log(evenages);

const sunOFAges = ages.reduce(function(age, accumulator){ 

return accumulator + age

},0);

console.log(sunOFAges);