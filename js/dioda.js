const vSource = document.getElementById('v-source');
const ledV = document.getElementById('led-v');
const iLed = document.getElementById('i-led');
const rResult = document.getElementById('r-result');

function calculateResistor() {
    const vs = parseFloat(vSource.value);
    const vl = parseFloat(ledV.value);
    const il = parseFloat(iLed.value) / 1000;

    if (vs > vl && il > 0) {
        const resistance = (vs - vl) / il;
        rResult.innerText = Math.ceil(resistance) + " Ω";
    } else {
        rResult.innerText = "Greška: Unesite podatke ispravno";
    }
}

// Add listeners to all inputs
[vSource, ledV, iLed].forEach(input => {
    input.addEventListener('input', calculateResistor);
});


const numInputs = document.querySelectorAll('.calculator-card input[type="number"].dynamic');

numInputs.forEach((element) => element.addEventListener('input', function() {
    const len = this.value.length;
    
    const newWidth = Math.max(len, 4);
    
    this.style.width = (newWidth + 1) + 'ch';
}));

// Run once on load to set initial width
numInput.dispatchEvent(new Event('input'));