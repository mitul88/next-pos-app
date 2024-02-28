'use client'
import { MdOutlineCancel } from "react-icons/md";
import { FaFistRaised } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import useCartStore from "@/store/cartStore";
import LinkButton from "./LinkButton";

const BottomNavigation = () => {
    const {items} =useCartStore()
  return (
    <div className='py-2  flex items-center justify-between'>
        <LinkButton icon={<MdOutlineCancel size={25} />} text="Cancel"  link="/" />
        <LinkButton icon={<FaFistRaised  size={25}/>} text="Hold"  link="/" />
        <LinkButton icon={<TbDiscount size={25}/>} text="Discount"  link="/" />
        <LinkButton disable={items.length == 0} icon={<MdOutlinePayment size={25} />} text="Pay Now"  link="pos/payment" />
    </div>
  )
}

export default BottomNavigation