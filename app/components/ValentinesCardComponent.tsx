'use client'


import Image from 'next/image'
import {motion} from 'framer-motion'
import { greatVibes } from '../styles/fonts';
interface ValentinesCardProps {
  backgroundColor?: string;
  text: string;
  image?: string;
  headline: string;
  year: number;
}
const ValentinesCardComponent = ({backgroundColor, text, image, headline, year}: ValentinesCardProps) => {
  return (
    <div className={`text-black justify-center flex flex-col h-screen ${backgroundColor || 'bg-pink-100'}`}>
          
          <div className='flex flex-col md:flex-row space-y-12  justify-around items-center w-full '>
            <div className='text-center w-1/3 items-center space-y-12'>
                <div className='font-bold text-5xl'>Valentines {year}</div>
                <span>{headline}</span>
            </div>
         

          <div className='w-1/2 text-left space-y-20 flex flex-col items-center'>
            <span className={`text-center ${greatVibes.className} text-3xl`}>{text}</span>
            {image && <motion.div initial={{ y: 10, filter: 'blur(10px)' }}
                animate={{ y: 0, filter: 'blur(0px)' }} transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    <Image className='rounded-lg' width={500} height={500} src={`/images/${image}`} alt="Valentine's card image" />
                    </motion.div>
            }

            
          </div>
          </div>
          
         
       
      
        
    </div>
  )
}

export default ValentinesCardComponent