import React from 'react'

export default function 
() {
  return (
    <div className='bg-hero-image bg-no-repeat bg-center bg-cover h-screen relative'>
        <div className="absolute inset-0 bg-black/90 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative flex justify-center pt-80 lg:flex lg:h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Recreating history of historical creatures
                </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
                    <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                    Get Started
                    </a>

                    <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                    Learn More
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
