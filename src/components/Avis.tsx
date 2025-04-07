import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Avis.scss";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

import "./SocialMedia.scss";

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

      {/* Section Réseaux Sociaux */}
      <section className="social-media-section py-6">
        <div className="container mx-auto text-center max-w-4xl px-4">
          <h3 className="text-lg font-bold text-white mb-4">
            SUIVEZ-NOUS SUR LES <span className="font-extrabold">RÉSEAUX SOCIAUX</span>
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="https://x.com/has_svc" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/people/Has-Tech-Services/61571620113575/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/has.tech.svc/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/has-tech-svc-10bb27345/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="https://www.tiktok.com/@has.tech.svc" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/@HasTechServices" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvisClients;
