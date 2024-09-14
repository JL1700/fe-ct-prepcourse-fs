function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados =["Enero","Marzo","Noviembre"]
  const mesesEncontrados = []
 
  for (const mes of array) {
    if (mesesBuscados.incluides(mes)){
      mesesEncontrados.push(mes);
    }
  }
  if (mesesEncontrados.length === mesesBuscados.length){
    return mesesEncontrados;
  }else {
    return "No se encontraron los meses perdidos";
  }
}

module.exports = mesesDelAño;
