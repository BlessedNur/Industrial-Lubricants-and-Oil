"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import MContent from "@/components/MainContent/MContent";
import Banner from "@/components/Banner/Banner";
export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        home={true}
        textIntro={true}
        button={true}
        img={
          "/images/auto-mechanic-fixing-car-on-lift-2022-02-02-04-48-28-utc-scaled.jpg"
        }
      />
      <MContent />
      <Footer />
    </>
  );
}
