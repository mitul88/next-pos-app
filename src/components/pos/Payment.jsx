'use client'
import useCartStore from "@/store/cartStore"
import { MdOutlinePayment } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { BsCash } from "react-icons/bs";

import { MdOutlineCancel } from "react-icons/md";
import LinkButton from "./LinkButton";

const Payment = () => {
   const {totalAmount} = useCartStore()
    return (
    <div className='mt-10 lg:mt-0 pb-1 bg-[#ECF9FF] min-h-screen p-10'>
        <div className="w-full px-10 py-5 flex items-center justify-between border border-[#B4B4B8]">
            <h3 className="text-xl font-semibold text-[#638889]">Order Amount</h3>
            <h1 className="text-4xl font-bold">${totalAmount}</h1>
        </div>
        <div className="flex items-center border border-[#B4B4B8] bg-white mt-10">
            <div className="w-1/3">
                <ul className="w-full text-[#638889] border border-r-[#B4B4B8] border-t-0 border-l-0 border-b-0">
                    <li className="flex items-center px-10 py-5 w-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer">
                        <MdOutlinePayment size={30}/>
                        <h4 className="text-lg font-bold ml-3">Card</h4>
                    </li>
                    <li className="flex items-center px-10 py-5 w-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer">
                        <BsCash size={30}/>
                        <h4 className="text-lg font-bold ml-3">Cash</h4>
                    </li>
                    <li className="flex items-center px-10 py-5 w-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer">
                        <MdManageAccounts size={30}/>
                        <h4 className="text-lg font-bold ml-3">On Account</h4>
                    </li>
                    <li className="flex items-center px-10 py-5 w-full hover:bg-blue-100 hover:text-blue-800 cursor-pointer">
                        <CiMoneyCheck1 size={30}/>
                        <h4 className="text-lg font-bold ml-3">Checque</h4>
                    </li>
                </ul>
            </div>
            <div className="w-2/3 px-10 p-5">
                <div className="w-full">
                    <form >
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col jusstify-between">
                                <input type="text" placeholder="Card Name" className="w-full border border-b-[#B4B4B8] border-t-0 border-l-0 border-r-0 px-1 text-lg mb-3"/>
                                <input type="text" placeholder="Card Number" className="w-full border border-b-[#B4B4B8] border-t-0 border-l-0 border-r-0 px-1 text-lg mb-3"/>
                                <input type="text" placeholder="Card Expiry Date" className="w-full border border-b-[#B4B4B8] border-t-0 border-l-0 border-r-0 px-1 text-lg mb-3"/>
                                <input type="text" placeholder="Card Secret" className="w-full border border-b-[#B4B4B8] border-t-0 border-l-0 border-r-0 px-1 text-lg mb-3"/>
                            </div>
                            <div className="flex items-center mt-16">
                                <LinkButton icon={<MdOutlineCancel />} text="cancel" link="/pos"/>
                                <button className="flex items-center w-fit bg-blue-600 text-white font-semibold px-5 py-3 ml-3 rounded">
                                    <BsCash size={25}/> 
                                    <span className="ml-3">Complete Payment</span>
                                </button>
                            </div>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment