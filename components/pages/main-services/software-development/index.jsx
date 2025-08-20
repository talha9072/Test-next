"use client";

import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import CoreCapabilitiesSection from "@/components/data/services/CoreCapabilitiesSection";
import WhySection from "@/components/data/services/WhySection";
import CTA from "@/components/data/cta";
import Footer from "@/components/layout/footers/footer";

// Tabs for Core Capabilities
const coreTabs = [
  {
    id: "tab_endtoend",
    label: "End-to-End Development",
    content: {
      imageSrc: "/assets/img/softwaredev/tab-1.png",
      imageAlt: "End-to-End Software Development",
      title: "End-to-End Development",
      paragraphs: [
        "From front-end interfaces to complex back-end systems, Novum delivers full-cycle software development tailored to your business needs."
      ]
    }
  },
  {
    id: "tab_cloud",
    label: "Cloud-Ready Solutions",
    content: {
      imageSrc: "/assets/img/softwaredev/tab-2.png",
      imageAlt: "Cloud-Based Deployments",
      title: "Cloud-Ready Solutions",
      paragraphs: [
        "We design and deploy scalable cloud applications that ensure performance, reliability, and global accessibility."
      ]
    }
  },
  {
    id: "tab_api",
    label: "API & System Integration",
    content: {
      imageSrc: "/assets/img/softwaredev/tab-3.png",
      imageAlt: "API Integration",
      title: "API & System Integration",
      paragraphs: [
        "Seamlessly connect your new applications with existing tools through secure, high-performance APIs and interoperable systems."
      ]
    }
  },
  {
    id: "tab_agile",
    label: "Agile Delivery",
    content: {
      imageSrc: "/assets/img/softwaredev/tab-4.png",
      imageAlt: "Agile Project Management",
      title: "Agile Delivery",
      paragraphs: [
        "We use agile methodologies and collaborative project management to deliver results quickly and adapt to your evolving needs."
      ]
    }
  }
];

const SoftwareDevelopment = () => {
  return (
    <div>
      <HeaderFour />

      {/* Banner Section */}
      <BannerSection
        bgImage="/assets/img/softwaredev/software-hero.png"
        icon="/assets/img/service-cards/softwaredev.svg"
        title="Custom Software Development"
        borderColorStart="#8746CA"
        borderColorEnd="#8746CA"
      />

      {/* Intro Section */}
      <SoftwareSolutionsSection
        title="Empower Your Business with Tailored Software Solutions"
        paragraphs={[
          "At Novum, we build custom software designed to streamline operations, accelerate innovation, and drive measurable results. With expertise across cloud, mobile, and desktop platforms, our solutions are tailored to your business objectives and technology landscape.",
          "Our team develops both front-end and back-end systems, from management tools to complex, data-driven platforms. By integrating the latest technologies, we deliver interactive, scalable, and secure applications that meet modern demands."
        ]}
        imageSrc="/assets/img/softwaredev/dev-1.png"
        altText="Custom Software Solutions"
      />

      {/* Detail Section */}
      <SoftwareDetailSection
        imageSrc="/assets/img/softwaredev/dev-2.png"
        imageAlt="Software Development Benefits"
        numberMain="6"
        numberSub="+"
        label="Core Capabilities"
        heading={
          <>
            End-to-End{" "}
            <span
              className="highlight-separator mb-0 pb-0"
              data-shadow-animation="true"
              data-animation-delay="500"
            >
              Software Development
              <span className="z-index-minus-1">
                <img
                  src="/images/demo-digital-agency-highlight-separator.png"
                  alt=""
                />
              </span>
            </span>
          </>
        }
        listItems={[
          "End-to-end software development lifecycle",
          "Front-end and back-end architecture",
          "API integration and system interoperability",
          "Scalable cloud deployments",
          "Agile delivery and project management",
          "Support for modern technologies: Java, Python, .NET, Node.js, Laravel, Django, and more"
        ]}
        ctaText="Start Your Project"
        ctaHref="/contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
      />

      {/* Core Capabilities Tabs */}
      <CoreCapabilitiesSection
        heading="Explore Our Core Capabilities"
        tabs={coreTabs}
      />

      {/* Why Section */}
      <WhySection
        heading="Why Choose Novum for Software Development?"
        subheadingLines={[
          "We combine deep technical expertise with a collaborative approach to deliver solutions that align with your business objectives.",
          "From SMEs to large enterprises, Novum provides scalable, secure, and future-ready applications."
        ]}
        imgSrc="/assets/img/softwaredev/dev-3.png"
        imgAlt="Why Choose Novum Software Development"
        cards={[
          {
            iconClass: "fa-solid fa-code text-novum-blue",
            title: "Expert Engineering",
            text: "Our team covers front-end, back-end, APIs, and cloud, ensuring a complete technical solution for your business."
          },
          {
            iconClass: "fa-solid fa-cloud text-novum-blue",
            title: "Future-Ready Cloud Solutions",
            text: "We architect software to be scalable and secure, leveraging cloud infrastructure for reliability and growth."
          },
          {
            iconClass: "fa-solid fa-handshake text-novum-blue",
            title: "Collaborative Partnership",
            text: "We work closely with your team to align solutions with strategy, ensuring every project drives measurable value."
          }
        ]}
      />

      {/* CTA */}
      <CTA
        bgImage="/assets/img/cta-bg.webp"
        heading="Ready to Build Custom Software with Novum?"
        subText="Let’s design and develop tailored solutions that automate workflows, boost efficiency, and scale with your business."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
