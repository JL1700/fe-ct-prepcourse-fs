
function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
 if (typeof letra !== 'string' || letra.length !== 1) {
  return "Dato incorrecto";

  
 } 
 const vocales = "aeiou"
 return vocales.includes(letra) ? "Es vocal" : "Dato Incorrecto"
}

module.exports = esVocal;
