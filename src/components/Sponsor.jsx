import './Sponsor.css';
import amd from '../assets/sponsors/amd.webp';
import intel from '../assets/sponsors/intel.webp';
import asus from '../assets/sponsors/asus.webp';
import kingston from '../assets/sponsors/kingston.webp';

const Sponsor = () => {
    return (
        <div className='containerS'>
            
        <div>
            <a href="https://www.amd.com/es.html"><img className='sponsor' src={amd} alt="sponsor" title='AMD' /></a>
        </div>

        <div>
            <a href="https://www.intel.la/content/www/xl/es/homepage.html"><img className='sponsor' src={intel} alt="sponsor" title='INTEL' /></a>
        </div>

        <div>
            <a href="https://www.asus.com/latin/"><img className='sponsor' src={asus} alt="sponsor" title='ASUS' /></a>
        </div>

        <div>
            <a href="https://www.kingston.com/es"><img className='sponsor' src={kingston} alt="sponsor" title='KINGSTON' /></a>
        </div>

        </div>        
    );
};

export default Sponsor;