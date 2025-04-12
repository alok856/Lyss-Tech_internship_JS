let size = 16;

function changeFontSize(action) {
  if (action === "increase") size += 2;
  else if (action === "decrease") size -= 2;

  document.getElementById("fontText").style.fontSize = size + "px";
}