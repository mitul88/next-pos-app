import { FaSearch } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
const SearchProducts = () => {
  return (
    <div className="flex items-center w-full bg-[#F0F3FF] px-3 py-2 shadow-lg">
        <div className="flex items-center w-5/6 text-[#B4B4B3]">
            <FaSearch size={25} className="mr-3"/>
            <input type="text" className="bg-transparent w-full p-2" placeholder='Search Products...'/>
        </div>
        <FaBarcode size={25} className="w-1/6 text-[#B4B4B3]"/>
    </div>
  )
}

export default SearchProducts