"use client"
import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";

function Page() {
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
        textIntro={"Hear What Our Clients Have to Say"}
      />
      <Footer />
    </section>
  );
}

export default Page;
