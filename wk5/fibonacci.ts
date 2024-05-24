//fibonnacci series using recursion
function fibonacci(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));