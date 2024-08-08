import React from "react";
import style from "./MContent.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { brands } from "../brands";
import Reviews from "@/components/Reviews/Reviews";


export const news = [
  {
    name: "Why GDI Engines Require Specialised Petrol Injector Cleaners",
    image:
      "https://www.jlmlubricants.com/wp-content/uploads/2023/08/Achtergrond-scaled.jpg",
    text: "Gasoline Direct Injection (GDI) engines have revolutionised the automotive industry by offering improved fuel efficiency and enhanced performance. However, these technological advancements come with their own set of challenges, particularly concerning carbon deposit buildup. Unlike traditional Multi-Port Injection (MPI) engines, GDI engines are more prone to specific types of deposits that require dedicated cleaning solutions. In this article, we’ll explore why GDI deposits need a specialised petrol injector cleaner and how it differs from the commonly used injector cleaning additives. ",
    codes: [
      {
        code_description: "Multi-Port Injection (MPI) Engines",
        details:
          "In MPI engines, fuel is injected into the intake manifold where it mixes with air before entering the combustion chamber. This process allows fuel to wash over the intake valves, helping to keep them relatively clean. Traditional injector cleaning additives from SEB Wholesale Distributors Inc. are designed to address deposits in the intake manifold and on the injectors, ensuring smooth fuel delivery and combustion.",
      },
      {
        code_description: "Gasoline Direct Injection (GDI) Engines",
        details:
          "In GDI engines, fuel is injected directly into the combustion chamber at high pressure. This design improves fuel atomization and combustion efficiency, leading to better performance and fuel economy. However, because fuel does not pass over the intake valves, these valves are more susceptible to carbon buildup. This buildup can significantly impact engine performance, causing rough idling, reduced power, and increased emissions.",
      },
      {
        code_description: "Carbon Buildup on Intake Valves",
        details:
          "One of the primary issues with GDI engines is the accumulation of carbon deposits on the intake valves. Since these valves are not exposed to fuel, they do not benefit from the cleaning properties of traditional fuel additives. Over time, oil vapors from the crankcase ventilation system and exhaust gas recirculation (EGR) systems can lead to the formation of stubborn carbon deposits on the intake valves. SEB Wholesale Distributors Inc.'s Direct Injection Valve Cleaner is specifically designed to effectively remove these typical GDI deposits.",
      },
      {
        code_description: "Injector Deposits",
        details:
          "GDI injectors, which operate at much higher pressures than MPI injectors, are also prone to deposits. These deposits can affect the spray pattern and fuel atomisation, leading to incomplete combustion, increased emissions, and poor engine performance.",
      },
      {
        code_description: "Targeted Cleaning Formulations",
        details:
          "Dedicated petrol injector cleaners for GDI engines from SEB Wholesale Distributors Inc. are specifically formulated to address the unique challenges posed by direct injection technology. These cleaners contain powerful detergents and solvents that can effectively dissolve and remove carbon deposits from both the injectors and the intake valves.",
      },
      {
        code_description: "High-Pressure System Compatibility",
        details:
          "GDI injector cleaners from SEB Wholesale Distributors Inc. are designed to work under the high-pressure conditions found in GDI systems. This ensures that the additives can reach and clean all critical components without causing damage or leaving residues that might interfere with the engine’s operation.",
      },
      {
        code_description: "Enhanced Combustion Efficiency",
        details:
          "By thoroughly cleaning the injectors and intake valves, GDI-specific cleaners from SEB Wholesale Distributors Inc. help restore optimal fuel atomisation and combustion efficiency. This leads to improved engine performance, reduced emissions, and better fuel economy.",
      },
      {
        code_description: "Conclusion: Investing in the Right Cleaner",
        details:
          "The advanced technology of GDI engines necessitates a more specialised approach to maintenance, particularly when it comes to dealing with deposits. While traditional injector cleaning additives are effective for MPI engines, they fall short in addressing the unique challenges faced by GDI systems. Investing in a dedicated GDI petrol injector cleaner from SEB Wholesale Distributors Inc. ensures that your engine remains clean, efficient, and high performing.",
      },
    ],
  },
  {
    name: "How do I know if I have a GDI engine in my car?",
    image:
      "https://www.jlmlubricants.com/wp-content/uploads/2024/07/Turbo_GDI_engine.jpeg",
    text: "A GDI engine (Gasoline Direct Injection) is a type of internal combustion engine where fuel is injected directly into the combustion chamber, rather than mixing with air in the intake manifold like in traditional fuel injection systems. This technology offers several benefits, including improved fuel efficiency, enhanced performance, and reduced emissions. Before pointing out how you can identify a GDI engine, let’s look at a GDI engine’s key benefits. ",
    codes: [
      {
        code_description: "Direct Fuel Injection",
        details:
          "Fuel is injected directly into the combustion chamber, allowing for a more precise air-fuel mixture and more efficient combustion.",
      },
      {
        code_description: "Improved Fuel Efficiency",
        details:
          "The precise control over the air-fuel mixture leads to better fuel economy compared to conventional fuel injection systems.",
      },
      {
        code_description: "Increased Power",
        details:
          "GDI engines can utilize higher compression ratios without the risk of knocking (pre-ignition), resulting in greater power output.",
      },
      {
        code_description: "Lower Emissions",
        details:
          "More efficient combustion processes reduce the emission of harmful gases, such as CO2.",
      },
      {
        code_description: "Vehicle Manual and Specifications",
        details:
          "Check the vehicle’s owner’s manual or the manufacturer’s specifications. GDI engines are often labeled with terms like 'GDI,' 'T-GDI' (Turbocharged Gasoline Direct Injection), 'FSI' (Fuel Stratified Injection, used by VAG such as Volkswagen, Seat, Audi and Porsche), 'TFSI' (Turbocharged Fuel Stratified Injection, also VAG), 'CGI' (Charged Gasoline Injection used by Mercedes Benz) or 'SIDI' (Spark Ignited Gasoline Injection, Opel models).",
      },
      {
        code_description: "Under the Hood",
        details:
          "Inspecting the engine bay can provide clues. Look for fuel injectors mounted directly on the cylinder head, as opposed to traditional injectors located in the intake manifold.",
      },
      {
        code_description: "Badges and Emblems",
        details:
          "Some cars have badges or emblems on the exterior, typically on the trunk or front fenders, indicating that they have a GDI engine.",
      },
      {
        code_description: "Diagnostic Tools",
        details:
          "Modern vehicles are equipped with an OBD-II port that can provide diagnostic information. Using a suitable OBD-II scanner, you can check if the car is equipped with a GDI system.",
      },
    ],
  },
  {
    name: "10 Common fault codes related to DPF problems, and how to deal with them.",
    image:
      "https://www.jlmlubricants.com/wp-content/uploads/2024/06/DPF-warning-light-1024x576-1.jpg",
    text: "Diesel Particulate Filters (DPFs) are crucial for reducing emissions in diesel engines, but they can encounter issues that trigger fault codes and affect performance. This article examines ten common DPF-related fault codes, explaining their causes and offering practical solutions. Whether you’re a mechanic or a vehicle owner, this guide will help you address these problems efficiently and keep your engine running smoothly.",
    codes: [
      {
        code_description:
          "P2002 – Diesel Particulate Filter Efficiency Below Threshold",
        details:
          "This code indicates that the DPF is not functioning efficiently, likely due to excessive soot buildup. Solutions include performing a highway drive after adding SEB Wholesale Distributors Inc. DPF Cleaner fuel additive to initiate a proper regeneration, cleaning the DPF with SEB’s 2-stage DPF Cleaning Treatment, or replacing it if cleaning is ineffective.",
      },
      {
        code_description:
          "P2463 – Diesel Particulate Filter Restriction – Soot Accumulation",
        details:
          "This code indicates that the DPF is becoming restricted due to excessive soot accumulation. Solutions include performing a highway drive after adding SEB Wholesale Distributors Inc. DPF Cleaner fuel additive to initiate a proper regeneration, cleaning the DPF with SEB’s 2-stage DPF Cleaning Treatment, or replacing it if cleaning is ineffective.",
      },
      {
        code_description:
          "P242F – Diesel Particulate Filter Regeneration Incomplete",
        details:
          "This code indicates that the DPF regeneration process did not complete successfully. Check for underlying issues such as faulty sensors, injector problems, or exhaust leaks that may be preventing proper regeneration. SEB Wholesale Distributors Inc. DPF ReGen Plus fuel additive will assist the DPF to complete a proper regeneration cycle.",
      },
      {
        code_description:
          "P244A – Diesel Particulate Filter Differential Pressure Too Low",
        details:
          "This code indicates that the pressure difference across the DPF is too low, which could be due to a faulty differential pressure sensor, clogged DPF, or exhaust system leaks. Inspect and replace the sensor if necessary, and clean or replace the DPF as needed.",
      },
      {
        code_description:
          "P2458 – Diesel Particulate Filter Regeneration Duration",
        details:
          "This code indicates that the duration of DPF regeneration is too long, possibly due to excessive soot accumulation or inefficient regeneration. Check for proper airflow, injector operation, and exhaust system integrity. SEB Wholesale Distributors Inc. DPF ReGen Plus fuel additive will assist the DPF to complete a proper regeneration cycle.",
      },
      {
        code_description:
          "P2459 – Diesel Particulate Filter Regeneration Frequency",
        details:
          "This code indicates that the frequency of DPF regeneration is too high, which could be caused by frequent short trips or other driving patterns that don’t allow for proper regeneration. Educate the vehicle owner on driving habits that facilitate DPF regeneration.",
      },
      {
        code_description:
          "P246C – Diesel Particulate Filter – Soot Accumulation for Bank 1",
        details:
          "This code specifies which bank of cylinders is experiencing soot accumulation in the DPF. Follow similar procedures as other codes related to soot accumulation, such as performing a highway drive after adding SEB Wholesale Distributors Inc. DPF Cleaner fuel additive to initiate a proper regeneration, cleaning the DPF with SEB’s 2-stage DPF Cleaning Treatment, or replacing it if cleaning is ineffective.",
      },
      {
        code_description:
          "P246B – Diesel Particulate Filter – Soot Accumulation for Bank 2",
        details:
          "Like P246C but indicates the other bank of cylinders experiencing soot accumulation.",
      },
      {
        code_description:
          "P2452 – Diesel Particulate Filter Pressure Sensor Circuit Low",
        details:
          "This code indicates a low voltage signal from the DPF pressure sensor, potentially due to a wiring issue or sensor failure. Check the sensor wiring and connections and replace the sensor if necessary.",
      },
      {
        code_description:
          "P2453 – Diesel Particulate Filter Pressure Sensor Circuit High",
        details:
          "This code indicates a high voltage signal from the DPF pressure sensor, which could also be caused by wiring issues or sensor failure. Check the sensor wiring and connections and replace the sensor if necessary.",
      },
    ],
  },
];
function MContent() {
  const navigate = useRouter();
  const products = [
    {
      name: "gear oils",
      image:
        "/brands/valvoline-5w50-premium-synthetic-engine-oil-vr1-racing-a3b4-ford-gm-873434-210980-removebg-preview.png",
    },
    {
      name: "grease",
      image:
        "/brands/olympus_synthetic_gear_lubricant_75w90_pail_1-removebg-preview.png",
    },
    {
      name: "tractor hydraulic fluids",
      image: "/brands/61XbN4FQTNL-removebg-preview.png",
    },
    {
      name: "transmission",
      image: "/brands/chevron_1000_thf_pail-removebg-preview.png",
    },
    {
      name: "tire",
      image:
        "/brands/pneu-ete-COOPER-TIRES-DISCOVERER-AT3-removebg-preview (1).png",
    },
    {
      name: "Engine Lubricants ",
      image: "/brands/oil_pour1-624x500-1-removebg-preview.png",
    },
  ];

  return (
    <section className={style.content}>
      <div className={style.productSection}>
        <h1>PRODUCTS</h1>
        <div className={style.product}>
          {products.map((product, index) => (
            <div key={index} className={style.productItem}>
              <div className={style.image}>
                <img src={product.image} alt={product.name} />
              </div>
              <p>{product.name}</p>
              <div className={style.icon}>
                <Image
                  width={1000}
                  height={1000}
                  src={"/images/Icon-feather-arrow-down-right.svg"}
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => navigate.push("/products")}>
          Go to products
        </button>
      </div>
      <div className={style.aboutUs}>
        <div className={style.left}>
          <Image
            src={"/images/DSC02345-1200x1800.jpg"}
            width={1000}
            height={1000}
          />
        </div>
        <div className={style.right}>
          <h1>about us</h1>
          <p>
            Proudly Made in The US, SEB WHOLESALE DISTRIBUTORS INC, develops and
            manufactures a wide range of premium fuel additives and lubricants.
            Fuelled by an unwavering commitment to quality and innovation, we
            constantly push the boundaries of lubricant and additive technology.
          </p>
          <p>
            All our products are developed with the latest technologies and the
            greatest care – fuel additives and lubricants for all cars.
          </p>
          <button onClick={() => navigate.push("/about")}>read more</button>
        </div>
      </div>
      {/* <div className={style.news}>
        <div className={style.contentN}>
          <h1>latest news</h1>
          <div className={style.newsItems}>
            {news.map((item, index) => (
              <div
                className={style.card}
                key={index}
                onClick={() =>
                  navigate.push(`/news/${encodeURIComponent(item.name)}`)
                }
              >
                <div className={style.imageC}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={style.infos}>
                  <h2>{item.name}</h2>
                  <div className={style.read}>
                    <p>Read more</p>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className={style.partners}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Partners</h1>
          <button onClick={() => navigate.push("/brands")}>Explore</button>
        </div>
        <div className={style.wrapper}>
          {brands.slice(0, 9).map((item, index) => (
            <div
              className={`${style.item} ${style["item" + index]}`}
              key={index}
            >
              <img
                alt={"image"}
                src={item.image}
                width={500}
                height={500}
                className={style.carouselImage}
              />
            </div>
          ))}
        </div>
        <div className={`${style.wrapper} ${style.wrapperTwo}`}>
          {brands.slice(9, 19).map((item, index) => (
            <div
              className={`${style.item} ${style["item" + index]}`}
              key={index}
            >
              <img
                alt={"image"}
                src={item.image}
                width={500}
                height={500}
                className={style.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>
      <Reviews/>
      <div className={style.history}>
        <div className={style.texts}>
          <p>
            Since 2012, <span>SEB WHOLESALE DISTRIBUTORS INC</span> has been
            Importing and wholesaling high quality brands of car oil lubricants
            and coolants.
          </p>
          <div className={style.button}>
            <button onClick={() => navigate.push("/brands")}>
              Discover now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MContent;
