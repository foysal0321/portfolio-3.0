import HomeContext from "@/components/Layout/HomeContext";
import ProfileContext from "@/components/Layout/ProfileContext";
import myimage2 from '@/assets/images/profile-pic (4).png'
import Image from 'next/image'


export default function HomePage() {
  return (
    <div>
      <div className="max-w-full flex flex-wrap justify-around bg-[#232121]">
        <div className="mt-28">
          <ProfileContext />
        </div>
        <div className="mt-24">
          <Image className='mt-12 object-cover h-[630px]' src={myimage2} width={580} height={550} alt="myimage" />
        </div>
      </div>
      <HomeContext />
    </div>
  );
}