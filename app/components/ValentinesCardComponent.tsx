import Image from 'next/image'

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
          
          <div className='flex flex-row justify-around items-center w-full '>
            <div className='text-center w-1/6 items-center space-y-12'>
                <div className='font-bold text-5xl'>{year}</div>
                <span>{headline}</span>
            </div>
         

          <div className='w-1/2 text-left space-y-20 flex flex-col items-center'>
            <span className='text-center'>{text}</span>
            {image && <Image className='rounded-lg' width={500} height={500} src={`/images/${image}`} alt="Valentine's card image" />}
          </div>
          
          </div>
          
         
       
      
        
    </div>
  )
}

export default ValentinesCardComponent