import { IoStar } from "react-icons/io5";

const BestSingleSeller = ({ slider }) => {
    const { name, price, img } = slider;
    return (
        <div>
            <div className="flex mt-5 cursor-pointer">
                <div>
                    <img className="w-32" src={img} alt="" />
                </div>
                {/* left-text */}
                <div className="text-start mt-5 group">
                    {/* icon star */}
                    <div className="flex gap-1 text-gray-300 text-xl mb-2 md:mb-2 ">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <h2 className="text-xl md:text-xl font-bold mt-1 group-hover:text-orange-400 duration-300">{name}</h2>
                    <h4 className="text-2xl text-red-400 font-bold my-1">${price}</h4>
                </div>

            </div>
        </div>
    );
};

export default BestSingleSeller;