const app = "I don't do much."

function destructivelyAppendKitten(entry) {
  //access an array, add an element to the end and return mutated new array
  
  kittens.push(entry)
  return kittens
}

function desstructivelyPrependKitten(entry) {
  //acces kittens, add an element to beginning and return the mutated kittens array
  
  kittens.unshift(entry)
  return kittens
}