var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  const animal = 'cat';
  return myAnimal()
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
var theFunk = funkyFunction()()
