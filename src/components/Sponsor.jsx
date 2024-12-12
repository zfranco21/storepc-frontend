import './Sponsor.css';
import amd from '../assets/sponsors/amd.webp';
import intel from '../assets/sponsors/intel.webp';
import asus from '../assets/sponsors/asus.webp';
import kingstone from '../assets/sponsors/kingstone.webp';

const Sponsor = () => {
    return (
        <div className='containerS'>
            
        <div>
            <img className='sponsor' src={amd} alt="sponsor" title='AMD' />
        </div>

        <div>
            <img className='sponsor' src={intel} alt="sponsor" title='INTEL' />
        </div>

        <div>
            <img className='sponsor' src={asus} alt="sponsor" title='ASUS' />
        </div>

        <div>
            <img className='sponsor' src={kingstone} alt="sponsor" title='KINGSTONE' />
        </div>

        </div>        
    );
};

export default Sponsor;