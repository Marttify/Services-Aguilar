import React from 'react'


const Item = ({ productos }) => {
  
    return (
        <div className='my-3 shadow-xl' id={productos.id} >
          <img src={productos.image} alt={productos.title} className='w-full h-52' />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{productos.title}</div>
              <p className="text-gray-700 text-base">{productos.text}</p>
          </div>
          <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{productos.hashtag1}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{productos.hashtag2}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{productos.hashtag3}</span>
          </div>
          <div className="inline-flex rounded-md shadow m-4 b">
            <a
              href="./index.html"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300"
            >
              Mas informacion
            </a>
          </div>
        </div>
    )
}

export default Item


