import React from 'react'

const Products = [
  {
    id:1,
    title: "Mexicon Burger",
    category: "Fixing",
    Price: "300.00",
    imageUrl: "https://media.istockphoto.com/id/1320695890/photo/great-double-beef-burger.jpg?s=612x612&w=0&k=20&c=HngrcB94zbvRfU7PUucqP80UMQTJCZxW8sBbc2CBrqw=",
    bgColor:"bg-amber-500"
  },

  {
    id:2,
    title: "Classy Burger",
    category: "Fixing",
    Price: "250.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ICm9w03sQqQcbZvGf7PYjgbBYk_g8w9Kzw&s",
    bgColor:"bg-teal-500"
  },

  {
    id:1,
    title: "Family Burger",
    category: "Fixing",
    Price: "500.00",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYodGSoVs2YH45Ya3HrPQOKyuFUqyD6J0CQ&s",
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
