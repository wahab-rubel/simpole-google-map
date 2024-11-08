import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCart, addToStoredWishList, getStoredWishList } from '../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
  const { product_id } = useParams();
  const data = useLoaderData(); // Ensure this is set up correctly in route loader
  const id = parseInt(product_id);

  const product = data?.find(item => item.product_id === id);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishList = getStoredWishList();
    setIsInWishlist(wishList.includes(id));
  }, [id]);

  if (!product) {
    return <div className="text-center text-red-500 font-bold">Product not found</div>;
  }

  const { product_image, product_title, price, description, Specification, availability, rating } = product;

  const handleAddToCart = () => {
    addToStoredCart(id);
    toast.success(`${product_title} added to cart`);
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToStoredWishList(id);
      setIsInWishlist(true);
      toast.success(`${product_title} added to wishlist`);
    }
  };

  return (
    <div className="lg:max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-52 mb-12">
      <Helmet>
        <title>Product | Details</title>
      </Helmet>
      <div className="text-center bg-purple-500 text-white py-10 rounded-lg mb-8">
        <h1 className="text-4xl font-bold">Product Details</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:md:w-1/2 flex justify-center">
          <img src={product_image} alt={product_title} className="lg:w-full lg:h-96 object-cover rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product_title}</h1>
          <p className="text-xl font-semibold text-green-600">Price: ${price.toFixed(2)}</p>
          <p className="font-semibold text-sm text-green-500">{availability ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-700 mt-2">{description}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Specification:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {Specification?.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mt-4">
            <h3 className="text-lg font-semibold">Rating:</h3>
            <div className="flex items-center ml-2">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="ml-1 text-gray-700">{rating || "4.8"}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={handleAddToCart}>Add To Cart</button>
            <button
              onClick={handleAddToWishlist}
              className={`px-6 py-2 rounded-lg font-semibold transition ${isInWishlist ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 text-white hover:bg-red-600'}`}
              disabled={isInWishlist}
            >
              ♥ {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetails;
