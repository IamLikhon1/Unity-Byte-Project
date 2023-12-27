import { Toaster } from "react-hot-toast";
import BestSellerSlider from "./Component/BestSellerSlider/BestSellerSlider";
import SliderOne from "./Component/SliderOne/SliderOne";

const App = () => {

  return (
    <div className='container mx-auto'>
      <Toaster />
      <SliderOne />
      <BestSellerSlider/>
    </div>
  );
};

export default App;