import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
function Footer() {
  const navigate = useRouter();
  const path = usePathname();

  return (
    <section className={style.footer}>
      <div className={style.topFooter}>
        <div className={style.col}>
          <div className={style.logo} onClick={() => navigate.push("/")}>
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
          <li className={`${path === "/" && style.active}`}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={`${path === "/brands" && style.active}`}>
            <Link href={"/products"}>Products</Link>
          </li>
          <li className={`${path === "/news" && style.active}`}>
            <Link href={"/news"}>News</Link>
          </li>
          <li className={`${path === "/reviews" && style.active}`}>
            <Link href={"/reviews"}>Reviews</Link>
          </li>
          <li className={`${path === "/about" && style.active}`}>
            <Link href={"/about"}>About us</Link>
          </li>
          <li className={`${path === "/contact" && style.active}`}>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className={style.location}>
          <h2>Find us</h2>
          <div className={style.line}>
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
            <Link
              href="https://www.google.com/maps?q=5702+General+Washington+Dr+F,+Alexandria,+VA+22312,+United+States"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              5702 General Washington Dr F, Alexandria, VA 22312, United States
            </Link>
          </div>
          <iframe
            src="https://www.google.com/maps?q=5702+General+Washington+Dr+F,+Alexandria,+VA+22312,+United+States&output=embed"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          <h2>Contact us</h2>
          
          <div className={style.line}>
            <i class="fa-brands fa-whatsapp"></i>{" "}
            <Link href="https://wa.me/12082786426">+1-208-278-6426</Link>{" "}
          </div>
          <div className={style.line}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <Link href="mailto:contactsebwholesale@gmail.com">
              contactsebwholesale@gmail.com
            </Link>
          </div>
        </div>

        <div></div>
      </div>
      <div className={style.bot}>
        &copy;{" "}
        <span> {new Date().getFullYear()} SEB WHOLESALE DISTRIBUTORS INC </span>
        . All Rights Reserved.
      </div>
    </section>
  );
}

export default Footer;
