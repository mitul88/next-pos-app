import React from 'react'
import SearchProducts from './SearchProducts'
import LinkButton from './LinkButton'

import { BsThreeDotsVertical } from "react-icons/bs";
import ProductItem from './ProductItem';
import { products } from '../../../mock/products';

const ProductSection = () => {
  return (
    <div className='pb-1 bg-[#DCF2F1]'>
        <SearchProducts />
        <div className='mt-3 px-4 flex items-center justify-between'>
          <LinkButton text="All Categories" color="#B4B4B3" solid="white"/>
          <LinkButton text="Electronics" color="#B4B4B3" solid="white"/>
          <LinkButton text="Men Fashion" color="#B4B4B3" solid="white"/>
          <LinkButton text="Women Fashion" color="#B4B4B3" solid="white"/>
          <button>
            <BsThreeDotsVertical size={25}/>
          </button>
        </div>

        <div className='w-full p-4 grid grid-cols-4 gap-4'>
          {products.map((item, index)=> (
            <ProductItem title={item.title} image={item.img} price={item.price} key={item.id} />
          ))}
        </div>
    </div>
  )
}

export default ProductSection