import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState ([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() =>{
    fetch('/public/Data/Data.json')
    .then(res => res.json())
    .then(data => {setProducts(data);
    const uniqueCategories = Array.from(new Set(data.map(product => product.category)));
    setCategories(['All', ...uniqueCategories]);
    });
  }, [])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }
  const filteredProducts = selectedCategory === 'All'
  ? products
  : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h1 className='text-4xl text-center text-white font-bold mt-10 mb-5'>Explore Cutting-Edge Gadgets</h1>
      {/* Aside bar in a category product */}
      <div className='lg:flex '>
        <aside className='lg:w-64 bg-purple-800 p-4 rounded-lg h-[500px]'>
        <h1 className="text-white text-xl mb-4 font-extrabold text-center">All Categories</h1>
        <ul className='font-extrabold text-xl'>
          {
            categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}
              className={`text-white mb-3 p-3 rounded-lg cursor-pointer shadow-lg bg-purple-600 ${selectedCategory === category ? ''  : ''}`}>
              {category}
              </li>
            ))
          }
        </ul>
        </aside>
     

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {
            filteredProducts.map(product => <Product product={product} key={product.product_id} />)
          }
        </div>
        </div>
    </div>
  )
}

export default Products
