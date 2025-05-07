
const display = document.getElementById("display");
const keyName = document.getElementById("keyName");
const keyCode = document.getElementById("keyCode");

document.addEventListener("keydown", (e) => {
  display.textContent = e.keyCode;
  keyName.textContent = e.key === " " ? "Space" : e.key;
  keyCode.textContent = e.keyCode;
});
