function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function generateNumbers() {
    const input = document.getElementById("userInput").value.trim();
    const errorDiv = document.getElementById("error");
    const container = document.getElementById("number-container");
    container.innerHTML = "";
    errorDiv.textContent = "";

    if (!/^\d+$/.test(input)) {
      errorDiv.textContent = "Please enter a valid positive number.";
      return;
    }

    const limit = parseInt(input);

    for (let i = 0; i <= limit; i++) {
      const box = document.createElement("div");
      box.className = "number-box";
      box.textContent = i;

      if (isPrime(i)) {
        box.classList.add("prime");
      } else if (i % 2 === 0) {
        box.classList.add("even");
      } else {
        box.classList.add("odd");
      }

      container.appendChild(box);
    }
  }