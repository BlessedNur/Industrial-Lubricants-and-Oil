import React from "react";
import style from "./Banner.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  top,
}) {
  const path = usePathname();
  const navigate = useRouter();
  return (
    <div
      className={style.banner}
      style={{
        height: height,
      }}
    >
      <Image src={img} className={style.img} width={100000} height={100000} />
      <div
        className={`${style.content} ${path !== "/" && style.altContent}`}
        style={{
          top: top,
        }}
      >
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
          {button && (
            <button onClick={() => navigate.push("/products")}>
              SEE PRODUCTS
            </button>
          )}
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
