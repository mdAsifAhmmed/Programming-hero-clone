import React from 'react'

function TestimonialCard({ key, image, name, comment }) {
    return (
        <>
            <div className="bg_white shadow-xl rounded-xl dark:bg-gray-800 p-6 mt-5 box-border mx-6" key={key}>
                <div className="flex flex-col relative items-center">
                    <div className="p-3 absolute -top-16 dark:bg-gray-800  bg_white  rounded-full">
                        <img className="rounded-full " src={image} alt="students" width="75px" height="75px" />
                    </div>

                    <h2 className="text-lg dark:text-gray-100 mt-5">{name}</h2>

                    <div className="flex flex-row justify-content-center pb-6">
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>

                    </div>
                </div>

                <div className="">
                    <h3 className="text-base text-gray-500 dark:text-gray-400 text-center font-normal">{comment}</h3>
                </div>

            </div>
        </>
    )
}

export default TestimonialCard
