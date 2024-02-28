'use client'

const ProductItem = ({item, addToCart}) => {
  
  return (
    <div onClick={()=>addToCart({id: item.id, title: item.title, price:item.price, quantity: 1})} className='rounded bg-white border-2 border-[#B4B4B8] text-center cursor-pointer'>
        <div className="h-48">
            <img src={item.img} alt="" className="h-full w-full"/>
        </div>
        <div className='bg-[#DCF2F1]'>
            <span className='font-bold text-[#638889]'>${item.price}</span>
        </div>
        <div className="border border-t-[#B4B4B8] border-b-0">
            <span className='text-sm font-bold text-[#638889]'>{item.title}</span>
        </div>
    </div>
  )
}

export default ProductItem