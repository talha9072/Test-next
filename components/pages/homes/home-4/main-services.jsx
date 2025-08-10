// components/pages/homes/home-4/main-services.jsx
"use client";
import React from 'react';

const services = [
  {
    title: 'Software Development',
    imgSrc: '/assets/img/service-cards/softwaredev.svg',
    description: 'We develop tailored solutions on a variety of platforms using a broad range of technologies.',
    link: '#',
  },
  {
    title: 'Power BI Consulting',
    imgSrc: '/assets/img/service-cards/powerbi.svg',
    description: 'We transform and model data into insights that drive data-driven decisions.',
    link: '#',
  },
  {
    title: 'Digital Services',
    imgSrc: '/assets/img/service-cards/digitalmarketing.png',
    description: 'We bring transformative digital outcomes to organizations.',
    link: '#',
  },
  {
    title: 'Data Warehouse',
    imgSrc: '/assets/img/service-cards/datawarehouse.svg',
    description: 'We consolidate intelligence data from multiple sources to unlock deeper insights.',
    link: '#',
  },
  {
    title: 'Artificial Intelligence & IoT',
    imgSrc: '/assets/img/service-cards/ai.svg',
    description: 'We build AI solutions with Microsoft Cognitive Services and integrate IoT hardware.',
    link: '#',
  },
  {
    title: 'Microsoft Azure',
    imgSrc: '/assets/img/service-cards/azure.svg',
    description: 'Swiftly shift your business resources to cloud infrastructure.',
    link: '#',
  },
  {
    title: 'Microsoft 365',
    imgSrc: '/assets/img/service-cards/microsoft365.svg',
    description: 'A suite of apps to help you stay connected and get things done.',
    link: '#',
  },
  {
    title: 'Dynamics 365',
    imgSrc: '/assets/img/service-cards/dynamic365.svg',
    description: 'Boost efficiency and customer experiences with an agile business platform.',
    link: '#',
  },
  {
    title: 'Sustainability',
    imgSrc: '/assets/img/service-cards/sustainability.svg',
    description: "Drive ESG goals with Microsoft's expanding sustainability solutions.",
    link: '#',
  },
  {
    title: 'Copilot',
    imgSrc: '/assets/img/service-cards/copilot.png',
    description: 'An AI assistant that automates tasks and provides real-time insights.',
    link: '#',
  },
];

const MainServices = () => (
  <section className="services about__four py-5">
    <div className="container">
      <div className="row gy-4 pb-4">
        <div className="col-12">
          <h2 className="fw-700 text-dark-gray ls-minus-1px mb-3">Explore Our Services</h2>
          <p className="mb-0">
            We partner with organizations to deliver smart, scalable digital solutions. Our services combine deep technical expertise with a focus on real business outcomes.
          </p>
        </div>
      </div>
      <div className="row gy-4">
        {services.map((svc, i) => (
          <div className="col-lg-4 col-md-6" key={i}>
            <a className="card p-2" href={svc.link}>
              <div className="card-body text-center">
                <img
                  src={svc.imgSrc}
                  alt={svc.title}
                  width={64}
                  height={64}
                  loading="lazy"
                />
                <h3 className="card-title mt-3">{svc.title}</h3>
                <p className="card-text">{svc.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MainServices;