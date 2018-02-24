const app = "I don't do much."

function destructivelyAppendKitten(entry) {
  //access an array, add an element to the end and return mutated new array
  
  kittens.push(entry)
  return kittens
}

function destructivelyPrependKitten(entry) {
  //acces kittens, add an element to beginning and return the mutated kittens array
  
  kittens.unshift(entry)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.
}