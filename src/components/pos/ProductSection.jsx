import React from 'react'
import SearchProducts from './SearchProducts'
import LinkButton from './LinkButton'

import { BsThreeDotsVertical } from "react-icons/bs";

const ProductSection = () => {
  return (
    <div className='py-1'>
        <SearchProducts />
        <div className='mt-3 flex items-center justify-between'>
          <LinkButton text="All Categories" color="#B4B4B3"/>
          <LinkButton text="Electronics" color="#B4B4B3"/>
          <LinkButton text="Men Fashion" color="#B4B4B3"/>
          <LinkButton text="Women Fashion" color="#B4B4B3"/>
          <button>
            <BsThreeDotsVertical size={25}/>
          </button>
        </div>
    </div>
  )
}

export default ProductSection