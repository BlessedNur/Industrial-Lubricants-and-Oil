"use client";
import React, { useEffect, useState } from "react";
import { allProducts } from "@/components/allProducts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const id = decodeURIComponent(params.id);
  const [product, setProduct] = useState(null);
  const navigate = useRouter();

  useEffect(() => {
    const foundProduct = allProducts.find((product) => product.name === id);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = allProducts.filter(
        (p) =>
          p.category.some((cat) => foundProduct.category.includes(cat)) &&
          p.name !== foundProduct.name
      );
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <section>
        <Navbar />
        <Footer />
      </section>
    );
  }

  const {
    name,
    category,
    image,
    description,
    vehicle,
    flashPoints,
    liquidVolume,
    size,
    features,
  } = product;

  let intro, attributesSection, details, application;

  if (typeof description === "string") {
    intro = description;
  } else {
    ({ intro, attributesSection, details, application } = description || {});
  }

  const hasAttributes =
    attributesSection &&
    attributesSection.attributes &&
    attributesSection.attributes.some((attr) => attr);
  const hasFeatures = features && features.some((feature) => feature);
  const hasDetails =
    details && details.detail && details.detail.some((detail) => detail);
  const hasApplications = application && application.some((app) => app);

  return (
    <section>
      <Navbar />
      <div className={style.info}>
        <div className={style.content}>
          <div className={style.left}>
            <div className={style.path}>
              <p onClick={() => navigate.push("/")}>Home</p>
              <p>{"»"}</p>
              <p onClick={() => navigate.push("/products")}>Products</p>
              <p>{"»"}</p>
              <p>{name}</p>
            </div>
            <h1>{name}</h1>
            {category.length > 0 && category[0] && (
              <div>
                <h2>Brand / Category</h2>
                <h2>:</h2>
                <h2>{category.join(", ")}</h2>
              </div>
            )}
            {vehicle && vehicle.length > 0 && vehicle[0] && (
              <div>
                <h2>Vehicle</h2>
                <h2>:</h2>
                <h2>{vehicle.join(", ")}</h2>
              </div>
            )}
            {flashPoints && (
              <div>
                <h2>Flash Points</h2>
                <h2>:</h2>
                <h2>{flashPoints}</h2>
              </div>
            )}
            {liquidVolume && (
              <div>
                <h2>Liquid Volume</h2>
                <h2>:</h2>
                <h2>{liquidVolume}</h2>
              </div>
            )}
            {size && (
              <div>
                <h2>Size</h2>
                <h2>:</h2>
                <h2>{size}</h2>
              </div>
            )}
            <button
              onClick={() =>
                navigate.push(
                  `/order/${encodeURIComponent(product.name)}`
                )
              }
            >
              PURCHASE
            </button>
          </div>
          <div className={style.right}>
            <Image src={image} width={1000} height={1000} alt={name} />
          </div>
        </div>
      </div>
      <section className={style.main}>
        <div className={style.descriptions}>
          {intro && (
            <>
              <h1>Description</h1>
              <p>{intro}</p>
            </>
          )}
          {hasAttributes && (
            <div>
              {(attributesSection.intro || attributesSection.attributes[0]) && (
                <h2>Attribute</h2>
              )}
              {attributesSection.intro && (
                <p className={style.intro}>{attributesSection.intro}</p>
              )}
              <ul>
                {attributesSection.attributes.map((attribute, index) =>
                  attribute ? (
                    <li key={index}>
                      <i
                        className="fusion-li-icon fa-tint fas"
                        aria-hidden="true"
                      ></i>
                      <p>{attribute}</p>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
          {hasFeatures && (
            <div>
              <h2>Features</h2>
              <ul>
                {features.map((feature, index) =>
                  feature ? (
                    <li key={index}>
                      <i
                        className="fusion-li-icon fa-tint fas"
                        aria-hidden="true"
                      ></i>
                      <p>{feature}</p>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
          {description.features && description.features.length > 0 && (
            <div>
              <h2>Features</h2>
              <ul>
                {description.features.map((feature, index) =>
                  feature ? (
                    <li key={index}>
                      <i
                        className="fusion-li-icon fa-tint fas"
                        aria-hidden="true"
                      ></i>
                      <p>{feature}</p>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
          {hasDetails && (
            <div>
              {details.intro && (
                <h2>Specifications, Approvals & Recommendations</h2>
              )}
              {details.intro && <p className={style.intro}>{details.intro}</p>}
              <ul>
                {details.detail.map((detail, index) =>
                  detail ? (
                    <li key={index}>
                      <i
                        className="fusion-li-icon fa-tint fas"
                        aria-hidden="true"
                      ></i>
                      <p>{detail}</p>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
          {hasApplications && (
            <div>
              <h2>Application</h2>
              <ul>
                {application.map((app, index) =>
                  app ? (
                    <li key={index}>
                      <i
                        className="fusion-li-icon fa-tint fas"
                        aria-hidden="true"
                      ></i>
                      <p>{app}</p>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
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
