import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Avis.scss"; 


interface AvisClient {
  id: number;
  imageUrl: string;
}


const avisClients: AvisClient[] = [
  { id: 1, imageUrl: "https://i.imgur.com/punHr3O.png" },
  { id: 2, imageUrl: "https://i.imgur.com/punHr3O.png" },
  { id: 3, imageUrl: "https://i.imgur.com/punHr3O.png" },
  { id: 4, imageUrl: "https://i.imgur.com/punHr3O.png" },
];

const AvisClients: React.FC = () => {
  return (
    <div className="avis-container">
      <h1 className="main-title">Avis de nos clients sur les réseaux sociaux</h1>
      <h2 className="sub-title">Découvrez ce que nos clients pensent de nos services.</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-container"
      >
        {avisClients.map((avis) => (
          <SwiperSlide key={avis.id}>
            <div className="slide">
              <img
                src={avis.imageUrl}
                alt={`Avis ${avis.id}`}
                className="slide-img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AvisClients;
