import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
function Banner() {
  return (
    <div className={style.banner}>
      <Image
        src={
          "/images/auto-mechanic-fixing-car-on-lift-2022-02-02-04-48-28-utc-scaled.jpg"
        }
        className={style.img}
        width={100000}
        height={100000}
      />
      <div className={style.content}>
        <div className={style.items}>
          <h1>
            <em>WE</em>
            <br />
            <em>UNDER&shy;STAND</em>
            <br />
            <em className={style.em}>
              <em>CARS</em>{" "}
              <em className={style.image}>
                <Image
                  src={"/images/JLM_drop_yellow.png"}
                  width={1000}
                  height={1000}
                />
              </em>
            </em>
          </h1>
          <p>
            Worldwide premium lubricants <br /> and additives for modern cars
          </p>
          <button>SEE PRODUCTS</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
