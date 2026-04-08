/**
 * Lotto Number Generator
 * Generates 5 sets of 6 unique numbers (1-45)
 */

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const resultsContainer = document.getElementById('resultsContainer');

  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const getBallColorClass = (num) => {
    if (num <= 10) return 'color-1';
    if (num <= 20) return 'color-2';
    if (num <= 30) return 'color-3';
    if (num <= 40) return 'color-4';
    return 'color-5';
  };

  const displayNumbers = () => {
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Generate 5 sets
    for (let i = 0; i < 5; i++) {
      const lottoSet = generateLottoNumbers();
      const row = document.createElement('div');
      row.className = 'lotto-row';
      row.style.animationDelay = `${i * 0.1}s`;

      lottoSet.forEach(num => {
        const ball = document.createElement('div');
        ball.className = `ball ${getBallColorClass(num)}`;
        ball.textContent = num;
        row.appendChild(ball);
      });

      resultsContainer.appendChild(row);
    }
  };

  generateBtn.addEventListener('click', () => {
    // Add a little feedback effect on the button
    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true;

    setTimeout(() => {
      displayNumbers();
      generateBtn.textContent = 'Generate My Lucky Numbers';
      generateBtn.disabled = false;
    }, 300);
  });
});
