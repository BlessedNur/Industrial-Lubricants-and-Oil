"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { Toaster, toast } from "sonner";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <section>
      <Navbar />
      <Banner
        height={"80svh"}
        img={
          "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        presentPage={"contact"}
        diff={true}
        text={"Contact us"}
      />
      <div className={style.contact}>
        <div className={style.left}>
          <h2>Tel :</h2>

          <div className={style.line}>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <Link href="tel:+12082786426">+1-208-278-6426</Link>
          </div>
          
          <div className={style.line}>
            <i className="fa-brands fa-whatsapp"></i>{" "}
            <Link href="https://wa.me/12082786426">+1-208-278-6426</Link>{" "}
          </div>
        </div>
        <div className={style.right}>
          <h2>Tell us your message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <Toaster richColors position="top-right" />
    </section>
  );
}

export default Page;
