const roles = ["Educator", "Instructor", "Motivational Speaker", "Programmer"];
const technologies = ["JAVASCRIPT", "PYTHON", "REDUX", "REACT", "NODE"];

let roleIndex = 0;
let techIndex = 0;

const roleEl = document.getElementById("changing-role");
const techEl = document.getElementById("tech-text");

function updateRole() {
  roleEl.style.transform = "translateY(100%)";
  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
    roleEl.style.transform = "translateY(0)";
  }, 300);
}

function updateTech() {
  techEl.style.transform = "translateY(-100%)";
  setTimeout(() => {
    techIndex = (techIndex + 1) % technologies.length;
    techEl.textContent = technologies[techIndex];
    techEl.style.transform = "translateY(0)";
  }, 300);
}

setInterval(updateRole, 2000);
setInterval(updateTech, 2500);
