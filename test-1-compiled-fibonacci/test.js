const fibonacciJS = (integer) => {
  if (integer <= 1) return 1
  return fibonacciJS(integer - 1) + fibonacciJS(integer - 2)
}

// fetch('/test.wasm')
//   .then(res => {
//     return res.arrayBuffer()
//   }).then(buffer => {
//     return WebAssembly.instantiate(buffer)
//   }).then(({instance, module}) => {
//     console.log(instance)
//     console.log(module)
//     console.log(instance.exports.add(3, 4))
//     console.log(instance.exports.fibonacci(3))
//   })

//! This is the same thing as the code above, but simpler and optimized
WebAssembly.instantiateStreaming(fetch('/test.wasm')).then(({ instance, module }) => {
  const exported = instance.exports
  console.log('[ instance ]', instance)
  console.log('[ module ]', module)
  console.log(exported.add(1, 5))

  // Time measurement JS x WASM
  console.time('fibonacci WASM')
  console.log(exported.fibonacci(24))
  console.timeEnd('fibonacci WASM')

  console.time('fibonacci JS')
  console.log(fibonacciJS(24))
  console.timeEnd('fibonacci JS')
})
