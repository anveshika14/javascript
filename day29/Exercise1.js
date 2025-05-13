 const container = document.getElementById('textContainer');

    const fonts = [
      'Arial', 
    
      'Times New Roman',  'Impact'
    ];

    function wrapLetters() {
      const lines = container.children;
      for (let line of lines) {
        const text = line.textContent;
        line.innerHTML = ' '; 
        for (let char of text) {
          const span = document.createElement('span');
          span.className = 'letter';
          span.textContent = char;
          line.appendChild(span);
        }
      }
    }

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }

    function getRandomFont() {
      return fonts[Math.floor(Math.random() * fonts.length)];
    }

    function changeStyles() {
      const letters = document.querySelectorAll('.letter');
      letters.forEach(letter => {
        letter.style.color = getRandomColor();
        letter.style.fontFamily = getRandomFont();
      });
      document.body.style.backgroundColor = getRandomColor();
    }

    wrapLetters();
    changeStyles(); 
    setInterval(changeStyles, 2000);