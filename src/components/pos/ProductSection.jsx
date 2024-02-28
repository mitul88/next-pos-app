'use client'
import SearchProducts from './SearchProducts'
import LinkButton from './LinkButton'

import { BsThreeDotsVertical } from "react-icons/bs";
import ProductItem from './ProductItem';
import { products } from '../../../mock/products';
import useCartStore from '@/store/cartStore';

const ProductSection = () => {
  const { addToCart, removeFromCart } = useCartStore();
  const handleAddToCart = (item) => {
    addToCart(item)
  }
  return (
    <div className='pb-1 bg-[#ECF9FF] min-h-screen'>
        <SearchProducts />
        <div className='mt-3 px-4 flex items-center justify-between'>
          <LinkButton text="All Categories" color="#638889" solid="white"/>
          <LinkButton text="Electronics" color="#638889" solid="white"/>
          <LinkButton text="Men Fashion" color="#638889" solid="white"/>
          <LinkButton text="Women Fashion" color="#638889" solid="white"/>
          <button>
            <BsThreeDotsVertical size={25}/>
          </button>
        </div>

        <div className='w-full p-4 grid grid-cols-4 gap-4'>
          {products.map((item, index)=> (
            <ProductItem item={item} addToCart={handleAddToCart} key={item.id} />
          ))}
        </div>
    </div>
  )
}

export default ProductSection