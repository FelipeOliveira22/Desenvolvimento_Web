const Temperatura = () => {
    const celsiusParaFahrenheit = (c) => {
        return (c * 9/5) + 32;
    }

    const fahrenheitParaCelsius = (f) => {
        return (f - 32) * 5/9;
    }

    const kelvin = (k) => {
        const celsius = k - 273;
        const fahrenheit = (celsius * 9/5) + 32;
        return { celsius, fahrenheit };
    }

    const temperaturaC = 10;
    const temperaturaF = 20;
    const temperaturaK = 30;

    const valorCelsiusParaFahrenheit = celsiusParaFahrenheit(temperaturaC);
    const valorFahrenheitParaCelsius = fahrenheitParaCelsius(temperaturaF);
    const valorKelvin = kelvin(temperaturaK);

    return (
        <div>
            <h2>Conversão de Temperaturas</h2>
            <p>{temperaturaC}°C em Fahrenheit é {valorCelsiusParaFahrenheit}°F</p>
            <p>{temperaturaF}°F em Celsius é {valorFahrenheitParaCelsius}°C</p>
            <p>{temperaturaK}°K em Celsius é {valorKelvin.celsius}°C e em Fahrenheit é {valorKelvin.fahrenheit}°F</p>
        </div>
    );
}
    
export default Temperatura;
