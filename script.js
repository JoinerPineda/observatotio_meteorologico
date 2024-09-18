let temperaturas = [];

function agregarTemperatura() {
    const tempInput = document.getElementById('tempInput').value;
    
    if (isNaN(tempInput) || tempInput === '') {
        alert('Por favor, ingresa un valor numérico válido.');
        return;
    }

    temperaturas.push(parseFloat(tempInput));
    document.getElementById('tempInput').value = ''; 
}

function finalizarRegistro() {
    if (temperaturas.length === 0) {
        alert('No se han ingresado temperaturas.');
        return;
    }

    const tempMax = Math.max(...temperaturas);
    const tempMin = Math.min(...temperaturas);


    const sumTemp = temperaturas.reduce((acc, curr) => acc + curr, 0);
    const promedio = sumTemp / temperaturas.length;

    const tempAboveAverage = temperaturas.filter(temp => temp > promedio);

    document.getElementById('maxTemp').innerHTML = `Temperatura Máxima: ${tempMax} °C`;
    document.getElementById('minTemp').innerHTML = `Temperatura Mínima: ${tempMin} °C`;
    document.getElementById('promedioTemp').innerHTML = `Temperatura Promedio: ${promedio.toFixed(2)} °C`;
    document.getElementById('tempAboveAverage').innerHTML = `Temperaturas por encima del promedio: ${tempAboveAverage.join(', ')} °C`;
}
