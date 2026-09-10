const resultEl = document.getElementById('result');
const minEl = document.getElementById('min');
const maxEl = document.getElementById('max');
const btn = document.getElementById('btn');

function generate() {
const min = parseInt(minEl.value, 10);
const max = parseInt(maxEl.value, 10);

if (isNaN(min) || isNaN(max)) {
resultEl.textContent = 'Enter min and max';
return;
}

let minValue = min;
let maxValue = max;

if (minValue > maxValue) {
    [minValue, maxValue] = [maxValue, minValue];
    minEl.value = minValue;
    maxEl.value = maxValue;
}

  const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

resultEl.textContent = randomNum;
resultEl.style.transform = 'scale(1.2)';

setTimeout(() => {
    resultEl.style.transform = 'scale(1)';
}, 100);
}

btn.addEventListener('click', generate);
document.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
    generate();
}
});