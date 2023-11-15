
/**
 * Crear carta
 * @param {String} carta se necesita una carta Ejemplo "AC"
 * @returns {HTMLImageElement} imagen de retorno 
 */
export const crearCartaHtml = ( carta ) =>{

    if(!carta) throw new Error('Se necesita una carta');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;

}