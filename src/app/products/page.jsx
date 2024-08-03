"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "./page.module.css";
import { allProducts } from "@/components/allProducts";
import Image from "next/image";

function Page() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [SearchedProducts, setSearchedProducts] = useState([]);
  const navigate = useRouter();
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory !== "category") {
      navigate.push(`/products/${selectedCategory}`);
    }
  };
  const path = usePathname();
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchedProducts(filteredProducts);
  };
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
      <div className={style.main}>
        <div className={style.category}>
          <h1>
            Choose your <br /> category
          </h1>
          <select name="" value={category} id="" onChange={handleChange}>
            <option value="Category" selected>
              Category
            </option>
            <option value="Gear oil">Gear oils</option>
            <option value="Grease">Grease</option>
            <option value="Tractor Hydraulic Fluids">
              Tractor Hydraulic Fluids
            </option>
            <option value="Transmission">Transmission</option>
            <option value="TIRES">TIRES</option>
            <option value="Engine Lubricants">Engine Lubricants</option>
          </select>
          <div className={style.search}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search.."
            />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className={style.product}>
          {SearchedProducts.length === 0
            ? allProducts.map((product, index) => (
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
              ))
            : SearchedProducts.map((product, index) => (
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
      </div>
      <Footer />
    </section>
  );
}

export default Page;
