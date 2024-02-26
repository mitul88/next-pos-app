import React from 'react'
import LeftSection from '../pos/LeftSection'

const PosLayout = (props) => {
  return (
    <div className='flex flex-col lg:flex-row'>
        <div className="w-full lg:w-1/2 px-2 lg:px-5">
            <LeftSection />
        </div>
        <div className="w-full lg:w-1/2">
            {props.children}
        </div>
    </div>
  )
}

export default PosLayout