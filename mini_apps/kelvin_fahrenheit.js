var kelvinTemp = 301 //temperature base conversion for Kelvin
var celciusTemp = kelvinTemp - 273.15 //base temp conversiont Kelvin to C
var fahrenheitTemp = (celciusTemp * 1.8) + 32 // convert C to F

fahrenheitTemp = Math.floor(fahrenheitTemp) 

console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.')
