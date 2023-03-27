import { border } from '@mui/system';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import defaultImg from '../../dist/img/defaultImg.webp';



const Slider = (props) => {
  const [swiper, setSwiper] = useState(null);

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  // const style = {
  //   bgcolor: 'transparent',
  //   border: 'none',
  // };

  return (
      <>
        <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            spaceBetween={30}
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        >
          {
            props.img.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-buttons">
          <button className="swiper-button-prev" onClick={handlePrev}>
            
          </button>
          <button className="swiper-button-next" onClick={handleNext}>
            
          </button>
        </div>
      </>
  );
};
Slider.defaultProps = {
 img: [
     defaultImg
 ]
}
export default Slider;