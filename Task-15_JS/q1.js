let arr1 = [4, 2, 8, 1, 9];
let sortedArr = arr1.slice().sort((a, b) => a - b); // Copy then sort

document.getElementById("q1").innerText =
  "Original Array: " + arr1.join(", ") + "\nSorted Array: " + sortedArr.join(", ");