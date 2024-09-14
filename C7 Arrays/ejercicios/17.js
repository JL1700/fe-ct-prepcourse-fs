function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
 return arrayOfNums.reduce((a, b) => a + b, 0)
}

module.exports = agregarNumeros;
