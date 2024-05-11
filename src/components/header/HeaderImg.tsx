import myimage from '@/assets/images/faysal5.jpg'
import Image from 'next/image'


export default function HeaderImg() {
  return (
    <div id=''>
    <Image className='absolut w-full h-[105vh] object-cover ' src= {myimage} alt="myimage" />
  </div> 
  )
}
