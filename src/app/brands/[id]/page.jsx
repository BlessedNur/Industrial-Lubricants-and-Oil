"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import { brands } from "@/components/brands";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { allProducts } from "@/components/allProducts";

function Page({ params }) {
  const navigate = useRouter();
  const [activeB, setActiveB] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const name = decodeURIComponent(params.id);
  console.log("stress");
  console.log(relatedProducts);
  useEffect(() => {
    let foundP = brands.find((brand) => brand.name === name);
    setActiveB(foundP);
    if (foundP) {
      let related = allProducts.filter((p) => p.category.includes(name));
      setRelatedProducts(related);
    }
  }, [name]);

  if (!activeB) return <p>Loading...</p>;

  return (
    <section>
      <Navbar />
      <div className={style.info}>
        <div className={style.content}>
          <div className={style.left}>
            <div className={style.path}>
              <p onClick={() => navigate.push("/")}>Home</p>
              <p>{"»"}</p>
              <p onClick={() => navigate.push("/brands")}>Brands</p>
              <p>{"»"}</p>
              <p>{name}</p>
            </div>
            <h1>{name}</h1>
            <div className={style.divs}>
              <p>Founded</p>
              <p>:</p>
              <p>{activeB.founded}</p>
            </div>
            <div className={style.divs}>
              <p>Headquarters</p>
              <p>:</p>
              <p>{activeB.country}</p>
            </div>

            <button
              onClick={() => {
                navigate.push(
                  `/products?category=${encodeURIComponent(activeB.name)}`
                );
              }}
            >
              VIEW PRODUCTS
            </button>
          </div>
          <div className={style.right}>
            <Image src={activeB.image} width={1000} height={1000} alt={name} />
          </div>
        </div>
      </div>
      <section className={style.main}>
        <div className={style.descriptions}>
          <h1>History</h1>
          <p>{activeB.history}</p>
          {relatedProducts.length > 0 && (
            <>
              <h1>Related products</h1>
              <div className={style.product}>
                {relatedProducts.map((product, index) => (
                  <div
                    key={index}
                    className={style.productItem}
                    onClick={() => {
                      navigate.push(`/${encodeURIComponent(product.name)}`);
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
            </>
          )}
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default Page;
