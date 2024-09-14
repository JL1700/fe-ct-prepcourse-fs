function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = new Set();
  for (const numero of numeros) {
    if (elementosVistos.has(numero)) {
      return numero;
    }
    elementosVistos.add(numero);
  }
  return null;

}

module.exports = encontrarElementoRepetido;