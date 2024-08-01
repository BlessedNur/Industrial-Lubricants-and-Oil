import React, { useEffect, useState, useRef } from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Banner from "../Banner/Banner";
import useMediaQuery from "../UseMediaQuery";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuS, setMenuS] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const mobile = useMediaQuery("(max-width:868px)");

  const searchRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setIsScrollingUp(currentScrollY < lastScrollY);
      setIsScrolled(currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <section className={style.mainNav}>
      <div className={`${style.mobileMenu} ${menu && style.show}`}>
        <ul>
          <li>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Products</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Sevices</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
      </div>
      <section className={style.nav}>
        <div className={style.logo}>
          <Image
            width={1000}
            height={1000}
            src={"/images/Untitled_Project__1_-removebg-preview.png"}
          />
        </div>
        <label className={`burger ${menu && style.rotate}`} for="burger">
          <input
            type="checkbox"
            id="burger"
            checked={menu}
            onClick={() => setMenu((prev) => !prev)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={style.ul}>
          <li className={style.product}>
            <Link href={""}>Products</Link>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            <div className={style.dropdown}>
              <ul>
                <li>Gear Oils</li>
                <li>Grease</li>
                <li>Tractor Hydrauic Fluids</li>
                <li>Transmission</li>
                <li>TIRE</li>
                <li>Engine Lubricants</li>
              </ul>
            </div>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Services</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
          <div className={style.search}>
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </ul>
      </section>
    </section>
  );
}

export default Navbar;
