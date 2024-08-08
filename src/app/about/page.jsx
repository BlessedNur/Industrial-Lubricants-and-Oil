"use client";
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import style from './page.module.css'

const aboutContent = {
  paragraph1: "Seb Wholesale Distributors Inc is a lubricant distributor specializing in providing our customers with a comprehensive line of advanced lubrication solutions that enhance productivity and cost savings for increased profitability.",
  paragraph2: "Founded as Tri-County Petroleum in 1969, Seb Wholesale Distributors Inc has grown from a heating oil company to a comprehensive lubrication and contamination control solutions expert, serving a broad range of needs and industries. Our history is marked by consistent growth and expansion, which has significantly widened our scope of experience and capabilities as a lubricant distributor to include bulk distribution, lubrication services, repair and maintenance, contamination control, filtration and more. As a Seb Wholesale Distributors Inc customer, you will enjoy the advantages of our capabilities, along with outstanding customer service.",
  paragraph3: "In addition to comprehensive services, Seb Wholesale Distributors Inc offers you an unbeatable product selection as a lubricant distributor. We carry a wide range of Mobil products as well as our own brand of proprietary lubricants for unsurpassed quality and value.",
  paragraph4: "To learn more about how Seb Wholesale Distributors Inc can meet your needs as your lubricant distributor, we invite you to explore our website, or contact us to discuss your project."
};

function Page() {
  return (
    <section>
      <Navbar />
      <Banner 
        height={"80svh"} 
        img={"https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        presentPage={"about us"} 
        diff={true} 
        text={"about us"} 
      />
      <div className={style.about} style={{ padding: '20px' }}>
        {Object.values(aboutContent).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Page;
