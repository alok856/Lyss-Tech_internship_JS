function sumOfMultiples(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  document.getElementById("q4").innerText = "Sum of multiples of 3 and 5 below 1000: " + sumOfMultiples(1000);  