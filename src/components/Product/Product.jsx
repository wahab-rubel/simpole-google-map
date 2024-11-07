import React from 'react'
import { Link } from 'react-router-dom';

function Product({ product }) {
 const {product_id, product_title, product_image, category, price, description, rating} = product;
  return (
      <Link to={`/products/${product_id}`}>
      <div className='card bg-base-300 shadow-xl w-full'>
       <figure className='rounded-lg'>
        <img src={product_image} alt={product_title} className='h-[240px] w-full' />
       </figure>
       <div className='card-body px-6'>
        <h2 className='card-title'>
         {product_title}
        </h2>
        <div className='badge badge-secondary badge-outline'>NEW</div>
        <p>Price: ${price}</p>
            <p>{description}</p>
            <div className="border-dashed"></div>
            <hr />
            <div className="card-actions justify-between">
            <div className="badge p-4 bg-purple-600 text-white font-bold">{category}</div>
            <div>Rating: {rating}</div>
            </div>
            <div className='flex justify-center items-center'>
            <Link to={`/products/${product_id}`}>
            <button className="btn badge-outline bg-purple-700 mt-4 text-white font-bold">Show Details</button>
            </Link>
            </div>
       </div>
      </div>
      </Link>
  )
}

export default Product
