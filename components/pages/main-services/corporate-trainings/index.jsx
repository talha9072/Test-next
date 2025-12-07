"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon1";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import ExpertiseSplitSection from "@/components/data/services/ExpertiseSplitSection";
import ServiceSplitPanel from "@/components/data/services/ServiceSplitPanel";
import CourseDurationBox from "@/components/data/services/CourseDurationBox";
import MicrosoftNumberedFAQ from "@/components/data/services/MicrosoftNumberedFAQ";
import CTAPage from '@/components/data/services/CTAPage';
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
  serviceName="Corporate Trainings"
  title="Empowering Teams Through Practical, Expert-Led Learning"
  highlightText="Corporate Training"
  subtitle="At Novum, we value education and continuous learning. Our corporate training programs help teams develop the practical skills needed to solve real business challenges using modern technologies."
  bgImage="/assets/img/corporate-training/bg-training.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Expertise", href: "#training-expertise" },
    { label: "Programs", href: "#isc-program-overview" },
    { label: "Course Outline", href: "#course-outline" },
    { label: "FAQ", href: "#faq-isc" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>

 
<div id="about">
  <OverviewComponent
    title="Why Education Matters for Organisations"
    primaryColor="#0d2b75"
    backgroundType="color"
    backgroundColor="#e5f1ff"

    paragraphs={[
      "Technology evolves rapidly, and organisations must continuously strengthen internal capabilities to remain competitive. Building technological literacy enables teams to innovate, improve efficiency, and make better data-driven decisions.",
      "Corporate training equips employees at every level with the knowledge and practical skills needed to leverage modern tools, streamline workflows, and support long-term organisational transformation."
    ]}

    listItems={[
      "Strengthens the organisation’s ability to innovate",
      "Improves technical proficiency and productivity",
      "Enhances data literacy and analytical decision-making",
      "Enables faster, more efficient workflows",
      "Supports organisational transformation and growth"
    ]}
  />
</div>


      <SoftwareSolutionsSection
  title={
    <>
      Training designed to elevate skills
      across every level of your organisation
    </>
  }
  paragraphs={[
    "We deliver corporate trainings as part of our consulting services, focusing on practical, real-world skills that employees can apply immediately in their daily work. Our instructors specialise in Microsoft technologies and provide structured, outcome-focused training for senior executives, department managers, technical teams, and analysts.",
    "Each program is fully customisable to align with your industry, role requirements, and organisational goals—ensuring meaningful skill development, improved performance, and measurable business impact."
  ]}
  imageSrc="/assets/img/corporate-training/cooperate-1.webp"
  altText="Corporate Training and Professional Development Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>


<div id="training-expertise">
    <ServiceFeatureSlider
      sectionId="training-expertise"
      title="About Novum Training Expertise"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to bottom right, #ffffff, #eef3ff)"
      primaryColor="#0d2b75"
      items={[
        {
          image: "/assets/img/corporate-training/tab-1.webp",
          title: "World-Class Microsoft Expertise",
          list: [
            "Led by Microsoft Certified Trainers (MCT)",
            "Includes Microsoft MVPs and MCT Regional Leads",
            "Instruction from globally recognised educators"
          ]
        },
        {
          image: "/assets/img/corporate-training/tab-2.webp",
          title: "Enterprise-Level Training Delivery",
          list: [
            "More than 500 professionals trained each year",
            "Programs designed for modern organisations",
            "Hands-on learning aligned with business goals"
          ]
        },
        {
          image: "/assets/img/corporate-training/tab-3.webp",
          title: "Microsoft Technology Training",
          list: [
            "Microsoft 365, Power Platform, Azure",
            "Modern workplace and cloud productivity",
            "Best practices for enterprise technology adoption"
          ]
        },
        {
          image: "/assets/img/corporate-training/tab-4.webp",
          title: "Data & Analytics Upskilling",
          list: [
            "Data literacy and reporting fundamentals",
            "Power BI, data modelling, and visualisation",
            "Analytical decision-making for teams"
          ]
        },
        {
          image: "/assets/img/corporate-training/tab-5.webp",
          title: "Leadership & Productivity Training",
          list: [
            "Corporate communication and collaboration",
            "Workflow optimisation and productivity habits",
            "Managerial development and role-based coaching"
          ]
        }
      ]}
    />
</div>


<div id="isc-program-overview">
  <ExpertiseSplitSection
    sectionId="isc-program-overview"
    title="Instructional Skills Certification (ISC) Full Programme Overview"
    subtitle="Microsoft-recognised training pathway designed for professionals pursuing the Train-The-Trainer (TTT) and MCT credential."
    tabs={[
      /* ===========================
         TAB 1 — ISC OVERVIEW (MERGED)
      ============================ */
      {
        label: "ISC Overview",
        title: "ISC Course for MCT Certification",
        desc:
          "Our flagship offering—the Instructional Skills Certification (ISC) is a Microsoft-recognised programme designed for professionals preparing to enter the Train-The-Trainer (TTT) pathway and ultimately qualify as Microsoft Certified Trainers (MCT). This workshop builds the instructional, presentation, and facilitation skills needed to deliver high-quality Microsoft courses.",
        points: [
          "Microsoft-recognised Train-The-Trainer pathway",
          "Develop real-world instructional and presentation skills",
          "Build confidence delivering Microsoft technical courses",
          "Hands-on practice with personalised expert feedback",
          "Ideal for aspiring MCTs and corporate trainers"
        ],
        cta: "Learn About ISC",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/instructional-skills-provider-requirements"
      },

      /* ===========================
         TAB 2 — TTT OVERVIEW
      ============================ */
      {
        label: "TTT Overview",
        title: "Train-The-Trainer (TTT) Program",
        desc:
          "The TTT programme prepares certified IT professionals to become authorised Microsoft trainers. Participants master communication, content delivery, and demonstration skills required for teaching Microsoft technologies with clarity and confidence.",
        points: [
          "Develop essential presentation and communication skills",
          "Learn effective teaching and facilitation techniques",
          "Understand Microsoft’s authorised trainer expectations",
          "Foundational step toward Microsoft Certified Trainer (MCT)"
        ],
        cta: "Learn About TTT",
        link:"https://marketplace.microsoft.com/en-us/marketplace/consulting-services/unifiedcommunicationscom1587146169440.train_the_trainer"

      },

      /* ===========================
         TAB 3 — ISC COURSE DETAILS
      ============================ */
      {
        label: "ISC Course",
        title: "What the ISC Training Includes",
        desc:
          "The ISC course blends practical exercises, peer feedback, and expert-led demonstrations. Participants practice delivering lessons, structuring content, and managing both technical and non-technical audiences with confidence.",
        points: [
          "Practical delivery exercises with instructor feedback",
          "Individual and group presentations",
          "Frameworks for designing structured training content",
          "Confidence-building for technical & non-technical delivery"
        ],
        cta: "Explore ISC Training",
        link: "https://learn.microsoft.com/en-us/credentials/certifications/instructional-skills-provider-requirements"
      },

      /* ===========================
         TAB 4 — COURSE OBJECTIVES
      ============================ */
      {
        label: "Course Objectives",
        title: "Key Learning Outcomes",
        desc:
          "By completing this course, participants gain the instructional and facilitation skills required to deliver Microsoft content effectively and maximise organisational training value.",
        points: [
          "Design complete training programs end-to-end",
          "Enhance technical and instructional delivery skills",
          "Develop a personalised and effective teaching style",
          "Improve learner engagement and knowledge retention",
          "Maximise training ROI for your organisation"
        ],
        cta: "View Full Objectives",
        link:"https://learn.microsoft.com/en-us/training/"
      }
    ]}
  />
</div>

<div id="duration">
  <CourseDurationBox
  />
</div>

<div id="course-outline">
  <ServiceSplitPanel
    title="Course Outline (Modules 1–6)"
    primaryColor="#0d2b75"
    items={[

      /* -------------------- MODULE 1 -------------------- */
      {
        label: "Module 1: Introduction to MCT Instructional Skills Certification",
        paragraphs: [
          "This module introduces participants to the Microsoft Certified Trainer ecosystem and explains the role and responsibilities of an MCT.",
          "Learners understand why instructional skills certification is essential for delivering Microsoft technical training effectively."
        ],
        listItems: [
          "Overview of the MCT program",
          "Role and responsibilities of an MCT",
          "Importance of instructional skills certification"
        ]
      },

      /* -------------------- MODULE 2 -------------------- */
      {
        label: "Module 2: Designing Training Programs",
        paragraphs: [
          "Participants learn the foundations of training program design, including how to analyse needs, define learning objectives, and structure a complete training curriculum.",
          "This module builds strong instructional planning capabilities required for high quality Microsoft course delivery."
        ],
        listItems: [
          "Stages of training design",
          "Needs analysis and learning objectives",
          "Curriculum creation & planning",
          "Assessment strategies"
        ]
      },

      /* -------------------- MODULE 3 -------------------- */
      {
        label: "Module 3: Facilitating Knowledge Transfer",
        paragraphs: [
          "This module focuses on communication and learning facilitation techniques required for successful technical training.",
          "Participants learn how to deliver content clearly, maintain engagement, and adapt to different learner styles."
        ],
        listItems: [
          "Effective communication techniques",
          "Enhancing technical learning",
          "Active learning facilitation",
          "Understanding learner styles"
        ]
      },

      /* -------------------- MODULE 4 -------------------- */
      {
        label: "Module 4: Developing Personal Teaching Style",
        paragraphs: [
          "Participants explore their strengths as trainers and learn how to develop a unique, effective teaching style.",
          "Tools and frameworks are introduced to help trainers structure content and incorporate feedback for continuous improvement."
        ],
        listItems: [
          "Identifying trainer strengths",
          "Instructional design tools",
          "Building a unique teaching approach",
          "Incorporating feedback"
        ]
      },

      /* -------------------- MODULE 5 -------------------- */
      {
        label: "Module 5: Enhancing Instructional Techniques",
        paragraphs: [
          "This module covers advanced instructional techniques that make training more engaging, interactive, and impactful.",
          "Participants learn how to troubleshoot sessions, manage diverse learner needs, and integrate multimedia effectively."
        ],
        listItems: [
          "Delivering engaging presentations",
          "Interactive teaching methods",
          "Using multimedia & technology in training",
          "Troubleshooting technical sessions"
        ]
      },

      /* -------------------- MODULE 6 -------------------- */
      {
        label: "Module 6: Maximising Training Effectiveness",
        paragraphs: [
          "This module focuses on measuring and improving the long-term effectiveness of training programs.",
          "Participants learn how to align training outcomes with organisational goals and demonstrate real ROI."
        ],
        listItems: [
          "Measuring learning outcomes",
          "Improving training quality",
          "Aligning training to organisational ROI"
        ]
      }
    ]}
  />
</div>

<div id="cta-training">
  <CTAPage
    title="Take the Next Step in Your Training Career"
    description="Gain the skills, structure, and confidence to deliver Microsoft courses at a professional level."
    buttonLabel="Join the Programme"
    buttonLink="/contact"
    backgroundType="image"
    backgroundImage="/assets/img/corporate-training/corporate-cta.webp"
    textColor="#ffffff"
    sectionClass="py-7"
    overlayOpacity={0.65}
  />
</div>

<div id="faq-isc">
  <MicrosoftNumberedFAQ
    sectionId="isc-faq"
    headline="Frequently Asked Questions"
    backgroundType="gradient"
    backgroundValue="linear-gradient(to bottom right, #f7faff, #eef3ff)"
    items={[
      {
        question: "Where can I find official details about the MCT Program?",
        answer:
          "You can view the official Microsoft MCT certification requirements on the Microsoft Learn website by searching for MCT Certification."
      },
      {
        question: "How can I get more details about the Train-The-Trainer (TTT) Program?",
        answer:
          "For complete details, schedules, and consultation about the TTT program, please email our team at ilgar.zarbaliyev@novum.tech."
      },
      {
        question: "Why choose Novum Tech for instructor training?",
        answer:
          "Novum provides Microsoft aligned training content, a full day dedicated to troubleshooting and technical mastery, and access to instructors who include an MCT Regional Lead and Microsoft MVP."
      },
      {
        question: "Who can participate in the ISC or TTT programs?",
        answer:
          "There are no prerequisites for the corporate Train-The-Trainer program. For the MCT focused ISC program, participants must have completed a Microsoft technical certification."
      },
      {
        question: "Is online training available?",
        answer:
          "Yes, the training is available in both online and in person formats."
      },
      {
        question: "What languages are supported?",
        answer:
          "Training is offered in English, Azerbaijani, and Turkish."
      },
      {
        question: "What technical topics are covered in the programme?",
        answer:
          "Topics include Microsoft certifications and exams, the Microsoft Learn platform, MCT program benefits, teaching resources, digital materials, lab setup, the MTM portal process, and troubleshooting techniques."
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

export default Training;