
const ProductItem = ({title, image, price}) => {
  return (
    <div className='rounded bg-white border-2 border-[#B4B4B8] text-center'>
        <div className="h-48">
            <img src={image} alt="" className="h-full w-full"/>
        </div>
        <div className='bg-[#DCF2F1]'>
            <span className='font-bold text-[#638889]'>${price}</span>
        </div>
        <div className="border border-t-[#B4B4B8] border-b-0">
            <span className='text-sm font-bold text-[#638889]'>{title}</span>
        </div>
    </div>
  )
}

export default ProductItem