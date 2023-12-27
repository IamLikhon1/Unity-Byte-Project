import { Toaster } from "react-hot-toast";
import BestSellerSlider from "./Component/BestSellerSlider/BestSellerSlider";
import SliderOne from "./Component/SliderOne/SliderOne";

const App = () => {

  return (
    <div className='max-w-7xl mx-auto pt-10 md:pt-20'>
      <Toaster />
      <SliderOne />
      <BestSellerSlider/>
    </div>
  );
};

export default App;