'use client'

import useCartStore from "@/store/cartStore"


const CartTotal = () => {
    const {items, totalAmount, productQuantity, subTotal, tax, shipping, discount} = useCartStore()

    const totalCalculaton = (
        <div className='w-full mt-5'>
            <div className="flex my-5">
                    <div className="w-1/2"></div>
                    <div className="w-1/2">
                        <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                            <span className="tex-sm">Sub Total</span>
                            <span className="font-bold">${subTotal}</span>
                        </div>
                        <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                            <span className="tex-sm">Tax</span>
                            <span className="font-bold">${tax}</span>
                        </div>
                        <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                            <span className="tex-sm">Shipping</span>
                            <span className="font-bold">${shipping}</span>
                        </div>
                        <div className="w-full py-2 flex items-center justify-between border border-t-[#C7C8CC] border-x-0 border-b-0">
                            <span className="tex-sm text-semibold text-blue-800">Discount</span>
                            <span className="font-bold">-${discount}</span>
                        </div>
                    </div>
                </div>
                <div className="rounded bg-blue-100 text-blue-800 p-3 flex items-center justify-between mt-3">
                    <span className='text-sm'>Product Count ({productQuantity})</span>
                    <div className="text-lg font-semibold w-1/2 flex items-center justify-between">
                        <span>
                            Total
                        </span>
                        <span>
                            ${totalAmount}  
                        </span>
                    </div>
                </div>
        </div>
    )
    return (
        <>
            {items.length != 0 ? totalCalculaton : (<h3 className="text-lg font-semibold my-10 text-center">There are no items in the cart</h3>)}
        </>
  )
}

export default CartTotal