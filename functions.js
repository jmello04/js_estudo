function sum (a, b = 10) {
return a + b;
}

const sumArrow = (a, b = 10) => a = b;
const sumValue = sumArrow(2);
console.log(sumValue);