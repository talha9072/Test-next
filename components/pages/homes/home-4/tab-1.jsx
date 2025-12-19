"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Tab1() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playBtn = document.getElementById("copilotPlayBtn");
    const video = document.getElementById("copilotVideo");

    if (playBtn && video) {
      const handleTogglePlay = () => {
        if (isPlaying) {
          video.pause();
          playBtn.style.display = "flex";
          setIsPlaying(false);
        } else {
          video.play();
          playBtn.style.display = "none";
          setIsPlaying(true);
        }
      };

      playBtn.addEventListener("click", handleTogglePlay);
      video.addEventListener("click", handleTogglePlay);

      return () => {
        playBtn.removeEventListener("click", handleTogglePlay);
        video.removeEventListener("click", handleTogglePlay);
      };
    }
  }, [isPlaying]);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-700 text-dark-gray mb-4">
              Explore our digital solutions
            </h2>
            <p className="mb-2">
              Discover how Novum’s tools and services help you solve real
              business challenges with data, cloud, and AI.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col tab-style-03">
            <ul
              className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-4"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tab_third1"
                  role="tab"
                >
                  Power BI
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab_third2"
                  role="tab"
                >
                  365 Copilot
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab_third3"
                  role="tab"
                >
                  Data Warehouse
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* TAB 1 */}
              <div
                className="tab-pane fade show active"
                id="tab_third1"
                role="tabpanel"
              >
                <div className="row align-items-stretch justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <figure className="rounded mb-0 w-100">
                      <Image
                        src="/assets/img/home/power-bi-main.png"
                        alt="Power BI"
                        width={800}
                        height={500}
                        className="rounded w-100 h-100 object-fit-cover"
                      />
                    </figure>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center py-4">
                    <div>
                      <h3 className="fw-700 text-dark-gray mb-4">
                        Why Do Companies Need Power BI?
                      </h3>
                      <p className="mb-4">
                        In today’s data-driven landscape, transforming raw data
                        into actionable insights is essential for business
                        success. Microsoft Power BI empowers organizations to
                        build a data-first culture by turning complex data into
                        clear, interactive visualizations. With seamless
                        integration into the Azure Analytics ecosystem, Power BI
                        enables real-time reporting, intuitive dashboards, and
                        scalable data solutions across every business function.
                        From finance and supply chain to sales, marketing, and
                        HR, Power BI helps teams make faster, smarter decisions
                        backed by accurate, up-to-date insights. The result is
                        improved alignment, greater transparency, and measurable
                        performance across the enterprise.
                      </p>
                      <a className="btn-two" href="/services/power-bi">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 2 — Copilot with inline video */}
              <div className="tab-pane fade" id="tab_third2" role="tabpanel">
                <div className="row align-items-stretch justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <div className="video-container position-relative w-100 rounded overflow-hidden">
                      <div
                        id="copilotPlayBtn"
                        className="playbtn position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
                      >
                        <i className="bi bi-play-fill fs-1 text-white"></i>
                      </div>

                      <video
                        id="copilotVideo"
                        loading="lazy"
                        poster="/assets/img/home/copilot-main.png"
                        playsInline
                        preload="none"
                        className="w-100 h-100 object-fit-cover rounded"
                      >
                        <source
                          src="/assets/img/home/copilot.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center py-4">
                    <div>
                      <h3 className="fw-700 text-dark-gray mb-4">
                        Introducing Microsoft 365 Copilot: A Smarter Way to Work
                      </h3>
                      <p className="mb-4">
                        Microsoft 365 Copilot brings AI directly into the tools
                        your teams use every day, enhancing productivity,
                        creativity, and decision-making at every level. It is
                        built on Microsoft’s trusted enterprise framework,
                        offering advanced security, compliance, identity
                        management, and data privacy to ensure full readiness
                        for business environments. From writing assistance in
                        Word to data analysis in Excel and streamlined
                        communication in Outlook, Copilot supports your teams
                        with intelligent automation that fits naturally into
                        their workflows. It is a secure and scalable solution
                        for organizations looking to work more efficiently with
                        the power of responsible AI.
                      </p>
                      <a
                        className="btn-two"
                        href="/services/microsoft-dynamics-365"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 3 */}
              <div className="tab-pane fade" id="tab_third3" role="tabpanel">
                <div className="row align-items-stretch justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6 d-flex align-items-stretch">
                    <figure className="rounded mb-0 w-100">
                      <Image
                        src="/assets/img/home/warehouse-main.png"
                        alt="Data Warehouse"
                        width={800}
                        height={500}
                        className="rounded w-100 h-100 object-fit-cover"
                      />
                    </figure>
                  </div>

                  <div className="col-lg-6 d-flex align-items-center py-4">
                    <div>
                      <h3 className="fw-700 text-dark-gray mb-4">
                        Why Do Companies Need a Data Warehouse?
                      </h3>
                      <p className="mb-4">
                        As organizations embrace digital transformation, their
                        operations increasingly rely on multiple IT systems that
                        generate large volumes of data. To stay competitive,
                        companies need a way to bring this data together and
                        turn it into actionable insights that drive performance.
                        A modern data warehouse centralizes information from
                        across departments, making it accessible for
                        decision-makers at every level. From executives to
                        analysts, teams can use consistent, reliable data to
                        understand business performance, identify risks, and
                        uncover new opportunities. By building a unified data
                        foundation, companies improve efficiency, enhance
                        visibility, and gain the insights needed to make
                        confident, strategic decisions.
                      </p>
                      <a className="btn-two" href="/services/data-warehouse">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
