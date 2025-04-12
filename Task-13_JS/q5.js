function roundToDigits(num, digits) {
    return Number(num.toFixed(digits));
  }
  
  let number = 3.1415926;
  let rounded = roundToDigits(number, 2);
  document.getElementById('outputQ5').innerText = `Rounded number: ${rounded}`;  