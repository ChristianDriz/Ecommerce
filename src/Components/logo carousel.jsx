import Data from '../datas/data.json'
import { Icon } from '@iconify/react'
import Marquee from 'react-fast-marquee'

const brands = Data.brands;

const Carousel = () => {

    return (
        <div className='py-6 '>
            <Marquee 
                className='bg-white flex items-center py-8 shadow-md' 
                speed={100} 
                gradient={true} 
                gradientColor='#F5F5F5' 
                autoFill={true}
            >
                {brands.map(data => (
                    <Icon icon={data.logo} className='h-14 w-14 mx-8'/>
                ))}
            </Marquee>
            
        </div>
    )
}
 
export default Carousel