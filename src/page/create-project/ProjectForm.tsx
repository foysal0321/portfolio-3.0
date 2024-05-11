"use client"

import Input from "@/ui/Input";
import { FieldValues, useForm } from "react-hook-form"

export default function ProjectForm() {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data: any) => {
        console.log(data);
        
    }

  return (
    <div className="">
    <h2 className="text-3xl py-6 font-bold">Create Project</h2>
    
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-wrap gap-5">

      <div className="">
      <Input type='text' label='Name' register={register} name='name' />
      <Input type='text' label='Description' register={register} name='description' />
      <Input type='text' label='Features (1)' register={register} name='features1' />
      <Input type='text' label='Features (2)' register={register} name='features2' />
      <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />

      </div>

      <div className="">  
         <Input type='text' label='Technologies' register={register} name='technology' />
      <Input type='text' label='Live project URL' register={register} name='liveurl' />
      <Input type='text' label='Client side code' register={register} name='clienturl' />
      <Input type='text' label='Server side code' register={register} name='serverurl' />
      
      </div>
      
      </div>
      <button className="btn mt-8 btn-primary  w-80 md:w-[500px] ">Sumit</button>
    </form>
  </div>
  )
}
