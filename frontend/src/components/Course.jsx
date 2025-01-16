import React from 'react'
import list1 from "../../public/list.json"
import Cards from './Cards'

function Course() {
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
                    <button className="bg-pink-500 rounded-md hover:bg-pink-900 duration-200 mt-5 text-white py-1 px-3">back</button>
                </div>
                <div>
                    {
                        list1.map((item)=>{
                            return <Cards item={item} key={item.id}/>
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default Course
