"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import ThreeFeatureSection from "@/components/data/services/ThreeFeatureSection";
import Reveal from "@/components/Reveal";
import DynamicTabsCards from "@/components/data/services/DynamicTabsCards";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Training = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Low Code Business App Solutions"
  title="Custom Application Development with Power Apps"
  highlightText="Custom Applications"
  subtitle="Accelerate digital transformation with Microsoft Power Apps."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/app-dev/app-hero.webp"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Programs", href: "#services" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 


      <SoftwareSolutionsSection
  title={
    <>
      Build Custom Business Apps Faster with Power Apps
    </>
  }
  paragraphs={[
    "Microsoft Power Apps, part of the Microsoft Power Platform, is a leading low-code application development environment. It enables organisations to build secure, high-performing apps that solve real business challenges without lengthy development cycles.",
    "Our Custom Application Development service helps companies design, create, and deploy applications that streamline workflows, automate processes, and connect seamlessly with both Microsoft and third-party platforms."
  ]}
  imageSrc="/assets/img/app-dev/app-1.webp"
  altText="Custom Application Development with Power Apps"
  sectionClass="position-relative overflow-hidden py-7"
/>

<Reveal direction="fade" blur={true} delay={0.4} duration={1}>
 <DynamicTabsCards
  sectionId="powerapps-capabilities"
  title="Core Capabilities of Power Apps"
  primaryColor="#0d2b75"
  backgroundType="gradient"
  backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
  tabs={[
    /* ------------------------------------ */
    /* LOW-CODE DEVELOPMENT (3 cards)       */
    /* ------------------------------------ */
    {
      label: "Low-Code Development",
      cards: [
        {
          image: "/assets/img/app-dev/tab-1.jpg",
          label: "UI Builder",
          title: "Drag-and-Drop UI Creation",
          list: [
            "Create UIs quickly with visual components",
            "No manual HTML/CSS required",
            "Fast business app layout building"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Templates",
          title: "Prebuilt Templates & Components",
          list: [
            "Accelerate development with ready templates",
            "Reusable components for consistency",
            "Reduces repetitive tasks"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Prototyping",
          title: "Faster Prototyping & Iteration",
          list: [
            "Validate ideas rapidly",
            "Short testing cycles",
            "Move from concept to production faster"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* DATA CONNECTIVITY (4 cards)          */
    /* ------------------------------------ */
    {
      label: "Data Connectivity",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Dataverse",
          title: "Microsoft Dataverse",
          list: [
            "Enterprise-grade relational storage",
            "Security roles and data rules",
            "Scalable for large applications"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "SharePoint",
          title: "SharePoint / SQL / Dynamics 365",
          list: [
            "Instant connection to Microsoft systems",
            "Native integration with business data",
            "Seamless enterprise workflows"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Azure",
          title: "Azure Services",
          list: [
            "Azure Functions",
            "Logic Apps",
            "AI + Cloud-based APIs"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-5.jpg",
          label: "Connectors",
          title: "1,000+ SaaS & API Integrations",
          list: [
            "Third-party SaaS systems",
            "Enterprise application integrations",
            "Prebuilt connectors for fast setup"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* AI & AUTOMATION (4 cards)            */
    /* ------------------------------------ */
    {
      label: "AI & Automation",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "AI Builder",
          title: "Built-In AI Builder",
          list: [
            "Prediction models",
            "Object detection",
            "Classification and scoring"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Power Automate",
          title: "Workflow Automation",
          list: [
            "Approvals & notifications",
            "Automated business processes",
            "Low-code logic creation"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Document AI",
          title: "Document Intelligence",
          list: [
            "Extract data from PDFs & forms",
            "OCR & AI-based text recognition",
            "Automated data capture"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-5.jpg",
          label: "ML",
          title: "Machine Learning",
          list: [
            "Prediction & scoring models",
            "Custom ML integrations",
            "AI-driven insights"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* CROSS-PLATFORM SUPPORT (3 cards)     */
    /* ------------------------------------ */
    {
      label: "Cross-Platform Compatibility",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Mobile",
          title: "Mobile & Tablet Ready",
          list: [
            "Run across iOS and Android",
            "Adaptive responsive layouts",
            "Optimised performance"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Web",
          title: "Web Browser Compatibility",
          list: [
            "Runs in any modern browser",
            "No installation required",
            "Instant access via web"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Devices",
          title: "Consistent Performance",
          list: [
            "Smooth rendering across devices",
            "Optimised loading and caching",
            "Unified user experience"
          ],
          link: "#"
        }
      ]
    },

    /* ------------------------------------ */
    /* ENTERPRISE SECURITY (3 cards)        */
    /* ------------------------------------ */
    {
      label: "Enterprise-Grade Security",
      cards: [
        {
          image: "/assets/img/app-dev/tab-2.jpg",
          label: "Security",
          title: "Role-Based Access Control",
          list: [
            "Granular permissions",
            "User-level data access",
            "Secure environment isolation"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-3.jpg",
          label: "Entra ID",
          title: "Azure AD / Entra ID Security",
          list: [
            "Multi-factor authentication",
            "Conditional access",
            "Identity governance"
          ],
          link: "#"
        },
        {
          image: "/assets/img/app-dev/tab-4.jpg",
          label: "Governance",
          title: "Centralised Governance",
          list: [
            "Data policies",
            "Environment monitoring",
            "Compliance tools in Admin Center"
          ],
          link: "#"
        }
      ]
    }
  ]}
/> 
</Reveal>



<ThreeFeatureSection
  headline="Types of Applications You Can Build"
  subtext="Power Apps supports multiple application types to suit different scenarios and user experiences."
  items={[
    {
      iconClass: "bi-palette-fill",
      title: "Canvas Apps",
      desc: "Create fully customised, pixel-perfect interfaces with complete control over the user experience. Ideal for highly tailored workflows."
    },
    {
      iconClass: "bi-diagram-3-fill",
      title: "Model-Driven Apps",
      desc: "Data-first applications where the UI is automatically generated based on your data model. Perfect for structured, process-heavy business operations."
    },
    {
      iconClass: "bi-globe2",
      title: "Power Apps Portals (Power Pages)",
      desc: "Secure external-facing portals allowing customers, vendors, and partners to access and interact with your data."
    }
  ]}
/>






    <MainServices
  id="services"
  subtitle="Core Capabilities"
  title="Key Capabilities of Custom Application Development with Power Apps"
  description="Power Apps provides organizations with essential tools to build custom applications that improve workflows and solve business challenges. It connects data, extends automation, and allows rapid development using a low code platform that supports enterprise scale performance."
  image={{
    src: "/assets/img/app-dev/app-2.webp",
    alt: "Custom Application Development Capabilities",
  }}
  services={[
    {
      title: "Low Code Development",
      desc: "Create applications quickly using a drag and drop interface with ready templates and reusable components.",
    },
    {
      title: "Data Connectivity",
      desc: "Connect to more than one thousand data sources including Microsoft Dataverse SharePoint SQL Server and Dynamics 365.",
    },
    {
      title: "AI Automation",
      desc: "Use AI Builder to add machine learning and automation features without complex coding.",
    },
    {
      title: "Cross Platform Compatibility",
      desc: "Build the application once and use it on mobile tablet and web without any extra configuration.",
    },
    {
      title: "Enterprise Grade Security",
      desc: "Use role based access control and Azure Active Directory to maintain secure and compliant access.",
    },
    {
      title: "Integrated Development Workflow",
      desc: "Power Apps supports a complete development process from planning and design to data connection automation testing and deployment.",
    },
  ]}
/>





<ImplementSection
  id="capabilities"
  subtitle="Workflow"
  title="Development Workflow for Custom Applications"
  description="Power Apps follows a clear development process that helps teams define goals, select the right app type, build the interface, connect data, add automation, and deploy securely. This structured workflow ensures predictable and efficient application delivery."
  items={[
    {
      img: "/assets/img/app-dev/tab-1.jpg",
      title: "Define Requirements",
      desc: "Begin by understanding the business problem and identifying the key outcomes the application must support.",
    },
    {
      img: "/assets/img/app-dev/tab-2.jpg",
      title: "Select Application Type",
      desc: "Choose between Canvas Apps Model Driven Apps or Portals based on the required user experience and data structure.",
    },
    {
      img: "/assets/img/app-dev/tab-3.jpg",
      title: "Design the User Interface",
      desc: "Use Power Apps Studio to build the interface with ready controls templates and customizable components.",
    },
    {
      img: "/assets/img/app-dev/tab-4.jpg",
      title: "Connect to Data Sources",
      desc: "Use Power Apps connectors to link the app with Dataverse SharePoint SQL Server Dynamics 365 and other systems.",
    },
    {
      img: "/assets/img/app-dev/tab-5.jpg",
      title: "Add Automation and AI",
      desc: "Enhance the application with automation and machine learning features using Power Automate and AI Builder.",
    },
    {
      img: "/assets/img/app-dev/tab-6.jpg",
      title: "Test Secure Share and Deploy",
      desc: "Validate performance apply security assign access and deploy the application across your organization.",
    },
  ]}
/>


   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Custom Application Development"
  description="Power Apps supports faster development and enables organizations to build solutions that are scalable maintainable and deeply integrated with the Microsoft ecosystem. NOVUM helps teams take full advantage of these capabilities by guiding the entire development process from planning to deployment to ensure the application delivers real business impact."
  counters={[
    { value: 200, suffix: "+", label: "Applications Delivered" },
    { value: 30, suffix: "+", label: "Industries Supported" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 10, suffix: "+", label: "Years of Platform Experience" },
  ]}
  features={[
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Accelerated Development",
      desc: "Power Apps reduces development time and makes it possible to deliver business applications faster without complex coding.",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Empowered Business Users",
      desc: "Business users can participate in the application building process while maintaining full oversight through IT and governance controls.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Microsoft Ecosystem Integration",
      desc: "Applications created through Power Apps connect naturally with Dataverse Dynamics 365 Azure and Microsoft automation tools.",
    },
  ]}
/>




<Testimonials
  subtitle="Client Stories"
  title="What Clients Say About Working With Novum"
  items={[
    {
      img: "/assets/img/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg",
      text: "In today’s world of big data, Novum helped us visualize complex information simply and effectively.",
      author: "Huseyn Zeynalli",
      position: "Head of Brand Management, Italdizain Group",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Elvin_Mammadov.jpg",
      text: "Novum created a custom dashboard for our event catering logistics — over 65k meals planned perfectly.",
      author: "Elvin Mammadov",
      position: "Venue Operations Manager, Baku City Circuit",
    },
  ]}
/>



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
      title: "Power BI Consulting",
      imgSrc: "/assets/img/service-cards/powerbi.svg",
      description:
        "We transform and model data into insights that drive data-driven decisions.",
      link: "/services/power-bi",
      gradient: "linear-gradient(90deg, #F7E078, #DA9B0E)",
    },
    {
      title: "Digital Services",
      imgSrc: "/assets/img/service-cards/digitalmarketing.png",
      description: "We bring transformative digital outcomes to organizations.",
      link: "#",
      gradient: "linear-gradient(90deg, #216868, #14B8BF)",
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


<Widget />


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

export default Training;