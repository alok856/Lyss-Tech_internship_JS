const cube = new Function("n", "return n * n * n;");

let input = 4;
let cubeResult = cube(input);

document.getElementById("q5").innerText = `Input: ${input}\nCube: ${cubeResult}`;