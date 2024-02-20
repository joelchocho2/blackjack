
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck RECIBE EL DECK CREADO
 * @returns UNA CARTA
 */
export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}