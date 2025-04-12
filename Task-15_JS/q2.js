let arr2a = [1, 2, 3];
let arr2b = [4, 5, 6];
let combinedArr = arr2a.concat(arr2b);

document.getElementById("q2").innerText =
  "Array 1: " + arr2a.join(", ") +
  "\nArray 2: " + arr2b.join(", ") +
  "\nConcatenated Array: " + combinedArr.join(", ");