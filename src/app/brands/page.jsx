"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { brands } from "@/components/brands";
import style from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Page() {
  const navigate = useRouter();
  return (
    <section>
      <Navbar />
      <Banner
        text={"Explore Our Trusted Brands"}
        diff={true}
        presentPage={"Products"}
        extraText={
          "Explore our selection of top motor oil and lubricant brands, each with a legacy of excellence and reliability."
        }
        top={"-80%"}
        img={
          "https://images.pexels.com/photos/3855470/pexels-photo-3855470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        height={"100svh"}
      />
      <section className={style.brands}>
        <h2>Produts</h2>
        <div className={style.aBrands}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className={style.productItem}
              onClick={() => {
                navigate.push(`/brands/${encodeURIComponent(brand.name)}`);
              }}
            >
              <div className={style.image}>
                <img src={brand.image} alt={brand.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Page;
