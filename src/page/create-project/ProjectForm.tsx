"use client"

import Input from "@/ui/Input";
import { FieldValues, useForm } from "react-hook-form"

export default function ProjectForm() {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data: any) => {
        console.log(data);
        
    }

  return (
    <div className="py-20  ">
    <h2 className="text-3xl py-6 font-bold">Create Project</h2>
    
    <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-wrap gap-5">
        <div className="w-[400px] bg-gray-900">
      <Input type='text' label='Name' register={register} name='name' />
      <Input type='text' label='Description' register={register} name='description' />
      <Input type='text' label='Features (1)' register={register} name='features1' />
      <Input type='text' label='Features (2)' register={register} name='features2' />
      <Input type='text' label='Technologys' register={register} name='technology' />
      </div>
      <div className="">
      
      <Input type='text' label='Live Project URL' register={register} name='technology' />
      <Input type='text' label='Client side code' register={register} name='technology' />
      <Input type='text' label='Server side code' register={register} name='technology' />
      <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />
</div>
      
      </div>
      <button className="btn mt-8 btn-primary  w-80 md:w-[500px] ">Sumit</button>
    </form>
  </div>
  )
}
