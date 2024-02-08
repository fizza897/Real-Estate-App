import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residence.css";
import data from "../../utils/slider";

function Residences() {
  return (
    <>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residences </span>
          </div>
          <Swiper>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Residences;
