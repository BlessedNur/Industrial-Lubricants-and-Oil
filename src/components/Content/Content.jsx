"use client";
import React, { useEffect, useState } from "react";
import style from "./Content.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useMediaQuery from "../UseMediaQuery";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
function Content() {
  const mobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    mobile && setProductsF(productsF.slice(0, 3));
  }, [mobile]);
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
  const [productsF, setProductsF] = useState([
    {
      name: "Philips 66 VersaTrans LV ATF",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/p66_atf_fs_versatrans_lv_atf-1.png",
    },
    {
      name: "Chevron Gear Oil GL-1 SAE 140",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/chevron_gear_oil_gl-1_sae_140_pail.jpg",
    },
    {
      name: "Bardahl XTG Gear Oil 75W90 Synthetic",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/52055-bardahl_xtg_75w90gl5-synthetic_5ltr.png",
    },
    {
      name: "Shell spirax S4 CX 10W",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/shell_spirax_s4_cx_10w_pail.jpg",
    },
    {
      name: "Shell Morilina S4 B 220",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/shell_morlina_s4_b_220_bearing_and_circulating_oil_pail.jpg",
    },
  ]);
  const [products, setProducts] = useState([
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/mobil-delvac_synthetic_gear_oil_75w-90_jug.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/chevron_delo_gear_esi_sae_80w-90_pail.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/chevron_multigear_ep-5_85w-140_pail.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/olympus_synthetic_gear_lubricant_80w140_pail_1.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/mobil-delvac_synthetic_gear_oil_75w-90_jug.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
    {
      title: "Mobil Delvac Syntethic Oil 75W-90",
      image:
        "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/mobil-delvac_synthetic_gear_oil_75w-90_jug.jpg",
      category: ["Automotive Gear oils", "Gear Oils"],
    },
  ]);

  return (
    <section className={style.main}>
      <div className={style.intro}>
        <h1>Trusted to Anticipate, Proven to Deliver</h1>
        <p>
          As the nation’s leading lubricant distributor, SEB WHOLESALE
          DISTRIBUTORS INC provides solutions across the industrial, commercial
          and passenger vehicle customer segments with an extensive and high
          quality product offering.
        </p>
      </div>
      <div className={style.info} data-aos={"fade-up"}>
        <div className={style.line}>
          <div className={style.image}>
            <Image
              width={1000}
              height={1000}
              src={"/images/free_shipping.png"}
            />
          </div>
          <div className={style.text}>
            <h2>Free Shipping</h2>
            <p>Free shipping on all of US order</p>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.image}>
            <Image width={1000} height={1000} src={"/images/support247.png"} />
          </div>
          <div className={style.text}>
            <h2>Support 24/7</h2>
            <p>Contact us 24 hours a day</p>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.image}>
            <Image width={1000} height={1000} src={"/images/money_back.png"} />
          </div>
          <div className={style.text}>
            <h2>100% Money back</h2>
            <p>You have 30 days to Return</p>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.image}>
            <Image
              width={1000}
              height={1000}
              src={"/images/payment_secure.png"}
            />
          </div>
          <div className={style.text}>
            <h2>Payment Secure</h2>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </div>
      <div className={style.findOut}>
        <div className={style.box} data-aos={"fade-up"}>
          <h1>BUY OUR PRODUCTS</h1>
          <p>
            Check out our full range of lubricants, including motor oils,
            greases, hydraulic fluids and more.
          </p>
          <button>BUY NOW</button>
        </div>
        <div className={style.box} data-aos={"fade-up"} data-aos-delay={100}>
          <h1>About us?</h1>
          <p>
            Product and Industry Knowledge. Superior Logistics. Performance
            Satisfaction.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className={style.productsR}>
        <h1>Our Products</h1>
        <div className={style.products}>
          <h2>GEAR OILS</h2>
          <OwlCarousel
            className={style.customCarousel}
            loop
            margin={10}
            nav
            draggable
            responsive={{
              0: {
                items: 2,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 5,
              },
            }}
          >
            {products.map((item, index) => (
              <div className={style.card} key={index}>
                <p>{item.title}</p>
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  alt={item.title}
                />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <div className={style.whyUs}>
        <div className={style.leftU}  data-aos={"zoom-in"}>
          <Image
            src={
              "https://saigon-tradingcorp.com/wp-content/uploads/2023/03/csm_Visual_OEWW_Small_604a00a8e1-1.webp"
            }
            width={1000}
            height={1000}
          />
        </div>
        <div className={style.rightU}  data-aos={"fade-up"}>
          <h1>WHY CHOOSE US?</h1>
          <p>
            At LubricantEZ, we pride ourselves on delivering top-tier lubricants
            designed to enhance the performance and longevity of your machinery.
            Our extensive range of high-quality products, including engine oils,
            industrial lubricants, and hydraulic fluids, ensures that we meet
            the diverse needs of our customers. We partner with trusted brands
            like Valvoline, Castrol, and Mobil to guarantee superior performance
            and reliability. Our dedicated team of experts offers personalized
            service and technical support, ensuring you get the right solution
            for your specific requirements. Choose LubricantEZ for unmatched
            quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>
      <div className={style.featuredProducts}>
        {productsF.map((item, index) => (
          <div className={style.cardF} key={index}>
            <div className={style.imageB}>
              <Image src={item.image} width={1000} height={1000} />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
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
    </section>
  );
}

export default Content;
