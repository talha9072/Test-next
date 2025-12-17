"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import ExpertiseSplitSection from "@/components/data/services/ExpertiseSplitSection";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import ServiceFeatureCards from "@/components/data/services/ServiceFeatureCards";
import WhyChooseSection from "@/components/data/services/whychooseus";
import InnovationsRoadmapSection from "@/components/data/services/InnovationsSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const FaceRecognition = () => {
  return (
    <div>
        <HeaderFour />
        <HeroWithRibbon
  serviceName="Face Recognition & Detection"
  title="AI-Powered Face Recognition & Detection Platform"
  highlightText="AI Vision"
  subtitle="Real-time biometric identification and intelligent video analytics for modern enterprises."
  paragraph="Novum’s platform delivers high-accuracy biometric monitoring and actionable insights across multi-camera environments—enhancing security, streamlining operations, and enabling smarter decision making."
  bgImage="/assets/img/main-product/face-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#overview" },
    { label: "Detection", href: "#real-time-detection" },
    { label: "Recognition", href: "#face-recognition" },
    { label: "Applications", href: "#industry-applications" },
    { label: "Features", href: "#key-features" },
    { label: "Benefits", href: "#business-benefits" },
     { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
        
 <div id="overview">
  <ImageWithContentSection
    orderControl={2}
    bgColor="#f5f9ff"
    title="Face Recognition & Detection Overview"
    imageSrc="/assets/img/main-product/face-main1.png" // update with actual image
    imageAlt="Face Recognition and Detection Overview"

    paragraphs={[
      "Novum’s Face Recognition & Detection platform is a core part of our AI Vision Suite, delivering advanced biometric intelligence for security, analytics, and operational automation.",
      "Powered by real-time video processing and high-accuracy facial recognition algorithms, the platform supports fast identification, secure biometric indexing, and enterprise-grade compliance.",
      "Organisations use the solution to enhance physical security, automate access control, understand human flow, and gain operational intelligence across high-traffic environments."
    ]}

    bulletPoints={[
      "Real-time face detection and high-accuracy recognition",
      "Secure biometric indexing with enterprise compliance",
      "Access control and security automation",
    ]}
  />
</div>       


<ExpertiseSplitSection
  sectionId="real-time-detection"
  title="Real-Time Face Detection"
  subtitle="High-speed, high-precision facial detection across complex, high-density environments."
  tabs={[
    {
      label: "Detection Engine",
      title: "Real-Time Multi-Face Detection",
      desc: "Novum’s platform continuously analyzes live camera feeds to detect all visible faces with exceptional speed and accuracy, even in crowded or fast-moving environments.",
      points: [
        "Continuous monitoring of live video streams",
        "High-accuracy detection across diverse lighting conditions",
        "Optimized for crowded, dynamic, high-density areas",
        "Immediate detection with minimal latency"
      ]
    },
    {
      label: "Data Captured",
      title: "Structured Detection Metadata",
      desc: "Each detection instance is enriched with detailed metadata to support security workflows, analytics, and forensic investigations.",
      points: [
        "Timestamp exact moment of detection",
        "Camera Source identifies which camera captured the face",
        "Snapshot Image cropped image for verification or auditing",
        "Optional Metadata zone, event ID, location, or contextual attributes"
      ]
    },
    {
      label: "High-Density Optimization",
      title: "Optimized for Large-Scale Public Environments",
      desc: "The detection engine is optimized to track multiple faces simultaneously, ensuring consistent performance in busy or complex environments.",
      points: [
        "Handles multi-face detection in real-time",
        "Resilient to motion, crowd flow, and variable lighting",
        "Ideal for airports, stadiums, offices, retail, and public transport hubs",
        "Built for enterprise-scale, multi-camera deployments"
      ]
    }
  ]}
/>

<div id="face-recognition">
  <ServiceFeatureSlider
    sectionId="face-recognition"
    title="High-Accuracy Face Recognition"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    primaryColor="#0d2b75"
    items={[
      {
        image: "/assets/img/main-product/face-1.webp",
        title: "Optimal Reference Image Extraction",
        list: [
          "AI selects the clearest frames to build reliable identity profiles",
          "Removes motion blur and enhances facial clarity",
          "Ensures accurate recognition from live video feeds"
        ]
      },
      {
        image: "/assets/img/main-product/face-2.webp",
        title: "Secure Identity Profiles",
        list: [
          "Encrypted biometric storage with strict access control",
          "Privacy-first architecture aligned with regulatory standards",
          "Supports secure enterprise-wide identity management"
        ]
      },
      {
        image: "/assets/img/main-product/face-3.webp",
        title: "Real-Time Live Identification",
        list: [
          "Instant comparison against authorised identity databases",
          "High-speed facial matching across multi-camera environments",
          "Supports whitelists, watchlists, and visitor verification"
        ]
      },
      {
        image: "/assets/img/main-product/face-4.webp",
        title: "Advanced Biometric Indexing",
        list: [
          "Deep feature encoding for exceptional recognition accuracy",
          "Resilient to occlusions, angled faces, and low-light conditions",
          "Consistent performance across diverse camera qualities"
        ]
      },
      {
        image: "/assets/img/main-product/face-5.webp",
        title: "Continuous Learning",
        list: [
          "AI models improve accuracy as more data is captured",
          "Adaptive algorithms reduce false positives and false negatives",
          "Self-improving recognition performance over time"
        ]
      }
    ]}
  />
</div>


<div id="industry-applications">
  <ServiceFeatureCards
    title="Industry Applications"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    primaryColor="#0d2b75"
    noButton
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-shield-lock",
        title: "Security & Access Control",
        list: [
          "Automates secure entry for employees, contractors, and visitors",
          "Integrates with turnstiles, smart locks, and ID badge systems",
          "Detects unauthorized access attempts in real time"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-shop-window",
        title: "Retail Analytics",
        list: [
          "Tracks customer footfall and movement patterns",
          "Identifies repeat visits and demographic insights",
          "Enables targeted campaigns without exposing personal identity"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-people-fill",
        title: "Event & Venue Management",
        list: [
          "Monitors attendee flow at stadiums, expos, and large venues",
          "Provides real-time headcounts for safety compliance",
          "Supports crowd management and emergency planning"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-building",
        title: "Smart Cities & Public Infrastructure",
        list: [
          "Enhances city-wide surveillance and situational awareness",
          "Supports transportation flow analysis and public safety",
          "Integrates with municipal CCTV networks for real-time intelligence"
        ]
      },
      {
        iconType: "bootstrap",
        icon: "bi-building-lock",
        title: "Corporate & Enterprise Security",
        list: [
          "Monitors movement across multi-location facilities",
          "Generates alerts for unusual or suspicious activities",
          "Improves operational visibility for security teams"
        ]
      }
    ]}
  />
</div>


<div id="key-features">
  <WhyChooseSection
    sectionId="key-features"
    subtitle="KEY FEATURES"
    title="What Makes Our Face Recognition Platform Stand Out?"
    items={[
      {
        icon: "bi-people",
        title: "Automated People Counting & Flow Analysis",
        desc: "Measure crowd density, zone occupancy, and human movement patterns with high-accuracy real-time analytics."
      },
      {
        icon: "bi-bell-fill",
        title: "Real-Time Alerts",
        desc: "Instant notifications for unknown individuals, blacklist matches, restricted access attempts, and custom event triggers."
      },
      {
        icon: "bi-bar-chart-line",
        title: "Detailed Reporting & Analytics",
        desc: "Dashboards covering visitor trends, security events, operational metrics, attendance insights, and compliance records."
      },
      {
        icon: "bi-database-lock",
        title: "Secure Database Management",
        desc: "Centralized identity storage with audit trails, role-based access controls, GDPR-compliant policies, and full encryption."
      },
      {
        icon: "bi-camera-video",
        title: "Multi-Camera Support",
        desc: "Supports dozens to hundreds of simultaneous video streams with optimized, low-latency processing pipelines."
      },
      {
        icon: "bi-cloud-check",
        title: "Cloud & On-Premise Deployment",
        desc: "Flexible deployment across cloud-native, hybrid, and air-gapped on-premise environments for regulated industries."
      }
    ]}
  />
</div>


<div id="business-benefits">
  <InnovationsRoadmapSection
    sectionId="business-benefits"
    sectionClass="py-5"
    backgroundGradient="linear-gradient(to right bottom, #ffffff, #eef3ff)"
    subtitle="BUSINESS BENEFITS"
    title="Measurable Value Delivered by Our Face Recognition Platform"
    intro="Organizations adopting Novum’s AI Vision Suite gain measurable improvements across security, operations, compliance, and cost efficiency."
    primaryColor="#0d2b75"
    items={[
      {
        icon: "bi-shield-check",
        title: "Enhanced Security & Monitoring",
        desc: "Automates surveillance workflows, reduces manual monitoring errors, and accelerates real-time incident response."
      },
      {
        icon: "bi-person-badge",
        title: "Faster & Accurate Verification",
        desc: "Improves identity checks, access control, attendance tracking, and visitor management with high accuracy."
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Operational Insights",
        desc: "Provides deep analytics on foot traffic, facility usage, visitor patterns, and live occupancy trends."
      },
      {
        icon: "bi-file-lock2",
        title: "Regulatory Compliance",
        desc: "Ensures privacy, audit readiness, and governance with encrypted data, traceability, and policy enforcement."
      },
      {
        icon: "bi-cash-coin",
        title: "Cost Savings",
        desc: "Reduces dependency on manual monitoring, human verification, and paper-based logs—lowering operational costs."
      },
      {
        icon: "bi-arrows-fullscreen",
        title: "Scalable & Flexible",
        desc: "Expands easily from small offices to enterprise campuses or city-wide networks with cloud or on-premise deployment."
      }
    ]}
  />
</div>

<div id="whyus">
  <ServiceSplitPanel
    title="Why Organisations Choose Novum AI Vision"
    primaryColor="#2d1a78"
    items={[
      {
        label: "Continuous Learning Intelligence",
        paragraphs: [
          "Novum’s AI models continuously improve over time, enhancing recognition precision, lowering false positives, and strengthening long-term reliability.",
          "The platform adapts to new environments, lighting conditions, and facial variations delivering smarter insights with every detection."
        ],
        listItems: [
          "Self-improving AI models",
          "Higher accuracy with ongoing data",
          "Reduced false positives and false matches"
        ]
      },

      {
        label: "Seamless Enterprise Integration",
        paragraphs: [
          "Our Face Recognition platform integrates natively with Novum’s full product ecosystem, creating a unified operational intelligence layer.",
          "Whether airports, logistics hubs, corporate campuses, or smart city networks the platform connects securely with existing systems for real-time decisioning."
        ],
        listItems: [
          "Integrates with Airport Turnaround & NES",
          "Connects with Revenue Management platforms",
          "IoT-ready architecture for unified operations"
        ]
      },

      {
        label: "Enterprise-Grade Security & Governance",
        paragraphs: [
          "Built with encrypted biometric storage, role-based access control, and strict governance compliance, the platform ensures safe handling of sensitive identity data.",
          "Designed for regulated industries, it aligns with global privacy standards and security frameworks for end-to-end protection."
        ],
        listItems: [
          "Encrypted biometric frameworks",
          "Role-based identity & access control",
          "Compliance with global privacy regulations"
        ]
      }
    ]}
  />
</div>

       

 
 <div id="testimonials">
     <Testimonials
       subtitle="Client Stories"
       title="What Clients Say About Working With Novum"
       items={[
     {
       img: "/assets/img/clients/majid Ismayilov-Avromed.jpeg",
       text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
       author: "Majid Ismailov",
       position: "Head of Data Management, Avromed",
     },
     {
       img: "/assets/img/clients/Zaur Dibirov - Azal.jpeg",
       text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
       author: "Zaur Dibirov",
       position: "Director of Finance & Accounting, Azerbaijan Airlines",
     },
     {
       img: "/assets/img/clients/Daniel Viranyi- Kitopi.png",
       text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
       author: "Daniel V",
       position: "IT & Security Director, Kitopi",
     },
     {
       img: "/assets/img/clients/Ashish Pandey-Aster.jpeg",
       text: "Working with Novum has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments. The partnership with Novum has been truly valuable, and we look forward to continued success together.",
       author: "Ashish Panday",
       position: "IT Director, Aster Pharmacy",
     },
   ]}
     />
   
 </div>
 
 
       <OtherServices
   subtitle="Our Expertise"
   title="Other Services We Provide"
   description="We partner with organizations to deliver smart, scalable digital solutions. Our services combine deep technical expertise with a focus on real business outcomes."
   services={[
     {
       title: "Software Development",
       imgSrc: "/assets/img/service-cards/softwaredev.svg",
       description:
         "We develop tailored solutions on a variety of platforms using a broad range of technologies.",
       link: "/services/software-development",
       gradient: "linear-gradient(90deg, #8746CA, #8746CA)",
     },
     
     {
       title: "Digital Services",
       imgSrc: "/assets/img/service-cards/digitalmarketing.png",
       description: "We bring transformative digital outcomes to organizations.",
       link: "#",
       gradient: "linear-gradient(90deg, #216868, #14B8BF)",
     },
     {
       title: "Data Warehouse",
       imgSrc: "/assets/img/service-cards/datawarehouse.svg",
       description:
         "We consolidate intelligence data from multiple sources to unlock deeper insights.",
       link: "/services/data-warehouse",
       gradient: "linear-gradient(90deg, #157569, #71E9B6)",
     },
     {
       title: "Artificial Intelligence & IoT",
       imgSrc: "/assets/img/service-cards/ai.svg",
       description:
         "We build AI solutions with Microsoft Cognitive Services and integrate IoT hardware.",
       link: "/services/artificial-intelligence-iot",
       gradient: "linear-gradient(90deg, #1B71EB, #A555C0)",
     },
     {
       title: "Microsoft Azure",
       imgSrc: "/assets/img/service-cards/azure.svg",
       description: "Swiftly shift your business resources to cloud infrastructure.",
       link: "/services/azure",
       gradient: "linear-gradient(90deg, #32ADE9, #095EAA)",
     },
     {
       title: "Microsoft 365",
       imgSrc: "/assets/img/service-cards/microsoft365.svg",
       description: "A suite of apps to help you stay connected and get things done.",
       link: "/services/microsoft-365-deployment",
       gradient: "linear-gradient(90deg, #2353C4, #848FF0)",
     },
     {
       title: "Dynamics 365",
       imgSrc: "/assets/img/service-cards/dynamic365.svg",
       description:
         "Boost efficiency and customer experiences with an agile business platform.",
       link: "/services/microsoft-dynamics-365",
       gradient: "linear-gradient(90deg, #3352C0, #5875E5)",
     },
     {
       title: "Sustainability",
       imgSrc: "/assets/img/service-cards/sustainability.svg",
       description:
         "Drive ESG goals with Microsoft's expanding sustainability solutions.",
       link: "/services/microsoft-sustainability",
       gradient: "linear-gradient(90deg, #4CD1DA, #1085A4)",
     },
     {
       title: "Copilot",
       imgSrc: "/assets/img/service-cards/copilot.png",
       description:
         "An AI assistant that automates tasks and provides real-time insights.",
       link: "#",
       gradient: "linear-gradient(90deg, #6EB75B, #F36E7B, #1D56D2)",
     },
   ]}
 />      

       <ContactWidget />

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Need a solution? Request a call!"
                        subText="For pricing information about services simply complete the form below and one of our sales professionals will contact you within one business day."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default FaceRecognition;