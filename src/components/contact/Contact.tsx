/* eslint-disable react/no-unescaped-entities */
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin } from 'lucide-react';


export default function Contact() {
  return (
    <div className=' bg-[#232121]'>
      <div className="py-24 max-w-[1380px] mx-auto p-7 tex-[#fff]" id="contact">
        <div className='py-4'>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-200 ">Get in touch</h1>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 py-2'>
          <div className=''>
            <h1 className="text-[18px] py-3" data-aos="fade-out">Need a project, want to collaborate, or have questions?  Fill<br /> out the form, and I'll get back to you within 24 hours.</h1>
            <div className='flex py-4 mt-4 text-gray-300'>
              <Phone className='' />
              <p className='text-xl mx-4 font-semibold tracking-wide'> +8801869676921</p>
            </div>
            <div className='flex py-4 text-gray-300'>
              <Mail />
              <p className='text-xl mx-4 font-semibold  tracking-wide'> foysalx4@gmail.com</p>
            </div>
            <div className='flex py-4 text-gray-300'>
              <MapPin />
              <p className='text-xl mx-4 font-semibold  tracking-wide'> Cumilla, Dhaka, Bangladesh </p>
              <p></p>
            </div>
          </div>
          <div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

