import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider: React.FC = () => {
  const images = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="
        [&_.swiper-button-next]:text-black [&_.swiper-button-next]:font-bold 
        [&_.swiper-button-next]:text-2xl [&_.swiper-button-next]:hidden 
        [&_.swiper-button-next]:md:block [&_.swiper-button-next]:md:text-3xl
        [&_.swiper-button-next]:lg:text-4xl

        [&_.swiper-button-prev]:text-black [&_.swiper-button-prev]:font-bold 
        [&_.swiper-button-prev]:text-2xl [&_.swiper-button-prev]:hidden 
        [&_.swiper-button-prev]:md:block [&_.swiper-button-prev]:md:text-3xl
        [&_.swiper-button-prev]:lg:text-4xl

        [&_.swiper-pagination-bullet]:bg-black 
        [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2
        [&_.swiper-pagination-bullet]:md:w-2.5 [&_.swiper-pagination-bullet]:md:h-2.5
        [&_.swiper-pagination-bullet]:lg:w-3 [&_.swiper-pagination-bullet]:lg:h-3
        
        [&_.swiper-pagination-bullet-active]:opacity-100
        [&_.swiper-pagination]:bottom-2 [&_.swiper-pagination]:md:bottom-4 [&_.swiper-pagination]:lg:bottom-6
      ">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 1000, // Increased delay for better user experience
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
        >
          {images.map((image, index) => (
            <SwiperSlide 
              key={index}
              className="w-full"
            >
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;