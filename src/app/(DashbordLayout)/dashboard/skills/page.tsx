"use client"

import Input from "@/ui/Input";
import { useForm } from "react-hook-form";

export default function SkillPage() {
    const {register, handleSubmit, reset} = useForm()

    const submit = (data: any) => {
        console.log(data);
        
    }

  return (
     <div className="py-20  max-w-[1000px] mx-auto p-5">
    <h2 className="text-3xl py-6 font-bold">Add A Skill</h2>
    
    <form onSubmit={handleSubmit(submit)}>

      <Input type='text' label='Technology' register={register} name='name' />

      <button className="btn mt-8 btn-primary w-80 md:w-[500px] ">Sumit</button>
    </form>
  </div>
  )
}
