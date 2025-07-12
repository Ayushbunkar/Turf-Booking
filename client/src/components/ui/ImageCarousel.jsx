import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ImageCarousel = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="h-full w-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover" 
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                <h3 className="text-2xl font-bold">{image.caption}</h3>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageCarousel
