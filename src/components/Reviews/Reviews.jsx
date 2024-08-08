"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import style from "./Reviews.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const reviews = [
  {
    review: "This is a great addition to the products in my workshop. We continuously see fantastic results in the recovery of emissions and engine performance. The hydraulic fluids have drastically improved the efficiency of our machinery. The quality and reliability of these products are unmatched. We've also seen a significant reduction in maintenance costs, which is a huge plus.",
    name: "John Doe",
    subtitle: "Improved Efficiency and Reduced Costs"
  },
  {
    review: "The gear oils provided by SEB Wholesale Distributors Inc. are top-notch. My vehicles have never run smoother. Their lubricants have significantly reduced engine wear and tear. The transmission fluids have extended the lifespan of my equipment, saving me money in the long run. Highly recommended for anyone looking to improve their vehicle's performance.",
    name: "Jane Smith",
    subtitle: "Top-Notch Gear Oils for Smoother Rides"
  },
  {
    review: "I've been using SEB's lubricants for over a year now and the results are remarkable. The engine performance has improved, and emissions have reduced. Their grease products offer excellent adhesion and durability, perfect for my heavy machinery. The customer service is also outstanding, always ready to assist with any queries.",
    name: "Tom Brown",
    subtitle: "Remarkable Lubricants for Heavy Machinery"
  },
  {
    review: "SEB's hydraulic fluids are a game-changer. They have significantly boosted the efficiency of our machines. The quality of their products is evident in the improved performance and longevity of our equipment. The transmission fluids, in particular, have made a noticeable difference in the smoothness of gear shifts.",
    name: "Sarah Wilson",
    subtitle: "Game-Changing Hydraulic Fluids"
  },
  {
    review: "The engine lubricants from SEB Wholesale Distributors Inc. have exceeded my expectations. My car's engine runs smoother and quieter, and the fuel additives have improved mileage. The grease products are also fantastic, providing excellent protection and longevity for my equipment.",
    name: "Mike Johnson",
    subtitle: "Exceeding Expectations with Engine Lubricants"
  },
  {
    review: "I am extremely satisfied with SEB's product range. The gear oils have enhanced the performance of my vehicles, and the hydraulic fluids have improved the efficiency of my machinery. Their products are reliable, effective, and offer great value for money. Customer service is also very responsive and helpful.",
    name: "Emma Davis",
    subtitle: "Enhanced Performance and Great Value"
  },
  {
    review: "SEB Wholesale Distributors Inc. has been my go-to supplier for all automotive needs. The quality of their lubricants is unmatched, resulting in better engine performance and reduced maintenance costs. Their transmission fluids have also extended the lifespan of my equipment significantly.",
    name: "Robert Miller",
    subtitle: "My Go-To Supplier for Automotive Needs"
  },
  {
    review: "I've been using SEB's tire products for a while now, and I am very impressed with their quality. The tires provide a smooth and safe ride, and their durability is exceptional. The engine lubricants and gear oils have also improved the performance and longevity of my vehicles.",
    name: "Jessica Taylor",
    subtitle: "Smooth Rides with High-Quality Tires"
  },
  {
    review: "SEB's fuel additives have worked wonders for my car. The mileage has improved, and the engine runs more efficiently. The grease products offer excellent adhesion, making them perfect for my heavy machinery. Overall, very pleased with the quality and performance of their products.",
    name: "Chris Lee",
    subtitle: "Fuel Additives That Make a Difference"
  },
  {
    review: "The transmission fluids from SEB Wholesale Distributors Inc. have made a significant difference in the smoothness of my car's gear shifts. The hydraulic fluids have also boosted the efficiency of my machines. The customer service is exceptional, always ready to help with any issues.",
    name: "Karen Martinez",
    subtitle: "Smoother Gear Shifts and Efficient Machines"
  },
  {
    review: "I have been using SEB's engine lubricants for several months, and the difference is noticeable. The engine runs smoother and quieter, and the fuel additives have improved mileage. Their grease products are also top-quality, providing excellent protection for my equipment.",
    name: "David Hernandez",
    subtitle: "Top-Quality Lubricants for a Smoother Ride"
  },
  {
    review: "SEB Wholesale Distributors Inc. offers a great range of products that have significantly improved the performance of my workshop equipment. The hydraulic fluids are particularly effective, enhancing the efficiency and lifespan of my machines. The customer service is also very supportive and responsive.",
    name: "Laura Clark",
    subtitle: "Significant Improvement in Workshop Performance"
  },
  {
    review: "The gear oils from SEB have greatly improved the performance of my vehicles. The engine lubricants and transmission fluids have extended the lifespan of my equipment, saving me money on maintenance costs. The quality of their products is evident in the results I've seen.",
    name: "Daniel Lewis",
    subtitle: "High-Quality Gear Oils for Extended Equipment Life"
  },
  {
    review: "I am very impressed with the quality of SEB's lubricants. The engine performance has improved, and emissions have reduced significantly. The grease products are also excellent, providing long-lasting protection for my heavy machinery. Their customer service is top-notch, always ready to assist.",
    name: "Sophia Walker",
    subtitle: "Impressive Lubricants for Heavy Machinery"
  },
  {
    review: "SEB Wholesale Distributors Inc. provides reliable and effective products that keep my workshop running efficiently. The hydraulic fluids have improved the efficiency of my machines, and the transmission fluids have made gear shifts smoother. I highly recommend their products to anyone looking for quality and performance.",
    name: "James Hall",
    subtitle: "Reliable Products for Efficient Workshops"
  }
];


function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

   const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useRouter();
  return (
    <section>
    
      <div className={style.reviewContainer}>
        <div className={style.image}>
          <Image
            src={
              "/grease/customer-making-inspection-check-to-a-car-engine-r-2022-10-19-04-14-05-utc-800x533.jpg"
            }
            width={800}
            height={533}
            alt="Customer inspecting car engine"
          />
        </div>
        <div className={style.review} key={currentReviewIndex}>
          <h4>{reviews[currentReviewIndex].subtitle}</h4>
          <p>&quot;{reviews[currentReviewIndex].review}&quot;</p>
          <h4>{"-"} {reviews[currentReviewIndex].name}</h4>
          <div className={style.buttons}>
          <button className={style.prevButton} onClick={prevReview}>&#10094;</button>
        <button className={style.nextButton} onClick={nextReview}>&#10095;</button>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Reviews;
