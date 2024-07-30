import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
function Banner() {
  return (
    <div className={style.banner}>
      <Image
        src={"/images/pexels-loic-manegarium-3855962.jpg"}
        width={1000}
        height={1000}
      />
      <div className={style.content}>
        <div className={style.items}>
          <h1>Your Partner for Proven Lubrication Solutions</h1>
          <p>
            From our best in class experts to our quality products and superior
            service, PetroChoice provides our customers with value-added, top to
            bottom lubrication solutions.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
