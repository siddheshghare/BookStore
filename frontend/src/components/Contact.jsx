import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = (data) => {
          console.log(data);
          // Add your login logic here
      };
  return (
    <>
      <div className='bg-white'>
      <div className='flex h-screen items-center justify-center bg-white'>
        <div className="w-[600px] ">
          <div className="modal-box  bg-white ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Contact Us</h3>

              <div className='mt-4'>
                <span className='font-semibold mt-2'>Email</span><br />
                <input type="email" placeholder="Enter your Email"
                  className=" bg-white w-80 mt-2 border rounded-md outline-none"
                  {...register("email", { required: "Email is required" })} />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>


              <div className='mt-4'>
                <span className=  ' font-semibold mt-2'>Name</span><br />
                <input type="text" placeholder="Enter your Name"
                  className=" bg-white w-80 mt-2 border rounded-md outline-none"
                  {...register("name", { required: "name is required" })} />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  
              </div>



              <div className='mt-4'>
                <span className=' font-semibold mt-2'>Message</span><br />
                <input type="text" placeholder="Enter your msg"
                 {...register("msg", { required: "msg is required is required" })}
                  className=" bg-white w-80 mt-2 border rounded-md outline-none" />
                  {errors.msg && <p className="text-red-500">{errors.msg.message}</p>}
              </div>
              <div className='mt-4  px-3 flex justify-between'>
                <button className='bg-blue-600 border hover:bg-blue-800 text-white px-2 py-1 rounded-md'>Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Contact
