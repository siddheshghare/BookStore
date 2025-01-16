import React from 'react'

function Cards({ item }) {
    

    return (
        <>
            <div className="px-3">
                <div className="card bg-base-100 w-90 shadow-xl my-10">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline hover:shadow-md hover:bg-pink-500 hover:text-white ">${item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:shadow-md hover:bg-pink-500 hover:text-white ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
