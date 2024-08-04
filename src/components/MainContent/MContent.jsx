import React from "react";
import style from "./MContent.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { brands } from "../brands";

function MContent() {
  const navigate = useRouter();
  const products = [
    {
      name: "gear oils",
      image:
        "/brands/valvoline-5w50-premium-synthetic-engine-oil-vr1-racing-a3b4-ford-gm-873434-210980-removebg-preview.png",
    },
    {
      name: "grease",
      image:
        "/brands/olympus_synthetic_gear_lubricant_75w90_pail_1-removebg-preview.png",
    },
    {
      name: "tractor hydraulic fluids",
      image: "/brands/61XbN4FQTNL-removebg-preview.png",
    },
    {
      name: "transmission",
      image: "/brands/chevron_1000_thf_pail-removebg-preview.png",
    },
    {
      name: "tire",
      image:
        "/brands/pneu-ete-COOPER-TIRES-DISCOVERER-AT3-removebg-preview (1).png",
    },
    {
      name: "Engine Lubricants ",
      image: "/brands/oil_pour1-624x500-1-removebg-preview.png",
    },
  ];

  const news = [
    {
      name: "Why GDI Engines Require Specialised Petrol Injector Cleaners",
      image:
        "https://www.jlmlubricants.com/wp-content/uploads/2023/08/Achtergrond-scaled.jpg",
    },
    {
      name: "How do I know if I have a GDI engine in my car?",
      image:
        "https://www.jlmlubricants.com/wp-content/uploads/2024/07/Turbo_GDI_engine.jpeg",
    },
    {
      name: "10 Common fault codes related to DPF problems, and how to deal with them.",
      image:
        "https://www.jlmlubricants.com/wp-content/uploads/2024/06/DPF-warning-light-1024x576-1.jpg",
    },
  ];
  return (
    <section className={style.content}>
      <div className={style.productSection}>
        <h1>PRODUCTS</h1>
        <div className={style.product}>
          {products.map((product, index) => (
            <div
              key={index}
              className={style.productItem}
              onClick={() => {
                navigate.push(
                  `/products/?category=${encodeURIComponent(product.name)}`
                );
              }}
            >
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
        <button onClick={() => navigate.push("/products")}>
          Go to products
        </button>
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
            Proudly Made in The US, SEB WHOLESALE DISTRIBUTORS INC, develops and
            manufactures a wide range of premium fuel additives and lubricants.
            Fuelled by an unwavering commitment to quality and innovation, we
            constantly push the boundaries of lubricant and additive technology.
          </p>
          <p>
            All our products are developed with the latest technologies and the
            greatest care – fuel additives and lubricants for all cars.
          </p>
          <button onClick={() => navigate.push("/about")}>read more</button>
        </div>
      </div>
      <div className={style.news}>
        <div className={style.contentN}>
          <h1>latest news</h1>
          <div className={style.newsItems}>
            {news.map((item, index) => (
              <div className={style.card} key={index}>
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
            <button onClick={() => navigate.push("/about")}>
              Discover now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MContent;
