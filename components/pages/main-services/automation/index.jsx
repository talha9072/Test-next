"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import HeroWithRibbon from "@/components/data/services/StickyRibbon";
import OverviewComponent from "@/components/data/services/OverviewComponent";
import ServiceFeatureSlider from "@/components/data/services/ThreeRowSliderCards";
import Reveal from "@/components/Reveal";
import AIUseCaseGrid from "@/components/data/services/AIUseCaseGrid";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import MainServices from "@/components/data/services/main-services";
import ImplementSection from "@/components/data/services/implement";
import Whyus from "@/components/data/services/whyus";
import OtherServices from "@/components/data/services/otherservices";
import Testimonials from "@/components/data/services/testimonials";
import CTA from '@/components/data/cta';
import Widget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";





const Automation = () => {
  return (
    <div>
        <HeaderFour />
        {/* Hero Section */}

     <HeroWithRibbon
  serviceName="Automation Services"
  title="Accelerate Operations with Intelligent Automation"
  highlightText="Automation"
  subtitle="Streamline processes improve accuracy and scale your business faster with modern automation across cloud infrastructure applications and security."
  bgImage="/assets/img/power-bi/352294-hero-bg.avif"
  heroImage="/assets/img/automation/automation-hero.webp"
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

<OverviewComponent
  title="Modern Managed Services for Cloud-Driven Organisations"
  primaryColor="#0d2b75"
  backgroundType="color"
  backgroundColor="#e5f1ff"

  paragraphs={[
    "Novum’s Managed Services enable organisations to focus on innovation while we manage and optimise the daily operations of your cloud environment.",
    "Our certified cloud specialists provide continuous monitoring, security oversight, and performance optimisation to ensure your platforms remain resilient and future-ready.",
    "Through flexible engagement models and proactive 24/7 operations, we help enterprises increase reliability, enhance security posture, and maximise ROI across Azure, AWS, and Google Cloud."
  ]}

  listItems={[
    "Proactive 24/7 cloud monitoring, incident management, and platform health checks",
    "FinOps-aligned cost optimisation ensuring measurable and sustained savings",
    "Security-first governance aligned to ISO, CIS, NIST, and cloud best-practice frameworks",
    "Performance tuning and workload optimisation for enhanced reliability",
    "Continuous improvement with roadmap recommendations and operational insights"
  ]}
/>

<div id="service-offerings">
  <Reveal direction="fade" blur={true} delay={0.4} duration={1}>
    <ServiceFeatureSlider
      sectionId="service-offerings"
      title="Core Automation Capabilities"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to bottom right, #f7faff, #eef3ff)"
      primaryColor="#0d2b75"
      items={[
        {
          image: "/assets/img/automation/tab-1.jpg",
          title: "Infrastructure Automation",
          list: [
            "Automated provisioning and configuration",
            "Infrastructure-as-Code (Terraform, Bicep, ARM)",
            "Scalable, consistent environment deployment",
          ],
        },
        {
          image: "/assets/img/automation/tab-2.jpg",
          title: "Network Automation",
          list: [
            "Zero-touch network provisioning",
            "Policy enforcement via programmable workflows",
            "Automated monitoring and remediation",
          ],
        },
        {
          image: "/assets/img/automation/tab-3.jpg",
          title: "Security Automation",
          list: [
            "Automated threat detection & response (SIEM/SOAR)",
            "Continuous compliance and security scanning",
            "Identity and access governed through automation",
          ],
        },
        {
          image: "/assets/img/automation/tab-4.jpg",
          title: "Application Automation & CI/CD",
          list: [
            "Automated builds, testing, and deployments",
            "Full application lifecycle workflows",
            "Faster development with modern CI/CD pipelines",
          ],
        },
        {
          image: "/assets/img/automation/tab-5.jpg",
          title: "Cloud Automation & Optimisation",
          list: [
            "Resource provisioning & autoscaling",
            "Automated cloud governance and tagging",
            "Cost optimisation across multi-cloud environments",
          ],
        }
      ]}
    />
  </Reveal>
</div>


<div id="whyus">
  <Reveal direction="fade" blur={true} delay={0.4} duration={1}>
    <AIUseCaseGrid
      title="Accelerate Transformation with Our Automation Services"
      backgroundType="gradient"
      backgroundGradient="linear-gradient(to left top, #e5f1ff, #e5f1ff)"
      columns={3}
      items={[
        {
          iconType: "bootstrap",
          icon: "bi-arrows-move",
          title: "Business Process Automation",
          desc: "Automate routine finance, operations, and HR tasks with Dynamics 365 and Power Platform. From invoice approvals to payroll and procurement workflows, Novum streamlines complex business processes into seamless, rule-driven flows. Drive higher accuracy, faster approvals, and real-time visibility across your organization.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-bar-chart-line",
          title: "Data & Analytics Automation",
          desc: "Transform raw data into actionable insights with Microsoft Fabric and Azure. Our automations handle ingestion, transformation, and reporting ensuring real-time KPIs, predictive insights, and data-driven decisions. Eliminate manual reporting and empower every team with automated intelligence.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-people",
          title: "Collaboration & Productivity Automation",
          desc: "Boost team efficiency across Microsoft 365, Teams, and SharePoint. Novum builds smart workflows that automate document approvals, task reminders, and onboarding processes keeping collaboration structured and transparent. Empower your teams to focus on outcomes, not administration.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-code-slash",
          title: "Application & DevOps Automation",
          desc: "Accelerate app delivery and system reliability through Azure DevOps and GitHub Actions. We automate deployments, testing, and environment provisioning for faster innovation and fewer errors. Perfect for organizations scaling custom solutions and ISVs on the Microsoft Cloud.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-robot",
          title: "Customer & Frontline Automation",
          desc: "Enhance customer and frontline experiences with AI-powered, low-code automations. Using Dynamics 365, Power Virtual Agents, and Copilot Studio, Novum delivers self-service chatbots, automated ticket routing, and intelligent field-service scheduling improving satisfaction and reducing manual workload.",
          link: "#",
        },
        {
          iconType: "bootstrap",
          icon: "bi-shield-check",
          title: "Governance & Compliance Automation",
          desc: "Simplify tenant management and compliance operations through automated Microsoft 365 and Azure workflows. From license assignment to usage reporting and data retention, Novum ensures governance is proactive and efficient without adding administrative overhead.",
          link: "#",
        },
      ]}
    />
  </Reveal>
</div>


     
        
    <MainServices
  id="services"
  subtitle="Automation Services"
  title="Modern Automation Solutions to Improve Speed Accuracy and Scale"
  description="Novum delivers automation solutions that streamline operations reduce manual effort and improve overall performance. Our approach combines strategy consulting proof of concept validation implementation support and continuous optimization to ensure automation aligns with your business goals and delivers measurable results."
  image={{
    src: "/assets/img/automation/automate-2.webp",
    alt: "Automation Services by Novum",
  }}
  services={[
    {
      title: "Business Process Automation",
      desc: "Automate routine finance, operations, and HR tasks with Dynamics 365 and Power Platform. From invoice approvals to payroll and procurement workflows, Novum streamlines complex business processes into seamless, rule-driven flows. Drive higher accuracy, faster approvals, and real-time visibility across your organization.",
    },
    {
      title: "Data & Analytics Automation",
      desc: "Transform raw data into actionable insights with Microsoft Fabric and Azure. Our automations handle ingestion, transformation, and reporting ensuring real-time KPIs, predictive insights, and data-driven decisions. Eliminate manual reporting and empower every team with automated intelligence.",
    },
    {
      title: "Collaboration & Productivity Automation",
      desc: "Boost team efficiency across Microsoft 365, Teams, and SharePoint. Novum builds smart workflows that automate document approvals, task reminders, and onboarding processes keeping collaboration structured and transparent. Empower your teams to focus on outcomes, not administration.",
    },
    {
      title: "Application & DevOps Automation",
      desc: "Accelerate app delivery and system reliability through Azure DevOps and GitHub Actions. We automate deployments, testing, and environment provisioning for faster innovation and fewer errors. Perfect for organizations scaling custom solutions and ISVs on the Microsoft Cloud.",
    },
    {
      title: "Customer & Frontline Automation",
      desc: "Enhance customer and frontline experiences with AI-powered, low-code automations. Using Dynamics 365, Power Virtual Agents, and Copilot Studio, Novum delivers self-service chatbots, automated ticket routing, and intelligent field-service scheduling improving satisfaction and reducing manual workload.",
    },
    {
      title: "Governance & Compliance Automation",
      desc: "Simplify tenant management and compliance operations through automated Microsoft 365 and Azure workflows. From license assignment to usage reporting and data retention, Novum ensures governance is proactive and efficient without adding administrative overhead.",
    },
  ]}
/>




     <ImplementSection
  id="implement"
  subtitle="Benefits"
  title="What You Gain from NOVUM Automation Services"
  description="Novum strengthens your operations through automation that improves speed accuracy and scalability across your entire technology environment. Our automation capabilities help reduce manual effort enhance reliability and support long term growth."
  items={[
    {
      img: "/assets/img/automation/tab-1.jpg",
      title: "Infrastructure Automation",
      desc: "Automate deployment configuration and full management of IT infrastructure to improve efficiency and consistency.",
    },
    {
      img: "/assets/img/automation/tab-2.jpg",
      title: "Network Automation",
      desc: "Streamline network provisioning monitoring and policy control through automated workflows that reduce operational effort.",
    },
    {
      img: "/assets/img/automation/tab-3.jpg",
      title: "Security Automation",
      desc: "Enable automated threat detection incident response and compliance checks to strengthen your security posture.",
    },
    {
      img: "/assets/img/automation/tab-4.jpg",
      title: "Application Automation",
      desc: "Support application delivery with automated pipelines deployment processes and full lifecycle management.",
    },
    {
      img: "/assets/img/automation/tab-5.jpg",
      title: "Cloud Automation",
      desc: "Automate cloud resource provisioning orchestration and cost management to achieve better performance and control.",
    },
  ]}
/>



   
      <Whyus
  id="whyus"
  subtitle="Why Choose Us"
  title="Why Choose Novum for Consulting and Advisory Services"
  description="Novum provides deep strategic insight strong cloud expertise and structured advisory frameworks that help organizations plan transform and grow with confidence. Our approach ensures every decision aligns with long term business objectives and delivers measurable impact."
  counters={[
    { value: 1700, suffix: "+", label: "Technical Certifications" },
    { value: 11000, suffix: "+", label: "Individual Skill Accreditations" },
    { value: 25, suffix: "+", label: "Cloud and Technology Specializations" },
    { value: 10, suffix: "+", label: "Years of Advisory Excellence" },
  ]}
  features={[
    {
      icon: "fa-solid fa-user-tie",
      title: "Certified Multi Cloud Specialists",
      desc: "Experts certified across Azure AWS Google Cloud and VMware delivering strong architectural and advisory capability.",
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Structured Advisory Frameworks",
      desc: "Clear discovery planning and roadmap design supported by proven methods used to accelerate decision making and delivery.",
    },
    {
      icon: "fa-solid fa-handshake",
      title: "End to End Cloud Guidance",
      desc: "Support across strategy modernization governance security and cost management ensuring alignment with business goals.",
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

export default Automation;