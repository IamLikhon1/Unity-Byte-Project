import { IoStar } from "react-icons/io5";

const BestSingleSeller = ({ slider }) => {
    const { name, price, img } = slider;
    return (
        <div>
            <div className="flex mt-5">
                <div>
                    <img className="w-40" src={img} alt="" />
                </div>
                {/* text */}
                <div className="text-start">
                    {/* icon star */}
                    <div className="flex gap-1 text-gray-300 text-xl mb-2 md:mb-2 ">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                    </div>
                    <h2 className="text-xl md:text-xl font-bold mt-1">{name}</h2>
                    <h4 className="text-2xl text-red-600 font-semibold my-1">${price}</h4>
                </div>

            </div>
        </div>
    );
};

export default BestSingleSeller;