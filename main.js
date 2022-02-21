// Kelvin is a constant variable because it doesn't change
const kelvin = 293;
// We have to subtract 273 from celsius to get kelvin 
const celsius = kelvin - 273;
//We have to multiply celsius and add to get fahrenheit.
let fahrenheit = celsius * (9/5) + 32; 
// We have to round down the fahrenheit temperature.
newton = Math.floor(fahrenheit);
// we have rounded down, now we need string interpolation.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
