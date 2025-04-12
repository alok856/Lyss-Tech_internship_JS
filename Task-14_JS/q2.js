function diffWith13(num) {
    if (num > 13) {
      return 2 * Math.abs(num - 13);
    } else {
      return 13 - num;
    }
  }
  
  let result2 = diffWith13(20);
  document.getElementById("q2").innerText = "Input: 20\nOutput: " + result2;  