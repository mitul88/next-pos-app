'use client'
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import useCartStore from "@/store/cartStore";

const PosCart = () => {
    const { items, addToCart, removeFromCart } = useCartStore();

    const handleAddToCart = (item) => {
        addToCart(item)
    }

    const handleRemoveFromCart = (item) => {
        removeFromCart(item)
    }

  return (
    <div className="w-full flex flex-col">

        {items.map((item) => (
            <div className="flex items-center justify-between" key={item.id}>
                <div className="basis-1/12">
                    <FaRegEdit size={25}/>
                </div>
                <div className="basis-10/12 px-3 py-1 flex items-center justify-between border-t border-l border-r border-t-[#C7C8CC] border-l-[#C7C8CC] border-r-[#C7C8CC] rounded-t flex items-center w-max">
                    <div>
                        <span className="text-md lg:text-lg">{item.title}</span>
                    </div>
                    <div>
                        <span className="text-md lg:text-lg">& {item.price}</span>
                    </div>
                    <div className="flex items-center text-[#B4B4B3]">
                        <button><FaMinusCircle size={20}/></button>
                        <span className="font-bold mx-3">1</span>
                        <button><FaPlusCircle size={20}/></button>
                    </div>
                    <div>
                        <span className="text-md lg:text-lg">& 92.00</span>
                    </div>
                </div>
                <div className="basis-1/12 flex justify-end">
                    <FaRegTrashCan onClick={()=>handleRemoveFromCart(item.id)} size={25} className="text-red-600"/>
                </div>
            </div>
        ))}
            
        </div>
  )
}

export default PosCart