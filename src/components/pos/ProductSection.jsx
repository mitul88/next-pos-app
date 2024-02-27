import React from 'react'
import SearchProducts from './SearchProducts'
import LinkButton from './LinkButton'

import { BsThreeDotsVertical } from "react-icons/bs";

const ProductSection = () => {
  return (
    <div className='pb-1 bg-[#DCF2F1]'>
        <SearchProducts />
        <div className='mt-3 flex items-center justify-between'>
          <LinkButton text="All Categories" color="#B4B4B3" solid="white"/>
          <LinkButton text="Electronics" color="#B4B4B3" solid="white"/>
          <LinkButton text="Men Fashion" color="#B4B4B3" solid="white"/>
          <LinkButton text="Women Fashion" color="#B4B4B3" solid="white"/>
          <button>
            <BsThreeDotsVertical size={25}/>
          </button>
        </div>
    </div>
  )
}

export default ProductSection