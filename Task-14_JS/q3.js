function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }
  
  document.getElementById("q3").innerText = "Fibonacci (10 terms): " + fibonacci(10).join(", ");  