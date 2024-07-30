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
  const mobile = useMediaQuery("(max-width:768px)");

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
    <>
      {menu && <div className={style.dark}></div>}
      <div className={`${style.mobileMenu} ${menu && style.showMenu}`}>
        <div className={style.mobMenu}>
          <div className={style.top}>
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => setMenu(false)}
            ></i>
          </div>
          <ul>
            <li className={style.activeM}>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
            <li onClick={() => setMenuS((prev) => !prev)}>
              <Link href={""}>Products</Link>
              {menuS ? (
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              )}
            </li>
            <div className={`${style.subMenu} ${menuS && style.showSubMenu}`}>
              <ul>
                <li>
                  <Link href={""}>Gear Oils</Link>
                </li>
                <li>
                  <Link href={""}>Grease</Link>
                </li>
                <li>
                  <Link href={""}>Tractor</Link>
                </li>
                <li>
                  <Link href={""}>Transmission</Link>
                </li>
                <li>
                  <Link href={""}>TIRE</Link>
                </li>
                <li>
                  <Link href={""}>Engine Lubricants</Link>
                </li>
              </ul>
            </div>
            <li>
              <Link href={""}>Our Shop</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <section
        className={`${style.mainNav} ${
          isScrollingUp ? style.show : style.hide
        } ${isScrolled ? style.scrolled : ""} `}
      >
        <section className={`${style.nav} `}>
          {mobile ? (
            <div className={style.left}>
              <label
                className="burger"
                htmlFor="burger"
                onClick={() => setMenu(true)}
              >
                <input
                  type="checkbox"
                  id="burger"
                  checked={menu ? true : false}
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
              <div className={style.logo}>
                <Image
                  width={1000}
                  height={1000}
                  src={"/images/Screenshot__272_-removebg-preview.png"}
                  alt="Logo"
                />
              </div>
            </div>
          ) : (
            <div className={style.logo}>
              <Image
                width={1000}
                height={1000}
                src={"/images/Screenshot__272_-removebg-preview.png"}
                alt="Logo"
              />
            </div>
          )}
          <ul>
            <li className={style.active}>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
            <li>
              <Link href={""}>Products</Link>
            </li>
            <li>
              <Link href={""}>Our Shop</Link>
            </li>
            <li>
              <Link href={""}>Contact</Link>
            </li>
          </ul>
          <div className={style.search}>
            <input type="text" placeholder="Search product." />
            <i
              className="fa fa-search"
              aria-hidden="true"
              onClick={() => {
                mobile && setMobileSearch(true);
              }}
            ></i>
          </div>
          {mobile && (
            <div
              className={`${style.mobileSearch} ${
                mobileSearch && style.showMobileSearch
              }`}
              ref={searchRef}
            >
              <input type="text" placeholder="Search here.." name="" id="" />
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          )}
        </section>
      </section>
      <Banner />
    </>
  );
}

export default Navbar;
