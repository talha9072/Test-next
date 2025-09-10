// components/pages/homes/home-4/tab-1.jsx
import React from 'react';
import Link from 'next/link';

export default function Tab1() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="fw-700 text-dark-gray mb-4">Explore our digital solutions</h2>
            <p className="mb-2">Discover how Novum’s tools and services help you solve real business challenges with data, cloud, and AI.</p>
          </div>
        </div>
        <div className="row">
          <div className="col tab-style-03">
            <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-4" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#tab_third1" role="tab">Power BI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_third2" role="tab">365 Copilot</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab_third3" role="tab">Data Warehouse</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab_third1" role="tabpanel">
                <div className="row align-items-center justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6 position-relative">
                    <figure className="rounded mb-0">
                      <img
                        src="/assets/img/home/power-bi.png"
                        alt="Power BI"
                        className="rounded"
                      />
                    </figure>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-700 text-dark-gray mb-4">
                      Why Do Companies Need Power BI?
                    </h3>
                    <p className="mb-4">
                      In today’s data-driven landscape, transforming raw data into actionable insights is essential for business success. Microsoft Power BI empowers organizations to build a data-first culture by turning complex data into clear, interactive visualizations. With seamless integration into the Azure Analytics ecosystem, Power BI enables real-time reporting, intuitive dashboards, and scalable data solutions across every business function. From finance and supply chain to sales, marketing, and HR, Power BI helps teams make faster, smarter decisions backed by accurate, up-to-date insights. The result is improved alignment, greater transparency, and measurable performance across the enterprise.
                    </p>
                    <a class="btn-two" href="/contact">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_third2" role="tabpanel">
                <div className="row align-items-center justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6">
                    <figure className="rounded mb-0">
                      <img
                        src="/assets/img/home/365-copilot.png"
                        alt="365 Copilot"
                        className="rounded"
                      />
                    </figure>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-700 text-dark-gray mb-4">
                      Introducing Microsoft 365 Copilot: A Smarter Way to Work
                    </h3>
                    <p className="mb-4">
                      Microsoft 365 Copilot brings AI directly into the tools your teams use every day, enhancing productivity, creativity, and decision-making at every level. It is built on Microsoft’s trusted enterprise framework, offering advanced security, compliance, identity management, and data privacy to ensure full readiness for business environments. From writing assistance in Word to data analysis in Excel and streamlined communication in Outlook, Copilot supports your teams with intelligent automation that fits naturally into their workflows. It is a secure and scalable solution for organizations looking to work more efficiently with the power of responsible AI.
                    </p>
                    <a class="btn-two" href="/contact">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_third3" role="tabpanel">
                <div className="row align-items-center justify-content-center gy-4 gy-md-1">
                  <div className="col-lg-6">
                    <figure className="mb-0 rounded">
                      <img
                        src="/assets/img/home/data-warehousing.png"
                        alt="Data Warehouse"
                        className="rounded"
                      />
                    </figure>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="fw-700 text-dark-gray mb-4">
                      Why Do Companies Need a Data Warehouse?
                    </h3>
                    <p className="mb-4">
                      As organizations embrace digital transformation, their operations increasingly rely on multiple IT systems that generate large volumes of data. To stay competitive, companies need a way to bring this data together and turn it into actionable insights that drive performance. A modern data warehouse centralizes information from across departments, making it accessible for decision-makers at every level. From executives to analysts, teams can use consistent, reliable data to understand business performance, identify risks, and uncover new opportunities. By building a unified data foundation, companies improve efficiency, enhance visibility, and gain the insights needed to make confident, strategic decisions.
                    </p>
                    <a class="btn-two" href="/contact">Learn More</a>
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
