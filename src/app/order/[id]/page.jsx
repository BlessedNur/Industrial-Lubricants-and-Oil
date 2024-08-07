"use client";
import React, { useEffect, useState } from "react";
import { allProducts } from "@/components/allProducts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import style from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function OrderPage({ params }) {
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    delivery: "Yes",
    paymentMethod: "",
    message: "",
  });
  const id = decodeURIComponent(params.id);
  const navigate = useRouter();

  useEffect(() => {
    const foundProduct = allProducts.find((product) => product.name === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <section>
        <Navbar />
        <Footer />
      </section>
    );
  }

  const { name, category, image, vehicle, flashPoints, liquidVolume, size } =
    product;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
      Order Details:
      - Product: ${name}
      - Brand / Category: ${category.join(", ")}
      - Vehicle: ${vehicle.join(", ")}
      - Flash Points: ${flashPoints}
      - Liquid Volume: ${liquidVolume}
      - Size: ${size}
      - Name: ${formData.firstName} ${formData.lastName}
      - Phone Number: ${formData.phoneNumber}
      - Email: ${formData.email}
      - Address: ${formData.address}
      - Delivery: ${formData.delivery}
      - Payment Method: ${formData.paymentMethod}
      - Message/Comment: ${formData.message}
    `;

    const whatsappUrl = `https://wa.me/12082786426?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section>
      <Navbar />
      <main className={style.order}>
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
              <h1>Order for {name}</h1>
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
            </div>
            <div className={style.right}>
              <Image src={image} width={1000} height={1000} alt={name} />
            </div>
          </div>
        </div>
        <div className={style.rightM}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.names}>
              <div>
                <input
                  autoFocus
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="address"
                placeholder="Address/State"
                name="address"
                onChange={handleChange}
              />
            </div>
            <label>Do you want delivery?</label>
            <div className={style.delivery}>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  value="Yes"
                  checked={formData.delivery === "Yes"}
                  onChange={handleChange}
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  value="No"
                  checked={formData.delivery === "No"}
                  onChange={handleChange}
                />
                <label>No</label>
              </div>
            </div>
            <div>
              <select
                id="paymentMethod"
                name="paymentMethod"
                required
                onChange={handleChange}
              >
                <option value="">Select Payment Method</option>
                <option value="Cashapp">Cashapp</option>
                <option value="Apple pay">Apple Pay</option>
                <option value="Google pay">Google Pay</option>
                <option value="Bank">Bank</option>
                <option value="Gift Card">Gift Card</option>
                <option value="Bacs">Bacs</option>
                <option value="Credit card">Credit card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="paypal">Paypal</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="litecoin">Litecoin</option>
                <option value="dogecoin">Dogecoin</option>
                <option value="stellar">Stellar</option>
                <option value="cheque">Cheque</option>
                <option value="zcash">Zcash</option>
                <option value="dash">Dash</option>
                <option value="zelle">Zelle</option>
                <option value="venmo">Venmo</option>
                <option value="chime">Chime</option>
              </select>
            </div>
            <div>
              <textarea
                id="message"
                placeholder="Message/Comment"
                name="message"
                required
                onChange={handleChange}
              />
            </div>
            <div className={style.submit}>
              <button type="submit">ORDER</button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default OrderPage;
