"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function Page({ params }) {
  const id = decodeURIComponent(params.id);

  // Descriptions for each product
  const descriptions = {
    "Gear Oils":
      "High-performance oils for smooth and efficient gear operation.",
    Grease: "Top-quality grease for superior lubrication and protection.",
    "Tractor Hydraulic Fluids":
      "Premium fluids for optimal tractor hydraulic system performance.",
    Transmission:
      "Advanced transmission fluids for enhanced vehicle performance.",
    TIRES: "Durable and reliable tires for all types of vehicles.",
    "Engine Lubricants":
      "Superior lubricants for engine protection and performance.",
  };

  const extraText =
    descriptions[id] || "This is where you can browse products in this store.";

  return (
    <section>
      <Navbar />
      <Banner
        presentPage={"products"}
        text={id}
        subNavigation={true}
        subPage={id}
        height={"90svh"}
        extraText={extraText}
        diff={true}
        img={"/images/garage-2022-03-04-05-37-52-utc-scaled.jpg"}
      />
      <Footer />
    </section>
  );
}

export default Page;
