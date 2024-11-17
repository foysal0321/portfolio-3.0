import HomeContext from "@/components/Layout/HomeContext";
import ProfileContext from "@/components/Layout/ProfileContext";
import myimage2 from '@/assets/images/profile-pic (4).png'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-[#232121]">
      <div className="max-w-[1380px] mx-auto ">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20'>
        <div className="mt-28">
          <ProfileContext />
        </div>
        <div className="">
          <Image className='mt-12 object-cover h-[700px]' src={myimage2} width={600} height={620} alt="myimage" />
        </div>
      </div>
      </div>
      <HomeContext />
    </div>
  );
}