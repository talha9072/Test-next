"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import DynamicsTabs from "@/components/data/services/DynamicsTabs";
import MicrosoftBannerStats from "@/components/data/services/MicrosoftBannerStats";
import PricingCardsSection from "@/components/data/services/PricingCardsSection";
import CTAPage from '@/components/data/services/CTAPage';
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";



const tabsData = [
  {
    label: "Teams",
    title: "Review what matters most with Copilot in Teams",
    description:
      "Copilot in Microsoft Teams helps you run more effective meetings, stay aligned with your team, track decisions, and instantly summarise discussions you missed.",

    bullets: [
      "Summarise meetings and capture key decisions automatically",
      "Provide quick recaps for missed calls or long threads",
      "Identify action items and responsibilities in real time",
      "Analyse meeting context to improve clarity and follow-up"
    ],

    bottomLabel: "Microsoft Teams",
    bottomLogo: "/assets/img/copilot/teams-logo.svg",

    images: [
      "/assets/img/copilot/teams.png",
      
    ]
  },

  {
    label: "Word",
    title: "Transform ideas into polished documents with Copilot in Word",
    description:
      "Copilot in Word helps you draft, rewrite, summarise, and edit content in minutes turning raw ideas into professional documents effortlessly.",

    bullets: [
      "Generate high-quality first drafts instantly",
      "Rewrite sections in any tone or style",
      "Create summaries, outlines, or structured content",
      "Speed up content creation and editing workflows"
    ],

    bottomLabel: "Microsoft Word",
    bottomLogo: "/assets/img/copilot/word-logo.svg",

    images: [
      "/assets/img/copilot/word.webp",
      
    ]
  },

  {
    label: "Excel",
    title: "Analyse data in seconds with Copilot in Excel",
    description:
      "Copilot in Excel helps you explore datasets, uncover insights, and build models without writing complex formulas making analytics accessible to everyone.",

    bullets: [
      "Identify trends, anomalies, and patterns instantly",
      "Perform what-if scenarios and predictive analysis",
      "Build pivot tables, charts, and summaries automatically",
      "Explain data relationships and insights in natural language"
    ],

    bottomLabel: "Microsoft Excel",
    bottomLogo: "/assets/img/copilot/excel-logo.svg",

    images: [
      "/assets/img/copilot/excel.webp",
    ]
  },

  {
    label: "PowerPoint",
    title: "Create stunning presentations effortlessly",
    description:
      "Copilot in PowerPoint converts documents, outlines, and ideas into beautiful, ready-to-present slide decks complete with layouts, visuals, and speaker notes.",

    bullets: [
      "Generate full slide decks from Word documents or prompts",
      "Suggest layouts, images, and design elements automatically",
      "Rewrite slide content for clarity, tone, or length",
      "Create speaker notes and summaries with one click"
    ],

    bottomLabel: "Microsoft Powerpoint",
    bottomLogo: "/assets/img/copilot/powerpoint-logo.svg",

    images: [
      "/assets/img/copilot/powerpoint.webp",

    ]
  }
];



const Copilot = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Copilot for Microsoft 365"
  title="Work smarter and faster with AI in Microsoft 365"
  highlightText="Copilot 365"
  subtitle="Novum helps organisations unlock Copilot to boost productivity, automate tasks, and improve outcomes across Teams, Word, Excel, PowerPoint, and Outlook."
  bgImage="/assets/img/copilot/copilot-bg.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Products", href: "#product" },
    { label: "Transformation", href: "#advantage" },
    { label: "Copilot Role", href: "#roles" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 
<div id="about">
  <OverviewComponent
    title="Shape the Future of Work with Microsoft Copilot"
    primaryColor="#0d2b75"
    backgroundType="color"
    backgroundColor="#e5f1ff"

    paragraphs={[
      "Microsoft Copilot brings the power of generative AI directly into Microsoft 365, enabling your teams to work smarter, faster, and with greater precision across every task.",
      "By integrating AI into tools your organisation already uses Word, Excel, PowerPoint, Teams, and Outlook Copilot helps automate routine work, generate insights, and support better decision-making at every level.",
      "With enterprise-grade security, privacy, and compliance built in, Copilot empowers your workforce to focus on high-value outcomes while reducing manual effort and operational overhead."
    ]}

    listItems={[
      "Automates repetitive tasks and streamlines daily workflows",
      "Delivers AI-powered insights that improve organisational decision-making",
      "Enhances collaboration and communication across teams",
      "Helps employees create high-quality content in less time",
      "Strengthens productivity while maintaining enterprise security and compliance"
    ]}
  />
</div>




<section className="dynamics-section py-5" id="product">
  <div className="container">
    <h2 className="section-title text-center mb-4">Copilot Across Microsoft 365</h2>
    <p className="section-desc text-center">
      See how Copilot transforms productivity inside Teams, Word, Excel, and PowerPoint helping your organisation communicate better, analyse faster, and create more impactful work.
    </p>

    <DynamicsTabs tabs={tabsData} />
  </div>
</section>

<div id="advantage">
  <MicrosoftBannerStats
    title="Copilot is Transforming Work"
    subtitle="Organisations are already experiencing measurable productivity gains with Microsoft Copilot"
    backgroundType="gradient"
    backgroundGradient="linear-gradient(to left top, #ffffff, #fff)"
    items={[
      {
        iconType: "bootstrap",
        icon: "bi-graph-up-arrow",
        title: "77% save time & work faster",
        desc: "Teams report significant time savings and smoother workflows using Copilot across daily tasks.",
      },
      {
        iconType: "bootstrap",
        icon: "bi-stars",
        title: "69% improved work quality",
        desc: "Copilot helps produce higher-quality documents, insights, and communication with less effort.",
      },
      {
        iconType: "bootstrap",
        icon: "bi-lightning-charge",
        title: "70% feel more productive overall",
        desc: "Users say Copilot boosts confidence, reduces manual effort, and enhances productivity across roles.",
      },
    ]}
  />
</div>  

<div id="roles">
  <PricingCardsSection
    sectionId="roles"
    backgroundImage="/assets/img/azure/bg-azure-2.png"
    title="Enhance Every Role with AI"
    intro="Microsoft Copilot elevates productivity across all business functions by automating routine tasks, generating insights, and enabling teams to focus on high-value work."
    primaryColor="#0d2b75"
    subtitle="Copilot role"
    cards={[
      {
        title: "Sales",
        desc: "Empower sellers with AI that improves customer engagement, accelerates deal cycles, and eliminates manual admin work.",
        list: [
          "Personalised customer interactions",
          "Automated meeting preparation",
          "CRM updates and conversation summaries",
          "AI-generated insights & recommendations"
        ],
        cta: "Explore Copilot for Sales",
        link: "https://www.microsoft.com/en-us/microsoft-365-copilot"
      },
      {
        title: "Service",
        desc: "Enable support teams to resolve issues faster, deliver consistent customer experiences, and reduce handling times.",
        list: [
          "Automated case summaries",
          "Knowledge article suggestions",
          "Real-time agent assistance",
          "Shorter resolution cycles"
        ],
        cta: "Explore Copilot for Service",
        link: "https://www.microsoft.com/en-us/microsoft-365-copilot"
      },
      {
        title: "Security",
        desc: "Supercharge your security operations with AI that accelerates detection, investigation, and response workflows.",
        list: [
          "Faster incident investigation",
          "Automated threat analysis",
          "Natural-language security queries",
          "Cross-tool attack correlation"
        ],
        cta: "Explore Copilot for Security",
        link: "https://www.microsoft.com/en-us/microsoft-365-copilot"
      },
      {
        title: "Development",
        desc: "Boost developer productivity with AI-generated code, automated documentation, and intelligent refactoring support.",
        list: [
          "Faster development cycles",
          "Real-time code suggestions",
          "Automated comments & documentation",
          "Reduced repetitive coding tasks"
        ],
        cta: "Explore GitHub Copilot",
        link: "https://m365.cloud.microsoft/chat"
      }
    ]}
  />
</div>


<CTAPage
  title="Need Support Implementing Copilot?"
  description="Novum helps organisations deploy, integrate, secure, and adopt Microsoft Copilot across every department ensuring real business value from day one. From licensing to configuration to employee training, we guide you through the full journey."
  buttonLabel="Get in touch"
  buttonLink="/contact"
  backgroundType="image"
  backgroundImage="/assets/img/copilot/copilot-cta.webp"
  textColor="#ffffff"
  sectionClass="py-7"
  overlayOpacity={0.80}
/>



<div id="testimonials">
    <Testimonials
      subtitle="Client Stories"
      title="What Clients Say About Working With Novum"
      items={[
    {
      img: "/assets/img/clients/thumbnail_99x99_Huseyn_Zeynalli.jpg",
      text: "With a cloud solution custom-designed for the pharmaceutical industry by Novum Information Technology, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.",
      author: "Majid Ismailov",
      position: "Head of Data Management, Avromed",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Elvin_Mammadov.jpg",
      text: "With Microsoft Dynamics 365 implemented and tailored for the aviation industry by Novum Information Technology, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.",
      author: "Zaur Dibirov",
      position: "Director of Finance & Accounting, Azerbaijan Airlines",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
      text: "Partnering with Novum Information Technology, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services tailored to our business model. Through seamless integrations and custom development, Novum helped us unify data, automate workflows, and empower every department with intelligent insights that drive faster, smarter decisions.",
      author: "Daniel V",
      position: "IT & Security Director, Kitopi",
    },
    {
      img: "/assets/img/clients/thumbnail_99x99_Nizami_Mansirov.jpg",
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

export default Copilot;