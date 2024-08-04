"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";
import style from "./page.module.css";
import { allProducts } from "@/components/allProducts";
import Image from "next/image";

function Page() {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState(20);
  const navigate = useRouter();
  const searchParams = useSearchParams();
  let searchCategory = searchParams.get("category");

  useEffect(() => {
    if (searchCategory) {
      setCategory(searchCategory.toLowerCase());
    }
  }, [searchCategory]);

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      const isInCategory = category
        ? product.category.includes(category)
        : true;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return isInCategory && matchesSearch;
    });
    setSearchedProducts(filteredProducts);
  }, [searchValue, category]);

  useEffect(() => {
    setDisplayedProducts(searchedProducts.slice(0, productsToShow));
  }, [searchedProducts, productsToShow]);

  const handleChange = (event) => {
    setCategory(event.target.value.toLowerCase());
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const loadMoreProducts = () => {
    setProductsToShow((prev) => prev + 20);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
              <option value="">Category</option>
              <option value="mobil 1">Mobil 1</option>
              <option value="castrol">Castrol</option>
              <option value="total quartz">Total Quartz</option>
              <option value="valvoline">Valvoline</option>
              <option value="gear oil">Gear oils</option>
              <option value="grease">Grease</option>
              <option value="tractor hydraulic fluids">
                Tractor Hydraulic Fluids
              </option>
              <option value="transmission">Transmission</option>
              <option value="tire">TIRES</option>
              <option value="filteration">Filters</option>
              <option value="engine coolant">Engine Coolant</option>
              <option value="engine lubricants">Engine Lubricants</option>
              <option value="industrial lubricants">Industrial Lubricants</option>
            </select>
            <div className={style.search}>
              <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search.."
              />
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className={style.product}>
            {displayedProducts.length === 0 ? (
              <p
                style={{
                  textTransform: "uppercase",
                  fontStyle: "italic",
                  fontSize: "30px",
                  color: "white",
                  fontWeight: "800",
                }}
              >
                No products found
              </p>
            ) : (
              displayedProducts.map((product, index) => (
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
            )}
          </div>
          {displayedProducts.length < searchedProducts.length && (
            <button className={style.loadMore} onClick={loadMoreProducts}>
              Load more products
            </button>
          )}
        </div>
        <Footer />
      </section>
    </Suspense>
  );
}

export default Page;
