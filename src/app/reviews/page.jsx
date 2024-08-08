"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Reviews from "@/components/Reviews/Reviews";


function Page() {
  const navigate = useRouter();
  return (
    <section>
      <Navbar />
      <Banner
        height={"80svh"}
        img={
          "https://images.pexels.com/photos/7876667/pexels-photo-7876667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        presentPage={"reviews"}
        diff={true}
        text={"reviews"}
        extraText={"Hear What Our Clients Have to Say"}
      />
     <Reviews/>
      <div className={style.history}>
        <div className={style.texts}>
          <p>
            Since 2012, <span>SEB WHOLESALE DISTRIBUTORS INC</span> has been
            Importing and wholesaling high quality brands of car oil lubricants
            and coolants.
          </p>
          <div className={style.button}>
            <button onClick={() => navigate.push("/brands")}>
              Discover now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
