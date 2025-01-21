import React from 'react'

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-t from-black to-gray-700">
        <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
              <a href=""
                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

                <img src='https://assets.epicurious.com/photos/60d1e9fbd62cfdf9e277542e/16:9/w_1280,c_limit/ChickenMushroomBurger_RECIPE_061721_18256.jpg'
                  alt='burger 1'
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />

                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Classic Bites 
                </h3>
              </a>
            </div>

            <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700'>
             <a href=''
             className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
              <img src='https://img.freepik.com/premium-photo/spicy-burger_777078-577.jpg'
              alt='Burger 2'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              
                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Spicy Burger
                </h3>
              
             </a>
            


           <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
            <a href=''
            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEu6HiKRlyyV9N4gHj_CplUHxR97DZWBjlxw&s'
              alt='Burger 3'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Veggie Burger
                </h3>
              </a>

              <a href=''
              className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
               
               <img src='https://static.vecteezy.com/system/resources/previews/039/626/804/non_2x/ai-generated-grilled-beef-burger-with-cheese-tomato-and-fresh-vegetables-generated-by-ai-photo.jpg'
              alt='Burger 3'
              className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
              <div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5'></div>
              <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  cheesy Burger
                </h3>
              </a>
           </div>
           </div>
          
          <div className='col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col'>
             <a href=''
             className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1kAtcKvxTOPv63032P5dQpW2RJEnOWkN9w&s'
                  alt='burger 5'
                  className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />

                <div className='absolute inset-0 bg-gradient-to-b from-gray-900/5 to-gray-900/5'>
                </div>
                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 x5:text-xl md:text-0xl'>
                  Gourmet Burger 
                </h3>
             </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
