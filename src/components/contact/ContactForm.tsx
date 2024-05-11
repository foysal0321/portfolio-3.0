"use client"
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "@formspree/react";
import helloimg from '@/assets/images/icon-wave.png'
import Image from 'next/image'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("moqbgpgb");
    if (state.succeeded) {
      return alert("Successfuly Submited");
    }

  return (
    <div>
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className="modal-box">
        <div className="avatar flex flex-wrap justify-between items-center ">
          <div className="w-12 mt-4 rounded-full  bg-[#8EFDB0]">
            <Image src={helloimg} alt='hello' />
          </div>
          <label htmlFor="my_modal_6" className="modal-action btn">
            ✕
          </label>
        </div>

        <form onSubmit={handleSubmit}  method="dialog" className="">
          <div className="p-0 mt-2 md:p-3">
            <div className=" form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold py-2">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input input-bordered w-72 md:w-[420px] h-[50px] "
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold py-2">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered w-72 md:w-[420px] h-[50px]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold py-2">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-72 md:w-[420px] h-[110px]"
                placeholder="message"
                required
              ></textarea>
            </div>
            <div className="form-control py-4 flex flex-wrap">
              <label className="cursor-pointer ">
                <input type="checkbox" className="checkbox" />
                <span className="label-text pl-2 md:pl-4 absolute mt-1 text-gray-500 text-xs md:text-sm">
                  Agree to me a nice and kind person!
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-outline btn-md btn-error rounded-full w-72 md:w-[420px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
