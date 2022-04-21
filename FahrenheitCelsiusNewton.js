const kelvin = 5636; // Previsão  é de 293 kelvin, variavél const/ Não iremos reatribui-la.
const celsius = kelvin - 273; // sutraimos celsius de kevin.

let fahrenheit = celsius * (9 / 5) + 32; // convertendo celsius para  fahrenheit.
fahrenheit = Math.floor(fahrenheit); //.floor()método do objeto Math integrado para arredondar para baixo a temperatura Fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
