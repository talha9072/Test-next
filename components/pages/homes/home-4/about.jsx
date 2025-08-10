"use client";

import { useState } from "react";
import Link from "next/link";
const about1 = "/assets/img/home/novum-about.webp";

const logos = [
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/unicef.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/agro.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/cashback.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/Gilan.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/tp.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/vey.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/baku.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/cybernet.png",
  "https://novum-ae.netlify.app//.netlify/images?url=/images/clients/pasha.png",
];

const About = () => {
  const [paused, setPaused] = useState(false);

  return (
    <>
      {/* === About section (unchanged) === */}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center flex-wrap-reverse gy-4">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about__four-content">
                <span className="subtitle-one">About us</span>
                <h2>Trusted by Leading Organizations Across Sectors</h2>
                <p>
                  From aviation and petroleum to finance, education, and
                  non-profits Novum delivers reliable, scalable digital
                  solutions for complex business environments. Our clients value
                  our ability to solve operational challenges with custom-built
                  platforms, AI integration, and cloud-native systems.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="about__four-image">
                <div className="">
                  <img className="image-1" src={about1} alt="About Novum" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Moving clients row right under About === */}
      <div className="row position-relative mt-1 clients-style-08">
        <div className="container">
          <div className="col-12 overflow-hidden">
            <div
              className="clients-marquee"
              aria-hidden="true"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{ ["--play"]: paused ? "paused" : "running" }}
            >
              <ul className="clients-track">
                {/* first loop */}
                {logos.map((src, i) => (
                  <li className="clients-item" key={`loop1-${i}`}>
                    <img src={src} className="h-50px" alt="" />
                  </li>
                ))}
                {/* duplicate loop for seamless scroll */}
                {logos.map((src, i) => (
                  <li className="clients-item" key={`loop2-${i}`}>
                    <img src={src} className="h-50px" alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        
      `}</style>
    </>
  );
};

export default About;
