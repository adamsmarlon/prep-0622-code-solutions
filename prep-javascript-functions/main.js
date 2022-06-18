function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('Jimmy');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(' sumTimesFive', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('productiveDividedByFive:', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var sumSubtractByTwo = subtractTwoNumbers(22 - 7);
console.log('sumSubtractByTwo', sumSubtractByTwo);

function getCircleCircumference(radius) {
  return radius;
}

var radius = getCircleCircumference(5);
console.log('radius:', radius);

function getFullName(firstName, lastname) {
  return fullName('Marlon' + '' + 'Adams');
}

var fullName = 'Marlon + Adams';
console.log(getFullName);

function cube(number) {
  return cube(5);
}
var printCube = cube(5);
console.log('printCube:', printCube);
