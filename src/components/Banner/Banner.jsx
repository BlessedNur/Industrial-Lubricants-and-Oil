import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
function Banner({
  img,
  button,
  text,
  home,
  textIntro,
  height,
  diff,
  extraText,
  presentPage,
  subNavigation,
  subPage,
}) {
  return (
    <div
      className={style.banner}
      style={{
        height: height,
      }}
    >
      <Image src={img} className={style.img} width={100000} height={100000} />
      <div className={style.content}>
        <div className={style.items}>
          {home ? (
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
          ) : (
            <h1 className={style.h1}>{text}</h1>
          )}
          {textIntro && (
            <p>
              Worldwide premium lubricants <br /> and additives for modern cars
            </p>
          )}
          {button && <button>SEE PRODUCTS</button>}
          {diff && (
            <>
              <div className={style.navigation}>
                <p>Home</p>
                <p>{"»"}</p>
                <p>{presentPage}</p>
                <div className={style.navigation}>
                  {subNavigation && (
                    <>
                      <p>{"»"}</p>
                      <p>{subPage}</p>
                    </>
                  )}
                </div>
              </div>
              <p>{extraText}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
