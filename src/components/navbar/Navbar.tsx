import logo from '@/assets/images/icon-working.png'
import ButtonLink from '@/ui/ButtonLink';
import Image from 'next/image'


const menuItems = ["About", "Projects", "Blog", "Contact"];

export default function Navbar() {


  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="">
          <div className="avatar ">
            <div className=" w-16 h-16 rounded-full cursor-pointer fixed bg-[#26284d] z-20">
              <Image className="" src={logo} alt='logo' />
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu-sm menu p-6 w-72 md:w-96 min-h-full bg-slate-50 text-base-content">
          <div className="mt-48">
            {menuItems.map((menu, inx) => (
              <li key={inx} className="p-6">
                <ButtonLink context={menu}   >
                  <p className="text-semibold text-lg">{menu}</p>
                </ButtonLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}
