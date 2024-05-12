"use client"
import { addSkill } from "@/api/skillApi";
import Input from "@/ui/Input"
import { useForm } from "react-hook-form";


function SkillForm() {

    const { register, handleSubmit, reset } = useForm()

    const submit = (data: any) => {
        addSkill(data)
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    alert('Successfully!')
                }
            })
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input type='text' label='Technology' register={register} name='name' />
            <button className="btn mt-8 btn-primary w-80 md:w-[500px] ">Sumit</button>
        </form>
    )
}
export default SkillForm