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
              src={"/images/Untitled_Project__2_-removebg-preview.png"}
            />
          </div>
        </div>

        <div className={style.subscribe}>
          <h2>Subscribe up for the newsletter</h2>
          <p>We’ll never share your email address with a third-party.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email address here .."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={style.botFooter}>
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
        <div className={style.location}>
          <h2>find us</h2>
          <div className={style.line}>
            <i class="fa fa-location-arrow" aria-hidden="true"></i>
            <Link href={""}>
              5702 General Washington Dr F, Alexandria, VA 22312, United States
            </Link>
          </div>
          <h2>Contact us</h2>
          <div className={style.line}>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <Link href={""}>+1-208-278-6426</Link>
          </div>
          <div className={style.line}>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <Link href={""}>company@example.com</Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className={style.bot}>
        &copy;{" "}
        <span> {new Date().getFullYear()} SEB WHOLESALE DISTRIBUTORS INC </span>.
        All Rights Reserved.
      </div>
    </section>
  );
}

export default Footer;
