"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const about1 = "/assets/img/home/about-3.png";

const logos = [
  "/assets/img/clients/unicef.png",
  "/assets/img/clients/agro.png",
  "/assets/img/clients/cashback.png",
  "/assets/img/clients/gilan.png",
  "/assets/img/clients/tp.png",
  "/assets/img/clients/vey.png",
  "/assets/img/clients/baku.png",
  "/assets/img/clients/cybernet.png",
  "/assets/img/clients/pasha.png",
];

const About = () => {
  const [paused, setPaused] = useState(false);

  return (
    <>
      {/* === About section === */}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse gy-4">
            
            {/* Left Text Section */}
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="about__four-content">
                <span className="subtitle-one">About us</span>
                {/* <h2 className="mb-4">Trusted by Leading Organizations Across Sectors</h2> */}
                <p className="mb-2">
                  As the business landscape evolves and market demands shift, companies face increasingly complex challenges that call for advanced digital solutions. Novum offers a comprehensive suite of services including data warehousing, big data visualizations, custom software development, and enterprise resource planning (ERP) systems designed to enhance decision-making, optimize processes, and drive business value within your organization.
                </p>
                <p className="mb-2">
                  By elevating management to a data-driven approach, we enable structured workflows and increased organizational efficiency. As a trusted Microsoft Solution Partner across multiple areas, we support SMBs and enterprise-level clients by implementing key Microsoft Cloud solutions in Data & AI, Business Applications, Apps and Innovation, and Modern Desktop.
With a strong market presence and extensive technical expertise, we provide high-value services, including data analytics, business process consulting in manufacturing, application development, crowd modeling, and demand planning, leveraging the latest in IoT and AI technologies. We have supported digital transformations in industries such as Consumer Goods, Health & Pharma, Telecommunications, Agriculture, Construction, Oil & Gas, and Government sectors, delivering impactful results across diverse sectors. 

                </p>
                <p className="mb-2"style={{ color: "#0D2B75" }}>
                  OUR SLOGAN REFLECTS GOALS, BELIEFS, KNOWLEDGE AND TRANSFORMATION THAT WE BRING INTO ORGANIZATIONS. WHAT WE DO CREATES LONG-LASTING VALUE.

                </p>
                
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="about__four-image text-center">
                <Image
                  src={about1} alt="About Novum" width={800} height={500} quality={100} priority
                  className="image-1 img-fluid rounded object-cover"
                  unoptimized={false}   // still let Next.js optimize
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default About;
