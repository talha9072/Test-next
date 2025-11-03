"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Microsoftdeployment = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

      <HeroWithRibbon
  serviceName="Microsoft 365 Deployment Services"
  title="Seamless, Secure, and Scalable Cloud Productivity"
  highlightText="Microsoft 365"
  subtitle="Empower your workforce with modern collaboration, productivity, and security expertly deployed and managed by NOVUM for organizations of all sizes."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/microsoft-deployment/hero.png"
  heroButtons={[
    { label: "Contact Us", href: "/contact" },
  ]}
  links={[
    { label: "Overview", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Implementation", href: "#implement" },
    { label: "Why Choose?", href: "#whyus" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Other Services", href: "#otherservices" },
  ]}
/>
 


      <SoftwareSolutionsSection
  title={
    <>
      Why Microsoft 365 Deployment Is
      Essential for the Modern Workplace
    </>
  }
  paragraphs={[
    "Modern businesses rely on seamless communication, secure collaboration, and unified access to data from anywhere. Microsoft 365 brings these capabilities together in one cloud-powered ecosystem enabling teams to work smarter, faster, and more securely.",
    "From Microsoft Teams and Outlook to SharePoint and OneDrive, every tool is designed to enhance productivity and streamline operations. With NOVUM’s deployment expertise, your organization can transition smoothly to Microsoft 365 reducing downtime, improving adoption, and ensuring maximum return on investment.",
  ]}
  imageSrc="/assets/img/microsoft-deployment/deployment-1.webp"
  altText="Microsoft 365 Deployment Solutions"
  sectionClass="position-relative overflow-hidden py-7"
/>
        
     <MainServices
  id="services"
  subtitle="Microsoft 365 Deployment Services"
  title="Driving Collaboration, Productivity, and Secure Cloud Adoption"
  description="NOVUM enables organizations to deploy and adopt Microsoft 365 with confidence — ensuring seamless setup, migration, and workforce enablement. From email and data migration to Teams integration and user onboarding, our experts deliver a secure, scalable, and productivity-focused deployment experience. With structured rollout strategies and best practices, we help your business transition smoothly to the Microsoft cloud ecosystem."
  image={{
    src: "/assets/img/microsoft-deployment/deployment-2.webp",
    alt: "Microsoft 365 Deployment Process",
  }}
  services={[
    {
      title: "Planning & Assessment",
      desc: "Evaluating your IT landscape, licensing needs, and readiness to design a tailored Microsoft 365 deployment roadmap.",
    },
    {
      title: "Setup & Configuration",
      desc: "Provisioning Microsoft 365 environments, domains, and users with optimal security and governance settings.",
    },
    {
      title: "Data & Email Migration",
      desc: "Seamlessly migrating emails, files, and user data from on-premise or third-party platforms to Microsoft 365 cloud.",
    },
    {
      title: "Teams & SharePoint Enablement",
      desc: "Configuring collaboration tools for unified communication, document management, and team productivity.",
    },
    {
      title: "User Training & Adoption",
      desc: "Delivering structured onboarding and role-based training to maximize tool adoption and user confidence.",
    },
    {
      title: "Ongoing Support & Optimization",
      desc: "Continuous monitoring, updates, and performance tuning to ensure your Microsoft 365 environment runs securely and efficiently.",
    },
  ]}
/>


      <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="How Microsoft 365 Deployment Transforms the Modern Workplace"
  description="Implementing Microsoft 365 with NOVUM empowers organizations to collaborate seamlessly, secure their data, and enhance productivity from anywhere. Our proven deployment approach ensures faster adoption, consistent performance, and measurable business impact across all teams."
  items={[
    {
      img: "/assets/img/microsoft-deployment/tab-1.webp",
      title: "Seamless Collaboration",
      desc: "Connect teams in real time with Outlook, Teams, and SharePoint for unified communication and effortless file sharing across devices.",
    },
    {
      img: "/assets/img/microsoft-deployment/tab-2.webp",
      title: "Enterprise Security & Compliance",
      desc: "Safeguard your organization with built-in identity management, data encryption, and compliance controls that meet global standards.",
    },
    {
      img: "/assets/img/microsoft-deployment/tab-3.webp",
      title: "Cloud-Enabled Productivity",
      desc: "Empower employees to work anywhere with always-available access to Word, Excel, PowerPoint, and OneDrive in the secure Microsoft cloud.",
    },
    {
      img: "/assets/img/microsoft-deployment/tab-4.webp",
      title: "Centralized IT Management",
      desc: "Simplify control of users, devices, and applications through a unified Microsoft 365 admin center for easy governance and maintenance.",
    },
    {
      img: "/assets/img/microsoft-deployment/tab-5.webp",
      title: "Scalable Cloud Infrastructure",
      desc: "Easily expand users, storage, and licenses as your organization grows, ensuring long-term scalability and dependable system performance.",
    },
  ]}
/>

   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Partner with NOVUM for Microsoft Dynamics 365"
  description="NOVUM empowers organizations to achieve digital excellence through strategic Dynamics 365 deployment and optimization. Our certified experts deliver scalable, results-driven solutions that connect teams, automate workflows, and create measurable business value from day one."
  counters={[
    { value: 30, suffix: "+", label: "Successful Implementations" },
    { value: 10, suffix: "+", label: "Industries Served" },
    { value: 95, suffix: "%", label: "Client Satisfaction Rate" },
    { value: 8, suffix: "+", label: "Years of Microsoft Partnership" },
  ]}
  features={[
    {
      icon: "fa-solid fa-handshake",
      title: "Certified Microsoft Partner",
      desc: "Trusted by enterprises for delivering seamless implementation, integration, and long-term solution management.",
    },
    {
      icon: "fa-solid fa-gears",
      title: "Tailored Business Solutions",
      desc: "We configure Dynamics 365 modules to match your workflows, ensuring efficiency and measurable transformation.",
    },
    {
      icon: "fa-solid fa-brain",
      title: "AI-Enhanced Performance",
      desc: "Leveraging Power Platform and intelligent automation to improve forecasting, reporting, and decision-making.",
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

export default Microsoftdeployment;