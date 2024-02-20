import { crearCartaHTML, pedirCarta,valorCarta } from "./";
/**
 * turno computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {HTMLElement}puntosHTML elemento html para mostrar los puntos
 * @param {HTMLElement}divCartasComputadora elemento HTML para mostrar cartas
 * @param {Array<String>} deck mazo
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck=[] ) => {
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');

    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
    
        const imgCarta=crearCartaHTML(carta);
       //crear carta
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}