const container = document.getElementById("container");

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i <= 100; i++) {
    const box = document.createElement("div");
    box.textContent = i;
    box.classList.add("number-box");

    if (isPrime(i)) {
      box.classList.add("prime");
    } else if (i % 2 === 0) {
      box.classList.add("even");
    } else {
      box.classList.add("odd");
    }

    container.appendChild(box);
  }