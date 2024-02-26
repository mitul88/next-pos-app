import { RxHamburgerMenu } from "react-icons/rx";
import LinkButton from "@/components/pos/LinkButton";
import { SlNote } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";

const LeftSection = () => {
  return (
    <div>
        <div className='w-full px-2 py-2 lg:px-5 flex items-center justify-between'>
            <button><RxHamburgerMenu size={20} /></button>
            <LinkButton icon={<SlNote size={20} />} text="Note" link="https://www.facebook.com" />
            <LinkButton icon={<BsTruck size={20}/>} text="Shipping" link="https://www.google.com" />
            <LinkButton icon={<IoIosTimer size={20}/>} text="Hold Orders" link="https://www.google.com" />
            <LinkButton icon={<IoIosAddCircle size={20} />} text="New Item" link="https://www.twitter.com" />
        </div>
    </div>
  )
}

export default LeftSection