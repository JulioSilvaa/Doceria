import { useEffect, useState } from "react";
import * as Foto from "services/getAllPhotos";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperComponent() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const getFotos = async () => {
    setLoading(true);
    setImages(await Foto.getAllPhotosInSlide());
    setLoading(false);
  };

  useEffect(() => {
    getFotos();
  }, []);

  const photos = images?.map((item) => (
    <SwiperSlide key={item.name}>
      <img src={item.url} alt={item.name} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={"true"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {photos}
      </Swiper>
    </>
  );
}

export default SwiperComponent;
