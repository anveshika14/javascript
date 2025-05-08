const gravity = {
    Mercury: 3.7,
    Venus: 8.87,
    Earth: 9.81,
    Moon: 1.62,
    Mars: 3.71,
    Jupiter: 24.79,
    Saturn: 10.44,
    Uranus: 8.69,
    Neptune: 11.15,
    Pluto: 0.62,
  };
  
  function calculateWeight() {
    const mass = parseFloat(document.getElementById("mass").value);
    const planet = document.getElementById("planet").value;
    const result = document.getElementById("result");
    const imageDiv = document.getElementById("planet-img");
  
    if (!mass || !planet) {
      result.innerText = "Please enter a valid mass and select a planet.";
      imageDiv.innerHTML = "";
      return;
    }
  
    const weight = (mass * gravity[planet]).toFixed(2);
    result.innerText = `The weight on ${planet} is ${weight} N`;
  
    imageDiv.innerHTML = `<img src="https://raw.githubusercontent.com/30DaysofJavaScript/30DaysOfJavaScript/main/images/${planet.toLowerCase()}.png" alt="${planet} image">`;
  }
  