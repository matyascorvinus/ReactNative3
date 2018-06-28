'use strict'

function generate(testLengthArray) {
  // return testLengthArray.map(elem=>randomObject(elem))//two failures

  return testLengthArray.length < 4 ? testLengthArray.map(elem => randomObject(elem))
    : moreThan4(testLengthArray)
}

//done
function moreThan4(testLengthArray) {
  const others = testLengthArray.length > 4 ? testLengthArray.slice(4, testLengthArray.length) : []
  const obj1 = randomNotFound(testLengthArray[0])
  const obj2 = randomFirstIndex(testLengthArray[1])
  const obj3 = randomMidleIndex(testLengthArray[2])
  const obj4 = randomLastIndex(testLengthArray[3])
  return ([obj1, obj2, obj3, obj4]).concat(others.map(elem => randomObject(elem)))
}

//done
function randomNotFound(length) {
  return {
    input: randomArray([], length).sort((a, b) => a - b),
    target: 100002,
    output: -1
  }
}

//done 
function randomFirstIndex(length) {
  const ans = randomArray([], length).sort((a, b) => a - b)
  return {
    input: ans,
    target: ans[0],
    output: 0
  }
}

//doing
function randomLastIndex(length) {
  const ans = randomArray([], length).sort((a, b) => a - b)
  return {
    input: ans,
    target: ans[ans.length - 1],
    output: ans.length -1 
  }
}

//done
function randomMidleIndex(length) {
  const ans = randomArray([], length).sort((a, b) => a - b)
  return {
    input: ans,
    target: ans[Math.floor(length / 2)],
    output: Math.floor(length / 2)
  }
}

//done
function randomObject(length) {
  const input = randomArray([], length).sort((a, b) => a - b)
  const target = Math.floor(Math.random() * 10000 - 1)
  return {
    input: input,
    target: target,
    output: search(input, target, 0, input.length - 1)
  }
}

//done
function randomArray(prev, length) {
  prev[length - 1] = Math.floor(Math.random() * 10000)
  return length <= 1 ? prev : randomArray(prev, length - 1)
}

//done 
function search(input, target, left, right) {
  const key = parseInt((left + right) / 2)
  return left > right ? -1 : (target < input[key]) ? search(input, target, left, key - 1) : (target == input[key] ? key : search(input, target, key + 1, right))
}

//done

module.exports = generate