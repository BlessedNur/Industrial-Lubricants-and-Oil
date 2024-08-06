"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import style from "./page.module.css";
import { news } from "@/components/MainContent/MContent";
import { useRouter, useSearchParams } from "next/navigation";

function page() {

  const navigate = useRouter();
  return (
    <section>
      <Navbar />
      <Banner
        height={"80svh"}
        text={"News"}
        img={
          "https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        presentPage={"news"}
        diff={true}
      />
      <div className={style.news}>
        <div className={style.contentN}>
          <h1>latest news</h1>
          <div className={style.newsItems}>
            {news.map((item, index) => (
              <div
                className={style.card}
                key={index}
                onClick={() =>
                  navigate.push(`/news/${encodeURIComponent(item.name)}`)
                }
              >
                <div className={style.imageC}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.infos}>
                  <h2>{item.name}</h2>
                  <div className={style.read}>
                    <p>Read more</p>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default page;
