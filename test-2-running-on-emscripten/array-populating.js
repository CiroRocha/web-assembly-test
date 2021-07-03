const newArray = []
const arrSize = 10000000

console.time('Create array')
for (let i = 0; i < arrSize; i++) {
  newArray[i] = Math.floor(Math.random() * arrSize)
}
console.timeEnd('Create array')

console.time('Sort array')
newArray.sort((a, b) => a - b)
console.timeEnd('Sort array')
