
import React from 'react'

const Products = [
  {
    id:1,
    title: "Gourmet Burger",
    category: "Fixing",
    Price: "350.00",
    imageUrl: "https://media.gettyimages.com/id/637790866/photo/100-lamb-greek-burger.jpg?s=612x612&w=gi&k=20&c=zsrjZItvNWD3biBSX0kW-Z93dc34-WGLKii8mBfLTJk=",
    bgColor:"bg-amber-500"
  },

  {
    id:2,
    title: "Royal Burger",
    category: "Fixing",
    Price: "200.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0z-QHEYYZJReSI4BH3Kszf9DTgkc_83dN0Q&s",
    bgColor:"bg-teal-500"
  },

  {
    id:1,
    title: "HamBurger",
    category: "Fixing",
    Price: "530.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjrf32oObgAKWlghLICtV3ogyucUVY0p2-ew&s",
    bgColor:"bg-amber-500"
  },
];

export default function ProductList() {
  return (
    <div className='p-1 flex flex-wrap items-center justify-center mb-6'>
      {Products.map((product) => (
        <div key={product.id} className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`} > 
        <svg className='absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition-transform' viewBox='0 0 375 283' fill='none' style={{opacity:0.1}}>
          <rect x="159.52" y="152" height="152" width="152" rx="8" transform='rotate(-45 159.52 175)' fill='white'/>
          <rect y="107.48" height="152" width="152" rx="8" transform='rotate(-45 0 175.48)' fill='white'/>
        </svg>

        <div className='relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform'>
          <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
            style={{background: "radial-gradient(black, transparent 50%", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1", opacity:0.2}}
          >
          </div>

          <img className='relative w-50 h-25 rounded-lg -mt-5' src={product.imageUrl} alt={product.title}/>
             </div>
     
          <div className='relative text-white px-6 pb-6 mt-6'>
            <span className='block opacity-75 -mb-1'>{product.category}</span>
              
              <div>
                <span className='block font-semibold text-xl'>{product.title}</span>
                <span className='block bg-white rounded-full  text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center'>{product.Price}</span>
                 </div>

             </div>
        </div>
      ))}
      
    </div>
  )
}
