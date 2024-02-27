import React from 'react'

const CartTotal = () => {
  return (
    <div className='w-full mt-5'>
        <div className="flex">
            <div className="w-1/2"></div>
            <div className="w-1/2">
                <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                    <span className="tex-sm">Sub Total</span>
                    <span className="font-bold">$5020</span>
                </div>
                <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                    <span className="tex-sm">Tax</span>
                    <span className="font-bold">$25</span>
                </div>
                <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                    <span className="tex-sm">Shipping</span>
                    <span className="font-bold">$5.50</span>
                </div>
                <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                    <span className="tex-sm text-semibold text-blue-800">Discount</span>
                    <span className="font-bold">$5020</span>
                </div>
            </div>
        </div>
        <div className="rounded bg-blue-100 text-blue-800 p-3 flex justify-between mt-3">
            <span className='text-sm'>Product Count (13)</span>
            <div className="text-lg font-semibold w-1/2 flex items-center justify-between">
                <span>
                    Total
                </span>
                <span>
                    $50223
                </span>
            </div>
        </div>
    </div>
  )
}

export default CartTotal