function convertTemp() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let result;

    switch (inputUnit) {
        case 'celsius': result = inputValue;
                         break;
        case 'fahrenheit': result = (inputValue - 32) * 5/9;
                           break;
        case 'kelvin': result = inputValue - 273.15;
                      break;
    }
    switch (outputUnit) {
        case 'celsius':
            break;
        case 'fahrenheit':
            result = (result * 9/5) + 32;
            break;
        case 'kelvin':
            result = result + 273.15;
            break;
    }

    document.getElementById('outputValue').value = result.toFixed(2);
}