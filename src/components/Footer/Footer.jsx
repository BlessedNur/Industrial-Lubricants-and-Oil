import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.topFooter}>
        <div className={style.col}>
          <div className={style.logo}>
            <Image
              width={1000}
              height={1000}
              src={"/images/Screenshot__272_-removebg-preview.png"}
            />
          </div>
        </div>
        <ul>
          <h2>Quick Links</h2>
          <li className={style.active}>
            <Link href={""}>Home</Link>
          </li>
          <li>
            <Link href={""}>Products</Link>
          </li>
          <li>
            <Link href={""}>Our shop</Link>
          </li>
          <li>
            <Link href={""}>About us</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
        <div className={style.subscribe}>
          <h2>Subscribe to our newsletter</h2>
          <p>We’ll never share your email address with a third-party.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className={style.location}>
          <div className={style.line}>
<i class="fa fa-location-arrow" aria-hidden="true"></i>
            <Link href={""}>
              5702 General Washington Dr F, Alexandria, VA 22312, United States
            </Link>
          </div>
          <div className={style.line}>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <Link href={""}>+1-208-278-6426</Link>
          </div>
          <div className={style.line}>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <Link href={""}>company@example.com</Link>
          </div>
        </div>
      </div>
      <div className={style.botFooter}>
        Copyright <span>Saigon Trading Corp {new Date().getFullYear()}</span>.
        All Rights Reserved.
      </div>
    </section>
  );
}

export default Footer;
