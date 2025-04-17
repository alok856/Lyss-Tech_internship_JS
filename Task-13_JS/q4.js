function getByteLength(str) {
    return new Blob([str]).size;
  }
  
  let input = "Alok Kumar";
  document.getElementById('outputQ4').innerText = `Byte length of "${input}": ${getByteLength(input)}`;  