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
            <div className="md:grid md:grid-cols-12 gap-5 items-center">
                <div className="col-span-7  mx-2 md:mx-0">
                    <img className='w-full' src="https://img.freepik.com/free-vector/modern-black-friday-horizontal-banner-with-white-brush-stroke-background_1361-3703.jpg?w=1380&t=st=1703694375~exp=1703694975~hmac=79b8d7ceb0fc4c85286e1546d70af9f489cc2af208a6f8baddadf44532682655" alt="" />
                </div>

                {/* slider */}
                <div className="col-span-5 mx-2 pb-5 mt-5 md:mt-0">
                    <h2 className='uppercase text-2xl font-semibold'>Best seller</h2>
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