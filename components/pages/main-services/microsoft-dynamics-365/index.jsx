"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import ImageWithContentSection from "@/components/data/services/ImageWithContentSection";
import UseCasesSection from "@/components/data/services/UseCasesSection";
import DynamicsTabs from "@/components/data/services/DynamicsTabs";
import DynamicTabsCards from "@/components/data/services/DynamicTabsCards";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import VideoHero from "@/components/data/services/VideoHero";
import MicrosoftBannerStats from "@/components/data/services/MicrosoftBannerStats";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const tabsData = [
  {
  label: "Sales",
  title: "Close more deals with AI assistance",
  description:
    "Dynamics 365 Sales empowers teams to build stronger customer relationships, understand intent, and accelerate revenue with guided selling, AI insights, and real-time pipeline visibility.",

  bullets: [
    "AI-driven lead scoring helps reps prioritise the highest-value opportunities.",
    "Real-time collaboration tools improve deal coordination across sales teams.",
  ],

  bottomLabel: "Dynamics 365 Sales",
  bottomLogo: "/assets/img/dynamics365/d365-sales.svg",

  images: [
    "/assets/img/dynamics365/sales-5.png",
    "/assets/img/dynamics365/sales-4.png",
    "/assets/img/dynamics365/sales-3.png",
    "/assets/img/dynamics365/sales-2.png",
    "/assets/img/dynamics365/sales-1.png"
  ]
},

  {
    label: "Marketing",
    title: "Personalise engagement with intelligent insights",
    description:
      "Dynamics 365 Marketing helps organisations create personalised journeys, automate multi-channel campaigns, and improve conversions through AI-powered segmentation and real-time analytics.",
    bullets: [
    "Create tailored customer journeys with behaviour-based triggers and AI-driven segmentation.",
    "Automate email, SMS, social, and event campaigns from a single, unified marketing platform."
  ],
      bottomLabel: "Dynamics 365 Marketing",
    bottomLogo: "/assets/img/dynamics365/d365-marketing.png",
    images: [
      "/assets/img/dynamics365/marketing-1.png",
      "/assets/img/dynamics365/marketing-2.png",
      "/assets/img/dynamics365/marketing-3.png"
    ]
  },

  {
  label: "Customer Service",
  title: "Earn customers for life with connected service experiences",
  description:
    "Dynamics 365 Customer Service delivers consistent, high-quality support through AI-assisted case resolution, unified knowledge access, and omnichannel engagement tools.",

  bullets: [
    "Empower agents with AI-driven recommendations, guided workflows, and real-time knowledge insights.",
    "Deliver seamless, personalised support across chat, email, voice, social, and self-service portals."
  ],

  bottomLabel: "Dynamics 365 Customer Service",
  bottomLogo: "/assets/img/dynamics365/d365-customer.png",

  images: [
    "/assets/img/dynamics365/customerservice-1.png",
     "/assets/img/dynamics365/customerservice-2.png",
      "/assets/img/dynamics365/customerservice-3.png",
       "/assets/img/dynamics365/customerservice-4.png",
        "/assets/img/dynamics365/customerservice-5.png"
  ]
},

  {
    label: "Field Service",
    title: "Deliver intelligent, predictive field operations",
    description:
      "Dynamics 365 Field Service enables proactive maintenance, optimised technician scheduling, and connected on-site experiences—powered by IoT insights and AI-driven recommendations.",
    bullets: [
  "Automatically assign the right technician with smart, skills-based scheduling.",
  "Improve first-time fix rates using guided work orders and real-time asset insights."
],
      bottomLabel: "Dynamics 365 Field Service",
    bottomLogo: "/assets/img/dynamics365/d365-field.png",
    images: [
       "/assets/img/dynamics365/fieldservice-1.png",
    "/assets/img/dynamics365/fieldservice-2.png",
    "/assets/img/dynamics365/fieldservice-3.png",
    ]
  },

  {
    label: "Supply Chain",
    title: "Build a resilient, sustainable supply chain",
    description:
      "Dynamics 365 Supply Chain Management provides real-time visibility, predictive planning, connected logistics, and optimisation tools that help organisations operate efficiently and sustainably.",
    bullets: [
  "Enhance demand forecasting with AI-driven planning and real-time supply insights.",
  "Streamline warehouse, production, and logistics operations through automation and connected workflows."
],
      bottomLabel: "Dynamics 365 Supply Chain Management",
    bottomLogo: "/assets/img/dynamics365/dynamic365-supplychain.png",
    images: [
      "/assets/img/dynamics365/supplychain-1.png",
      "/assets/img/dynamics365/supplychain-2.png",
      "/assets/img/dynamics365/supplychain-3.png",
      "/assets/img/dynamics365/supplychain-4.png",
      "/assets/img/dynamics365/supplychain-5.png",
    ]
  },

  {
    label: "Finance",
    title: "Maximise financial visibility and profitability",
    description:
      "Dynamics 365 Finance helps organisations reduce financial risk, improve accuracy, automate reporting, and shift from transactional operations to predictive, insight-driven finance.",
    bullets: [
  "Automate financial processes with AI-assisted reporting, reconciliation, and compliance workflows.",
  "Gain real-time visibility into cash flow, budgets, and performance to support faster, data-driven decisions."
],
      bottomLabel: "Dynamics 365 Finance",
    bottomLogo: "/assets/img/dynamics365/dynamic365-finance.png",
    images: [
      "/assets/img/dynamics365/finance-1.png",
    ]
  }
];


const Dynamic365 = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Dynamics 365"
  title="A connected suite of intelligent business applications"
  highlightText="Dynamics 365"
  subtitle="Dynamics 365 integrates ERP, CRM, and AI capabilities to improve efficiency, enhance decision-making, and streamline operations"
  bgImage="/assets/img/dynamics365/bg-dynamic365.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Product Demos", href: "#product" },
    { label: "Get Started", href: "#getstarted" },
    { label: "Advantage", href: "#advantage" },
    { label: "ERP", href: "#erp" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 
<ImageWithContentSection
  title="What Is Dynamics 365?"
  orderControl={2}
  imageSrc="/assets/img/dynamics365/dynamic365-main.png"

  paragraphs={[
    "Dynamics 365 is a unified suite of intelligent business applications that streamlines operations, enhances customer experiences, and connects your entire organisation.",
    "By combining ERP, CRM, and AI-driven insights, it enables teams to work smarter, adapt faster, and reduce operational complexity."
  ]}

  bulletPoints={[
    "Unified ERP and CRM platform powered by Microsoft AI.",
    "Real-time insights that support better decision-making.",
    "Flexible workflows that simplify operations.",
    "Tools that enhance customer engagement at scale.",
    "A connected ecosystem that helps teams move faster."
  ]}
/>


<VideoHero
  backgroundImage="/assets/img/dynamics365/365-cta2.webp"
  overlayOpacity={0.65}
  title="Empower your organisation with Dynamics 365"
  description="Unify data, streamline operations, and accelerate digital transformation with intelligent business applications built for agility and growth."
  videoUrl="/assets/img/dynamics365/d365video.mp4" // Replace with your video
/>


<div id="capabilities">
<UseCasesSection
  sectionId="use-cases"
  backgroundStyle="#e5f1ff"
  primaryColor="#0d2b75"
  subtitle="CAPABILITIES"
  title="Modern Capabilities That Accelerate Business Performance"
  intro="Dynamics 365 empowers organisations with modular applications, unified workflows, and rapid deployment tools that enhance operational agility and business outcomes."
  
  tabs={[
    {
      items: [
        {
          title: "Modular, Prebuilt Applications",
          desc: "Easily extend Dynamics 365 with scalable components designed to integrate, evolve, and grow with your organisation.",
          image: "/assets/img/dynamics365/dynamic-tab1.webp",
          cta: "Explore",
          link: "/contact",
        },
        {
          title: "Connected End-to-End Workflows",
          desc: "Unify sales, marketing, operations, finance, and supply chain through seamless cross-system workflows that eliminate silos and boost performance.",
          image: "/assets/img/dynamics365/dynamic-tab2.webp",
          cta: "Explore",
          link: "/contact",
        },
        {
          title: "Rapid Deployment & Onboarding",
          desc: "Leverage low-code and no-code tools to deploy new applications quickly, streamline onboarding, and accelerate value across teams.",
          image: "/assets/img/dynamics365/dynamic-tab3.webp",
          cta: "Explore",
          link: "/contact",
        },
      ],
    }
  ]}
/>
</div>



<div id="capabilities">
  <DynamicTabsCards
    title="Achieve more with an ERP solution from Dynamics 365"
    primaryColor="#0d2b75"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    tabs={[
      {
        label: "Plan with speed and agility",
        cards: [
          {
            image: "/assets/img/dynamics365/cap-1.1.avif",
            label: "Insights",
            title: "Generate actionable insights",
            list: [
              "Unified data across core business processes",
              "Full visibility into operational performance",
              "Actionable insights delivered through Copilot"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap-1.2.avif",
            label: "Planning",
            title: "Improve budgeting and long-range planning",
            list: [
              "Advanced scenario modeling",
              "Integrated financial and operational planning",
              "Copilot-assisted forecasting"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap-1.3.avif",
            label: "Demand",
            title: "Predict demand shifts",
            list: [
              "AI-generated demand forecasting",
              "External and internal signal analysis",
              "Adapt to evolving customer needs"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap-1.4.avif",
            label: "Supply",
            title: "Enhance supply planning",
            list: [
              "Material requirements planning in minutes",
              "Reduced stockouts and excess inventory",
              "Right inventory at the right time"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          }
        ]
      },

      {
        label: "Operate profitably",
        cards: [
          {
            image: "/assets/img/dynamics365/cap2.1.avif",
            label: "Finance",
            title: "Optimize financial close",
            list: [
              "Accelerated reconciliation processes",
              "Reduced reporting cycles",
              "Improved financial accuracy"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap2.2.avif",
            label: "Supply Chain",
            title: "Mitigate supply chain disruptions",
            list: [
              "Improved supplier visibility",
              "Proactive delay management",
              "On-time service delivery"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap2.3.avif",
            label: "Services",
            title: "Provide services profitably",
            list: [
              "Accurate project costing",
              "Efficient resource management",
              "Automated invoicing"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap2.4.avif",
            label: "Manufacturing",
            title: "Build agile manufacturing processes",
            list: [
              "Support discrete and process manufacturing",
              "Maximized throughput and quality",
              "Improved equipment uptime"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          }
        ]
      },

      {
        label: "Grow by adapting to change",
        cards: [
          {
            image: "/assets/img/dynamics365/cap3.1.avif",
            label: "M&A",
            title: "Streamline mergers and acquisitions",
            list: [
              "Reusable integration blueprints",
              "Faster entity onboarding",
              "Reduced disruption"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap3.2.avif",
            label: "Business Models",
            title: "Adopt new business models",
            list: [
              "Subscription and usage-based pricing",
              "Flexible revenue recognition",
              "ERP that evolves with your business"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap3.3.avif",
            label: "Customization",
            title: "Customize process to meet unique business needs",
            list: [
              "Tailored workflows",
              "Build AI agents with Copilot Studio",
              "Low-code and pro-code flexibility"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap3.4.avif",
            label: "Global",
            title: "Operate globally with ease",
            list: [
              "Localization in more than 180 countries",
              "Built-in compliance",
              "Centralized operations"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          }
        ]
      },

      {
        label: "Stay connected and safe",
        cards: [
          {
            image: "/assets/img/dynamics365/cap4.1.avif",
            label: "Integration",
            title: "Connect every aspect of your business",
            list: [
              "Unified finance, HR, and operations",
              "Real-time collaboration",
              "Copilot-powered orchestration"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap4.2.gif",
            label: "Infrastructure",
            title: "Create a modern, composable infrastructure",
            list: [
              "Standardized connectors",
              "Seamless integration",
              "Future-ready architecture"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap4.3.avif",
            label: "Security",
            title: "Operate more securely",
            list: [
              "Enterprise-grade protection",
              "Identity and data security",
              "Compliance controls"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap4.4.avif",
            label: "Reliability",
            title: "Help ensure availability and reliability",
            list: [
              "99.9 percent uptime",
              "Resilient infrastructure",
              "Business continuity"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          },
          {
            image: "/assets/img/dynamics365/cap4.5.avif",
            label: "Sustainability",
            title: "Achieve sustainability goals",
            list: [
              "Emissions tracking",
              "Automated ESG reporting",
              "Copilot-assisted compliance"
            ],
            link: "https://www.microsoft.com/en-us/dynamics-365/solutions/erp#tabs-pill-bar-occd67_tab3"
          }
        ]
      }
    ]}
  />
</div>



<section className="dynamics-section py-5" id="product">
  <div className="container">
    <h2 className="section-title text-center mb-4">Do more with Dynamics 365 and AI</h2>
    <p className="section-desc text-center">
      See how AI enhances Dynamics 365 applications to give every team from sales to operations an intelligent edge.
    </p>

    <DynamicsTabs tabs={tabsData} />
  </div>
</section>


<div id="getstarted">
    <AIUseCaseGrid
      title="Get Started with Dynamics 365"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #ffffff, #eef3ff)"
      columns={3}
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-rocket-takeoff",
          title: "Try for Free",
          desc: "Experience Dynamics 365 business applications hands-on for 30 days.",
          button: {
            label: "Start a free trial",
            link: "https://www.microsoft.com/en/dynamics-365/"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-telephone-inbound",
          title: "Contact Us",
          desc: "Speak with a product expert for personalised guidance.",
          button: {
            label: "Get in touch",
            link: "/contact"
          }
        },
        {
          iconType: "bootstrap",
          icon: "bi-journal-bookmark",
          title: "Learn More",
          desc: "Browse documentation, tutorials, and best practices for using Dynamics 365.",
          button: {
            label: "Browse resources",
            link: "https://learn.microsoft.com/en-us/dynamics365/"
          }
        }
      ]}
    />
</div>

    <div id="advantage">
 <MicrosoftBannerStats
      title="Get advantage over competition"
      subtitle=""
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #ffffff, #fff)"
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-graph-up-arrow",
          title: "60% reduction in reporting time",
          desc: "Achieve faster insights with unified and automated reporting across departments.",
        },
        {
          iconType: "bootstrap",
          icon: "bi-arrow-repeat",
          title: "51.5% improvement in supply chain efficiency",
          desc: "Optimise operations with predictive planning and end-to-end visibility.",
        },
        {
          iconType: "bootstrap",
          icon: "bi-lightning-charge",
          title: "Up to 55% increase in finance team productivity",
          desc: "Empower finance teams with automation, real-time data, and streamlined workflows.",
        },
      ]}
    />  
    </div>       
    

<div id="erp" style={{ backgroundColor: "#e5f1ff" }}>
    <ImageWithContentSection
  title="How We Help Modernise Your ERP System"
  orderControl={2} 
  imageSrc="/assets/img/dynamics365/erpimage.png"
  imageAlt="ERP Modernisation Services"

  paragraphs={[
    "Organisations face increasing pressure to modernise legacy ERP systems and improve scalability, flexibility, and resilience.",
    "We help enterprises transition from rigid legacy systems to cloud-powered ERP platforms that deliver real-time insight, improved efficiency, and connected experiences."
  ]}

  bulletPoints={[
    "Migrate to the cloud with confidence.",
    "Enhance business model transformation.",
    "Improve operational speed and data accuracy.",
    "Connect people, processes, and systems under one intelligent platform."
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

export default Dynamic365;