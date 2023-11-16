import React, { useEffect, useState } from "react";
import BodyPartCard from "./BodyPartCard";
import axios from "axios";
import { endpoints, HEADERS } from "../APIs/ExercisesApiData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const BodyPartsSlider = () => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${endpoints.bodyParts}?limit=20`, {
        headers: HEADERS,
      });
      setBodyParts(data);
    })();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bodyParts.length > 0
          ? bodyParts.map((name, index) => (
              <SwiperSlide key={`${name}-${index}`}>
                <BodyPartCard name={name} />
              </SwiperSlide>
            ))
          : "Loading ..."}
      </Swiper>
    </>
  );
};

export default BodyPartsSlider;
