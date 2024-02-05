/* Task-1:
Write a function to convert temperature
 from Celsius to Fahrenheit.
 */
 function CelsiusToFahrenheit( Celsius){
    const  Fahrenheit= (Celsius*9/5)+32
    return Fahrenheit
} 
  const temp=CelsiusToFahrenheit(7)
  console.log(temp, 'celsius')


//(0°C × 9/5) + 32 = 32°F
