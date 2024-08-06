"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import style from "./page.module.css";
import { news } from "@/components/MainContent/MContent";
function page({params }) {
  let qNews = decodeURIComponent(params.id);

  let FoundItem = news.find((item) => item.name === qNews);
  return (
    <section>
      <Navbar />
      <Banner
        height={"80svh"}
        img={FoundItem.image}
        presentPage={"news"}
        subNavigation={true}
        subPage={FoundItem.name}
        diff={true}
        text={FoundItem.name}
      />
      <section className={style.news}>
        <div className={style.info}>
          <p>{FoundItem.text}</p>
          <ol>
            {FoundItem.codes.map((code, index) => (
              <li key={index}>
                <h1>{code.code_description}</h1>
                <p>{code.details}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default page;
