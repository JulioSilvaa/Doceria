import { useFetchDoc } from "hooks/useFetchDoc";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { SelectFolderSlide } from "utils/selectFolderInDB";

function SwiperComponent() {
  const { documents, loading } = useFetchDoc("produtos");

  const imagesInDB = SelectFolderSlide(documents);

  const photos = imagesInDB?.map((item) => (
    <SwiperSlide key={item.id}>
      <img src={item.image} alt={item.name} />
    </SwiperSlide>
  ));

  if (loading)
    return (
      <h2
        style={{
          color: "red",
          textAlign: "center",
          margin: "20px",
        }}
      >
        Carregando
      </h2>
    );

  return (
    <>
      {photos <= 0 || photos === undefined ? (
        <div
          style={{
            color: "red",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <h1>Sem imagens Slide</h1>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default SwiperComponent;
