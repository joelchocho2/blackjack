
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML=(carta)=>{
    if(!carta) throw new Error('Carta obligatoria');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta
}