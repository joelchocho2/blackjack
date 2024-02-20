
/**
 * obtiene el valor numerico de la carta
 * @param {String} carta carta que sale del mazo 
 * @returns valor numerico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
