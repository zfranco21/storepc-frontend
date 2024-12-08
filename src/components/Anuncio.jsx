import './Anuncio.css';
import anuncio from '../assets/anuncio.webp';

function Anuncio() {
    return (
        <div className="AnuncioImg">
            <img src={anuncio} alt='Anuncio Promocional' title='Promoción'></img>
        </div>
    );
}

export default Anuncio;
