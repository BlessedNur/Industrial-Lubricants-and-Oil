import React from "react";
import style from "./MContent.module.css";
import Image from "next/image";
function MContent() {
  const products = [
    {
      name: "Gear oils",
      image:
        "/brands/valvoline-5w50-premium-synthetic-engine-oil-vr1-racing-a3b4-ford-gm-873434-210980-removebg-preview.png",
    },
    {
      name: "Grease",
      image:
        "/brands/olympus_synthetic_gear_lubricant_75w90_pail_1-removebg-preview.png",
    },
    {
      name: "Tractor Hydraulic fluids",
      image: "/brands/61XbN4FQTNL-removebg-preview.png",
    },
    {
      name: "Transmission",
      image: "/brands/chevron_1000_thf_pail-removebg-preview.png",
    },
    {
      name: "TIRES",
      image:
        "/brands/pneu-ete-COOPER-TIRES-DISCOVERER-AT3-removebg-preview (1).png",
    },
    {
      name: "Engine lubricants ",
      image: "/brands/oil_pour1-624x500-1-removebg-preview.png",
    },
  ];
  const brands = [
    {
      name: "Castrol",
      image:
        "https://seeklogo.com/images/C/Castrol-logo-51F28CF5CF-seeklogo.com.png",
    },
    {
      name: "Liqui Moly",
      image:
        "https://seeklogo.com/images/L/Liqui_Moly-logo-3575A84F1F-seeklogo.com.png",
    },
    {
      name: "Shell",
      image:
        "https://seeklogo.com/images/S/shell-logo-25F8B6686F-seeklogo.com.png",
    },
    {
      name: "valvoline",
      image:
        "https://seeklogo.com/images/V/Valvoline_2005-logo-B4C3220497-seeklogo.com.png",
    },
    {
      name: "Motul",
      image:
        "https://seeklogo.com/images/M/Motul-logo-32F94A712B-seeklogo.com.png",
    },
    {
      name: "Total Quartz",
      image:
        "https://seeklogo.com/images/T/total-quartz-engine-oil-logo-F66E2CBFA2-seeklogo.com.png",
    },
    {
      name: "Mercedes",
      image:
        "https://seeklogo.com/images/M/mercedes-benz-logo-B29195852E-seeklogo.com.png",
    },
    {
      name: "Toyota",
      image:
        "https://seeklogo.com/images/T/Toyota-logo-16FFC40754-seeklogo.com.png",
    },
    {
      name: "Rotella",
      image:
        "https://seeklogo.com/images/S/shell-rotella-logo-65295AF074-seeklogo.com.png",
    },
    {
      name: "Kixx",
      image:
        "https://seeklogo.com/images/K/kixx-oil-logo-7A2F619814-seeklogo.com.png",
    },
    {
      name: "Quaker",
      image:
        "https://www.oil-store.co.uk/wp-content/uploads/2019/08/Quaker-Houghton.jpg",
    },
    {
      name: "Mobil",
      image:
        "https://seeklogo.com/images/M/Mobil-logo-5F9709CB9B-seeklogo.com.png",
    },
    {
      name: "Havoline",
      image:
        "https://seeklogo.com/images/H/Havoline-logo-B8AA367F2D-seeklogo.com.png",
    },
    {
      name: "Pennzoil",
      image:
        "https://seeklogo.com/images/P/Pennzoil-logo-032B096ECD-seeklogo.com.png",
    },
    {
      name: "Royal Purple",
      image:
        "https://seeklogo.com/images/R/royal-purple-logo-848889A7EB-seeklogo.com.png",
    },
    {
      name: "Servo Futura",
      image:
        "https://seeklogo.com/images/S/servo-logo-C5E0BA58BD-seeklogo.com.png",
    },
    {
      name: "Gulf Pride",
      image:
        "https://seeklogo.com/images/G/Gulf-logo-38314CE060-seeklogo.com.png",
    },
  ];
  return (
    <section className={style.content}>
      <div className={style.productSection}>
        <h1>PRODUCTS</h1>
        <div className={style.product}>
          {products.map((product, index) => (
            <div key={index} className={style.productItem}>
              <div className={style.image}>
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
              <div className={style.icon}>
                <Image
                  width={1000}
                  height={1000}
                  src={"/images/Icon-feather-arrow-down-right.svg"}
                />
              </div>
            </div>
          ))}
        </div>
        <button>Go to products</button>
      </div>
      <div className={style.aboutUs}>
        <div className={style.left}>
          <Image
            src={"/images/DSC02345-1200x1800.jpg"}
            width={1000}
            height={1000}
          />
        </div>
        <div className={style.right}>
          <h1>about us</h1>
          <p>
            Proudly Made in The Netherlands, JLM Lubricants designs, develops
            and manufactures a wide range of premium fuel additives and
            lubricants. Fuelled by an unwavering commitment to quality and
            innovation, we constantly push the boundaries of lubricant and
            additive technology.
          </p>
          <p>
            All our products are developed with the latest technologies and the
            greatest care – fuel additives and lubricants for all cars.
          </p>
          <button>read more</button>
        </div>
      </div>
      <div className={style.partners}>
        <h1>Our Brands</h1>
        <div className={style.wrapper}>
          {brands.slice(0, 9).map((item, index) => (
            <div
              className={`${style.item} ${style["item" + index]}`}
              key={index}
            >
              <img
                alt={"image"}
                src={item.image}
                width={500}
                height={500}
                className={style.carouselImage}
              />
            </div>
          ))}
        </div>
        <div className={`${style.wrapper} ${style.wrapperTwo}`}>
          {brands.slice(9, 19).map((item, index) => (
            <div
              className={`${style.item} ${style["item" + index]}`}
              key={index}
            >
              <img
                alt={"image"}
                src={item.image}
                width={500}
                height={500}
                className={style.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.history}>
        <div className={style.texts}>
          <p>
            Since 2012, <span>SEB WHOLESALE DISTRIBUTORS INC</span> has been
            Importing and wholesaling high quality brands of car oil lubricants
            and coolants.
          </p>
          <div className={style.button}>
            <button>Discover now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MContent;
