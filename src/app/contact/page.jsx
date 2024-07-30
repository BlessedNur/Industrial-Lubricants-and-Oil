"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

function Page() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={{
        0: {
          items: 1,
        },
        1024: {
          items: 3,
          itemsFit: "contain",
        },
      }}
    />
  );
}

export default Page;
