function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let indeceAletorio  = Math.floor(Math.random(array) * array.length);
   return array[indeceAletorio];
}

module.exports = obtenerElementoAleatorio;
