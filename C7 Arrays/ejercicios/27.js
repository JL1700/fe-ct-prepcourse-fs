function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(' ');
}
let lesly = ['nada', 'hiere', 'a', 'chao', 'yo', 'soy', 'invisible.', 'copiame', 'https://www.tiktok.com/@prometeuus88/video/7325619277912935685?_t=8phkS8HZ2rl&_r=1', '😎😎😎'];
console.log(dePalabrasAFrase(lesly));
module.exports = dePalabrasAFrase;
