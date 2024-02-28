'use client'

const ProductItem = ({item, addToCart}) => {
  
  return (
    <div className='group relative rounded bg-white border-2 border-[#B4B4B8] text-center'>
        <div className="h-60">
            <img src={item.img} alt="" className="h-full w-full"/>
        </div>
        <div className='bg-[#DCF2F1]'>
            <span className='font-bold text-[#638889]'>${item.price}</span>
        </div>
        <div className="border border-t-[#B4B4B8] border-b-0">
            <span className='text-sm font-bold text-[#638889]'>{item.title}</span>
        </div>
        <div className="hidden group-hover:flex absolute top-0 bottom-0 left-0 right-0  flex-col items-center justify-center text-black">
          <button onClick={()=>addToCart({id: item.id, title: item.title, price:item.price, quantity: 1, itemTotal: item.price})} className="px-5 py-2 bg-green-600 font-semibold text-white">Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductItem