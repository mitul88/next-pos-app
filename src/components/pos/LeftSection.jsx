import { RxHamburgerMenu } from "react-icons/rx";
import LinkButton from "@/components/pos/LinkButton";
import { SlNote } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";

import { FaCircleUser } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import PosCart from "./PosCart";


const LeftSection = () => {
  return (
    <div>
        <div className='w-full mx-2 lg:mx-5 py-2  flex items-center justify-between'>
            <button className="px-3"><RxHamburgerMenu size={25} /></button>
            <LinkButton icon={<SlNote size={25} />} text="Note" link="https://www.facebook.com" />
            <LinkButton icon={<BsTruck size={25}/>} text="Shipping" link="https://www.google.com" />
            <LinkButton icon={<IoIosTimer size={25}/>} text="Hold Orders" link="https://www.google.com" />
            <LinkButton icon={<IoIosAddCircle size={25} />} text="New Item" link="https://www.twitter.com" />
        </div>

        <div className="pb-2">
            <button className="flex items-center justify-between w-full mx-2 lg:mx-5 py-3 px-2 md:px-5 bg-blue-100 text-blue-800 text-bold text-md lg:text-lg rounded">
                <div className="flex items-center">
                    <FaCircleUser size={25}className="mr-3"/>
                    Add user
                </div>
                <IoIosAddCircleOutline size={25}/>
            </button>
        </div>

        <PosCart />
    </div>
  )
}

export default LeftSection