"use client"
import { useForm } from "@formspree/react";
import { redirect } from 'next/navigation'


export default function ContactForm() {


  // const [state, handleSubmit] = useForm("moqbgpgb");
  // if (state.succeeded) {
  //   redirect('/')    
  // }

  return (
    <div>
      <div className="">
        <div className="">
          <form action="https://formspree.io/f/moqbgpgb"
            method="POST" className="">
            <div className="p-0 md:p-3">
              <div className=" form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold py-1 text-[16px] text-gray-300">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your fullname"
                  required
                  className="input input-bordered w-72 md:w-[520px] h-[60px] bg-[#232121]"
                />
              </div>
              <div className="form-control w-full max-w-xs py-4">
                <label className="label">
                  <span className="label-text text-[16px] font-semibold py-1 text-gray-300">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="input input-bordered w-72 md:w-[520px] h-[60px] bg-[#232121]"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[17px] font-semibold py-1 text-gray-300">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered w-72 md:w-[520px] h-[150px] bg-[#232121]"
                  placeholder="Enter your message here.."
                  required
                ></textarea>
              </div>

              <button
                type="submit"

                className="btn btn-outline btn-md rounded-full w-72 md:w-[520px] mt-8  text-[16px]"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

