import React, { useEffect, useState } from 'react'

import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {


    const [book ,setBook]=useState([])

    useEffect(()=>{
        const getBook = async ()=>{
            try {
                
                const res= await axios.get("http://localhost:4001/book")
                setBook(res.data)

            } catch (error) {
                console.log(error);
                
            }
        }
        getBook()
    })

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28  items-center justify-center text-center ">
                    <h1 className="font-bold text-xl md:text-4xl">We are delighted to have you {" "}
                        <span className="text-pink-500">Here :)</span>
                    </h1>
                    <p className="mt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint illo placeat error dolorum ipsum suscipit minus maiores enim et laborum exercitationem maxime quidem dignissimos, est sequi voluptas libero magni earum quod incidunt obcaecati, facere tempore voluptate! Corrupti, eaque error.
                    </p>
                    <Link to="/">
                        <button className="bg-pink-500 rounded-md hover:bg-pink-900 duration-200 mt-5 text-white py-1 px-3">
                            back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
                    {
                        book.map((item) => {
                            return <Cards item={item} key={item.id} />
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Course
