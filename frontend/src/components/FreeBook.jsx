import React from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function FreeBook() {


    const filteredData = list.filter((data) => data.category === "free")
    console.log(filteredData);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div>
                    <h1 className="font-bold text-xl">Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti assumenda impedit iste, numquam suscipit nisi quia amet dolorum fuga at? Officiis temporibus in corrupti cum recusandae. Amet harum nostrum maiores ducimus? Reprehenderit, expedita. Quis!</p>
                </div>


                <div>
                    <Slider {...settings}>
                       {filteredData.map((item)=>{
                        return <Cards item={item} key={item.id}/>
                       })} 
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default FreeBook
