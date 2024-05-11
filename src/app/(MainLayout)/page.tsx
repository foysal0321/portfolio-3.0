import HomeContext from "@/components/Layout/HomeContext";
import ProfileContext from "@/components/Layout/ProfileContext";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <div className=" bg-[#26284d]">
       <ProfileContext />
      </div>
      <div className="min-w-fit">
        <HomeContext />
      </div>
    </div>
  );
}
