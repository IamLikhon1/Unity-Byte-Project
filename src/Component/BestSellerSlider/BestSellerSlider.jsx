import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import BestSingleSeller from './BestSingleSeller/BestSingleSeller';
const BestSellerSlider = () => {
    const [sliderOne, setSliderOne] = useState([]);
    useEffect(() => {
        fetch('sliderOne.json')
            .then(res => res.json())
            .then(data => setSliderOne(data))
    }, [])
    return (
        <div>
            <div className="md:grid md:grid-cols-12">
                <div className="col-span-7">
                    <img className='w-fit h-fit' src="" alt="" />
                </div>

                {/* slider */}
                <div className="col-span-5">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Pagination]}
                        className="mySwiper"
                    >
                        {/* sliderOne */}
                        <SwiperSlide>
                            <div className=''>
                            {
                                sliderOne.slice(0, 3).map(slider => <BestSingleSeller
                                    key={slider.id}
                                    slider={slider}
                                ></BestSingleSeller>)
                            }
                        </div>
                        </SwiperSlide>

                        {/* sliderTwo */}
                        <SwiperSlide>
                            <div className=''>
                            {
                                sliderOne.slice(3, 6).map(slider => <BestSingleSeller
                                    key={slider.id}
                                    slider={slider}
                                ></BestSingleSeller>)
                            }
                        </div>
                        </SwiperSlide>

                        {/* sliderThree */}
                        <SwiperSlide>
                            <div className=''>
                            {
                                sliderOne.slice(6, 8).map(slider => <BestSingleSeller
                                    key={slider.id}
                                    slider={slider}
                                ></BestSingleSeller>)
                            }
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default BestSellerSlider;