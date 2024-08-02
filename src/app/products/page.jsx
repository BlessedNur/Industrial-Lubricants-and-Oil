"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const navigate = useRouter();
  return (
    <section>
      <Navbar />
      <Banner
        presentPage={"products"}
        text={"products"}
        height={"90svh"}
        extraText={"This is where you can browse products in this store."}
        diff={true}
        img={"/images/20221202-5S7A6269-scaled.jpg"}
      />
      <button onClick={()=>navigate.push(`/products/hello`)}>
        move
      </button>
      <Footer />
    </section>
  );
}

export default Page;
