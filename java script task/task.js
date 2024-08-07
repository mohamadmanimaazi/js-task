function generateNumbers() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

    if (!isNaN(inputNumber)) {
        for (let i = 1; i <= 10; i++) {
            const nextNumber = inputNumber + i;
            const p = document.createElement('p');
            p.textContent = nextNumber;
            resultDiv.appendChild(p);
        }
    } else {
        resultDiv.textContent = 'Please enter a valid number.';
    }
}

//copilot help me to pair to html file 
