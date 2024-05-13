"use client"
import { addBlog } from '@/api/blogApi';
import Input from '@/ui/Input';
import JoditEditor from 'jodit-react';

import { useRef, useState } from "react"
import { useForm } from "react-hook-form"


export default function BlogPage() {

  const editor = useRef(null);
  const [content, setContent] = useState('');

  const { register, handleSubmit, reset } = useForm()
  const imgHostUrl = `https://api.imgbb.com/1/upload?key=70669c87852630ac66a79bbcc87d5718`;

  const submit = (data: any) => {

    const formData = new FormData()
    formData.append("image", data.image[0])

    fetch(imgHostUrl, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData.data.url
        const { title} = data
        const projectData = {
          title,
          description: content, 
          image: imgUrl
        };
        
        addBlog(projectData)
          .then(res => res.json())
          .then(data => {
            if(data?.acknowledged){
              alert('Successfully!')           
            }
          })
          reset()    
      })

  }

 


  return (
    <div>
      <div className="">
        Create a new blog
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-wrap gap-6">
          <div className="">
            <Input type='text' label='Title' register={register} name='title' />
           
            <input {...register('image')} type="file" className="file-input file-input-bordered w-80 md:w-[500px] mt-2" /> <br />
          </div>
         
        </div>
        <JoditEditor
        ref={editor}
        value={content}
        onChange={content => setContent(content)}
      />

        <button className="btn mt-8 btn-primary  w-80 md:w-[500px] ">Sumit</button>
      </form>
      


    </div>
  )
}
