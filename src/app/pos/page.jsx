import PosLayout from '@/components/master/PosLayout'
import ProductSection from '@/components/pos/ProductSection'
import React from 'react'

const page = () => {
  return (
    <>
        <PosLayout>
          <ProductSection />
        </PosLayout>
    </>
  )
}

export default page