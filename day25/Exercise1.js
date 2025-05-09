const populationData = [
      { country: "China", population: 1444216107 },
      { country: "India", population: 1393409038 },
      { country: "USA", population: 332915073 },
      { country: "Indonesia", population: 276361783 },
      { country: "Pakistan", population: 225199937 },
      { country: "Brazil", population: 213993437 },
      { country: "Nigeria", population: 211400708 },
      { country: "Bangladesh", population: 166303498 },
      { country: "Russia", population: 145912025 },
      { country: "Mexico", population: 130262216 }
    ];

    const languageData = [
      { language: "English", speakers: 1132000000 },
      { language: "Mandarin Chinese", speakers: 1117000000 },
      { language: "Hindi", speakers: 602000000 },
      { language: "Spanish", speakers: 559000000 },
      { language: "French", speakers: 274000000 },
      { language: "Modern Standard Arabic", speakers: 274000000 },
      { language: "Bengali", speakers: 273000000 },
      { language: "Russian", speakers: 258000000 },
      { language: "Portuguese", speakers: 258000000 },
      { language: "Urdu", speakers: 230000000 }
    ];

    function renderChart(data, labelKey, valueKey) {
      const container = document.getElementById('chart');
      container.innerHTML = '';

      const max = Math.max(...data.map(item => item[valueKey]));

      data.forEach(item => {
        const bar = document.createElement('div');
        bar.className = 'bar';

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = item[labelKey];

        const valueBar = document.createElement('div');
        valueBar.className = 'bar-value';
        valueBar.style.width = `${(item[valueKey] / max) * 100}%`;
        valueBar.textContent = item[valueKey].toLocaleString();

        bar.appendChild(label);
        bar.appendChild(valueBar);
        container.appendChild(bar);
      });
    }

    function showPopulation() {
      renderChart(populationData, 'country', 'population');
    }

    function showLanguages() {
      renderChart(languageData, 'language', 'speakers');
    }

    // Load population chart by default
    window.onload = showPopulation;