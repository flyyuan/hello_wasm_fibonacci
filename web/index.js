const fibonacci = import("./node_modules/@bennyshi/hello-wasm-fibonacci/hello_wasm_fibonacci.js");

fibonacci.then(fibonacci => {
  const a = fibonacci.get_fibonacci(10)
  console.log(a)
});