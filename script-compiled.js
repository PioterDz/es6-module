'use strict';

// Pierwsze zadanie

var firstWord = ['Hello'];
var secondWord = ['World'];
var arrayOfWords = [].concat(firstWord, secondWord);

arrayOfWords.forEach(function (elem) {
  return console.log(elem);
});

// Drugie zadanie

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

// Trzecie zadanie

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (prev, curr) {
    return prev + curr;
  }) / args.length;
};

// Czwarte zadanie

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

// Piąte zadanie 

var weirdArray = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = weirdArray[2],
    lastName = weirdArray[4];


console.log(firstName, lastName);
