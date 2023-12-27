import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { IoSearchSharp, IoStar } from "react-icons/io5";
import toast from "react-hot-toast";

const SingleSliderOne = ({ slider }) => {
    const { name, price, description, img } = slider;
    // make toast 
    const addToCart = () => {
        toast.success('Successfully Added To Cart')
    }
    return (
        <div className="cursor-pointer">
            <div className="grid md:grid-cols-2 items-center gap-5 ">
                {/* image */}
                <div className="relative group">

                    <img className="w-fit h-fit" src={img} alt="" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    {/* icons */}
                    <div className="group">
                        <div className="flex gap-5 relative bottom-28 left-14 md:left-20 md:bottom-40 group-hover:opacity-100 opacity-0 transition-opacity" >
                            <div className="px-4 py-4 rounded-full items-center bg-slate-50 hover:text-orange-400 duration-500 hover:-translate-y-2 "><FaHeart /></div>
                            <div className="px-4 py-4 rounded-full items-center bg-slate-50 hover:text-orange-400 duration-500 hover:-translate-y-2"> <TfiReload /></div>
                            <div className="px-4 py-4 rounded-full items-center bg-slate-50 hover:text-orange-400 duration-500 hover:-translate-y-2"><IoSearchSharp /></div>
                        </div>
                    </div>

                </div>
                {/* text */}
                <div className="text-start group">
                    {/* icon star */}
                    <div className="flex gap-1 text-gray-300 text-xl mb-2 md:mb-5">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <h2 className="text-3xl md:text-2xl font-bold">{name}</h2>
                    <h4 className="text-2xl text-red-400 font-bold my-3">${price}</h4>
                    <p className="text-lg text-gray-700">{description}</p>

                    {/* button */}
                    <div>
                        <button onClick={addToCart} className="px-8 py-3 rounded-full bg-slate-700 text-white mt-5 uppercase font-semibold group-hover:opacity-100 opacity-0 transition-opacity">ADD To Cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleSliderOne;