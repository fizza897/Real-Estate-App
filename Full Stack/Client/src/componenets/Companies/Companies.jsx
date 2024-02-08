import React from "react";
import "./Companies.css";
import Prologis from "../../Images/prologis.png";
import Tower from "../../Images/tower.png";
import Equinix from "../../Images/equinix.png";
import Reality from "../../Images/realty.png";

function Companies() {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWIdth flexCenter c-container">
          <img src={Prologis} alt="Prologis" srcset="" />
          <img src={Tower} alt="Tower" srcset="" />
          <img src={Equinix} alt="Equinix" srcset="" />
          <img src={Reality} alt="Reality" srcset="" />
        </div>
      </section>
    </>
  );
}
export default Companies;
