let currentValue = '';

function appendToDisplay(value) {
    currentValue += value;
    document.getElementById('display').value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(currentValue);
        document.getElementById('display').value = result;
        currentValue = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        const number = parseFloat(currentValue);
        if (!isNaN(number)) {
            const result = Math.sqrt(number);
            document.getElementById('display').value = result;
            currentValue = '';
        } else {
            throw new Error('Invalid input');
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
