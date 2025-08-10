"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import CoreCapabilitiesSection from "@/components/data/services/CoreCapabilitiesSection";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";

const coreTabs = [
  {
    id: 'tab-ml',
    label: 'Machine Learning',
    content: {
      imageSrc: '/assets/img/ai/ai-3.png',
      imageAlt: 'Ai-ml',
      title: 'Machine Learning & Predictive Analytics',
      paragraphs: [
        'We develop AI models that forecast trends, detect anomalies, and automate decisions. From fraud detection to supply chain forecasting, our ML solutions help enterprises operate smarter.'
      ]
    }
  },
  {
    id: 'tab_computervision',
    label: 'Computer Vision',
    content: {
      imageSrc: '/assets/img/ai/ai-4.png',
      imageAlt: 'Computer Vision & Object Detection',
      title: 'Computer Vision & Object Detection',
      paragraphs: [
        'Using platforms like OpenCV and Amazon Rekognition, we enable face detection, object tracking, and real-time visual analytics for smarter planning, safety, and customer insights.'
      ]
    }
  },
  {
    id: 'tab_smart-iot',
    label: 'Smart IoT',
    content: {
      imageSrc: '/assets/img/ai/ai-5.png',
      imageAlt: 'Smart IoT Integrations',
      title: 'Smart IoT Integrations',
      paragraphs: [
        'Our solutions work with your ecosystem. We offer native compatibility with Microsoft Dynamics 365, Azure Synapse, Power BI, SQL Server, and more. This ensures smooth data flow between your systems and analytics platforms.'
      ]
    }
  },
  {
  id: 'tab_proven',
  label: 'Proven Technology',
  content: {
    imageSrc: '/assets/img/ai/ai-6.png',
    imageAlt: 'Built on Proven Technology',
    title: 'Built on Proven Technology',
    paragraphs: [
      <>
        <strong>Microsoft Cognitive Services & Azure</strong>: As a Microsoft Solutions Partner, we use Azure AI, ML Studio, and Power Platform to deliver secure, scalable intelligence solutions.
      </>,
      <>
        <strong>TensorFlow & OpenCV</strong>: We harness open-source tools to deliver custom computer vision and machine learning systems for high-performance environments.
      </>
    ]
  }
},
];

const AI = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/ai/ai-hero.png"
            icon="/assets/img/service-cards/ai.svg"
            title="AI and IoT Solutions"
            borderColorStart="#1B71EB"
            borderColorEnd="#A555C0"
        />
        <SoftwareSolutionsSection
            title={`Automate, Optimize,and Innovate`}
            paragraphs={[
            "At NOVUM, we design intelligent systems that transform the way businesses operate. Using artificial intelligence and IoT technologies, we automate workflows, monitor environments, and unlock insights in real time.",
            "Our solutions are built for scalability and aligned with your organizational goals. Whether integrating machine learning into customer journeys or enabling IoT across physical locations, we help you gain control, visibility, and performance where it matters most."
            ]}
            imageSrc="/assets/img/ai/ai-1.png"
            altText="Power BI Consulting"
        />
       
       <SoftwareDetailSection
          imageSrc="/assets/img/ai/ai-2.png"
          imageAlt="On-Demand Power BI Services"
          numberMain="24"
          numberSub="+"
          label="Clients Supported Remotely"
          heading={(
            <>
              What We Deliver
              <span
                className="highlight-separator mb-0 pb-0"
                data-shadow-animation="true"
                data-animation-delay="500"
              >
                <span className="z-index-minus-1">
                  <img
                    src="images/demo-digital-agency-highlight-separator.png"
                    alt=""
                  />
                </span>
              </span>
              <p className="text-muted mt-3 fs-16">
                NOVUM helps you harness the power of artificial intelligence and IoT to create smart, adaptive, and predictive environments.
              </p>
            </>
          )}
          listItems={[
            <>
              <strong>Machine Learning & Predictive Analytics</strong>
              <span className="d-block">
                Custom ML models for forecasting, anomaly detection, segmentation, and automation.
              </span>
            </>,
            <>
              <strong>Computer Vision & Object Detection</strong>
              <span className="d-block">
                Smart camera systems for face recognition, safety monitoring, and customer analytics.
              </span>
            </>,
            <>
              <strong>Smart IoT Integrations</strong>
              <span className="d-block">
                Connected sensors with real-time alerts, remote dashboards, and automated triggers.
              </span>
            </>
          ]}
          ctaText="Let’s talk now"
          ctaHref="#contact"
          phoneText="971 56 192 06 16"
          phoneHref="tel:971561920616"
        />

         <CoreCapabilitiesSection
          heading="Our Core Capabilities"
          tabs={coreTabs}
        />

        <WhySection
        heading="Why Partner with NOVUM?"
        subheadingLines={[
            "From intelligent automation to real-time insights, NOVUM helps enterprises adopt AI and IoT at scale. Our experts design, develop, and deploy end-to-end solutions that connect people, processes, and platforms.",
        ]}
        imgSrc="/assets/img/ai/iot-ai.jpg"
        imgAlt="Iot Ai"
        cards={[
            {
            iconClass: 'fa-solid fa-robot text-novum-blue',
            title: 'Full-Cycle AI Development',
            text: 'From model design to system integration we handle the complete AI lifecycle.',
            },
            {
            iconClass: 'fa-solid fa-sitemap text-novum-blue',
            title: 'Seamless Systems Integration',
            text: 'Our solutions plug into ERP, CRM, cloud, and IoT infrastructure with ease.',
            },
            {
            iconClass: 'fa-solid fa-eye text-novum-blue',
            title: 'Vision & Intelligence Expertise',
            text: 'Proven success in face detection, predictive modeling, and smart monitoring.',
            },
            {
            iconClass: 'fa-solid fa-industry text-novum-blue',
            title: 'Cross-Sector Experience',
            text: 'Deployments across logistics, retail, education, and the public sector.',
            },
            {
            iconClass: 'fa-solid fa-rocket text-novum-blue',
            title: 'Built for Scale',
            text: 'We architect solutions to grow with your business securely and efficiently.',
            },
            // Add more cards here as needed…
        ]}
        />

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Talk to Our AI Specialists"
                        subText="Ready to explore how AI and IoT can support your business? Contact NOVUM for a consultation. We will assess your use case, outline a solution, and guide you through the next steps with intelligent automation that delivers value."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default AI;