import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SingleSliderOne from '../SingleSliderOne/SingleSliderOne';

const SliderOne = () => {
    const [sliderOne, setSliderOne] = useState([]);
    useEffect(() => {
        fetch('sliderOne.json')
            .then(res => res.json())
            .then(data => setSliderOne(data))
    }, [])
    return (
        <div>
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">

                {/* sliderOne */}
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 gap-2 mx-5 px-2 md:px-10'>
                        {
                            sliderOne.slice(0, 4).map(slider => <SingleSliderOne
                                key={slider.id}
                                slider={slider}
                            ></SingleSliderOne>)
                        }
                    </div>
                </SwiperSlide>

                {/* sliderTwo */}
                <SwiperSlide>
                    <div className='grid md:grid-cols-2 gap-10 mx-5'>
                        {
                            sliderOne.slice(4, 8).map(slider => <SingleSliderOne
                                key={slider.id}
                                slider={slider}
                            ></SingleSliderOne>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SliderOne;