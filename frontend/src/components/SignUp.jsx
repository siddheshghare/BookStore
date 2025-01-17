import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';

function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    }

    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          alert("signUp successfull")
        }
        localStorage.setItem("users",JSON.stringify(res.data.users))

      }).catch((err) => {

        if (err.response) {
          alert("error " + err.response.data.message)
        }
       
      })

  };


  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px] ">
          <div className="modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              <div className='mt-4'>
                <span className='font-semibold mt-2'>Email</span><br />
                <input type="email" placeholder="Enter your Email"
                  className=" w-80 mt-2 border rounded-md outline-none"
                  {...register("email", { required: "Email is required" })} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>


              <div className='mt-4'>
                <span className='font-semibold mt-2'>Name</span><br />
                <input type="text" placeholder="Enter your Name"
                  className=" w-80 mt-2 border rounded-md outline-none"
                  {...register("name", { required: "name is required" })} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              </div>



              <div className='mt-4'>
                <span className='font-semibold mt-2'>Password</span><br />
                <input type="password" placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className=" w-80 mt-2 border rounded-md outline-none" />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div className='mt-4  px-3 flex justify-between'>
                <button className='bg-pink-600 border hover:bg-pink-800 text-white px-2 py-1 rounded-md'>Signup</button>
                <p>Have account?
                  <button
                    onClick={() => {
                      return document.getElementById("my_modal_3").showModal()
                    }}
                    className='underline cursor-pointer text-blue-400'>login

                  </button>
                  <Login />

                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
