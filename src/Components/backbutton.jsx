import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react'

const Back = () => {

    const history = useNavigate();
    const goBack = () => {
        history(-1);
    }

    return (  
        <button onClick={goBack}>
            <Icon icon="iconamoon:arrow-left-2" className='w-6 h-6'/>
        </button>
      
    );
}
 
export default Back;