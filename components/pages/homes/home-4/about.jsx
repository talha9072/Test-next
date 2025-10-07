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
                <h2 className="mb-4">Trusted by Leading Organizations Across Sectors</h2>
                <p className="mb-2">
                  From aviation and petroleum to finance, education, and
                  non-profits Novum delivers reliable, scalable digital
                  solutions for complex business environments. Our clients value
                  our ability to solve operational challenges with custom-built
                  platforms, AI integration, and cloud-native systems.
                </p>
                <p className="mb-2">
                  As the business landscape evolves and market demands shift,
                  companies face increasingly complex challenges that call for
                  advanced digital solutions. Novum offers a comprehensive suite
                  of services—including data warehousing, big data
                  visualizations, custom software development, and enterprise
                  resource planning (ERP) systems—designed to enhance
                  decision-making, optimize processes, and drive business value
                  within your organization.
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
