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
    id: 'tab_collaboration',
    label: 'Boost Team Collaboration',
    content: {
      imageSrc: '/assets/img/microsoft-deployment/tab-1.png',
      imageAlt: 'Microsoft Teams Collaboration',
      title: 'Boost Team Collaboration',
      paragraphs: [
        'Enable seamless teamwork with Microsoft Teams, Outlook, and SharePoint. Empower employees to chat, meet, and co-author documents in real time from any device.',
        <a
          key="cta-collab"
          href="https://www.microsoft.com/en/microsoft-teams/group-chat-software"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Learn about Teams <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
  {
    id: 'tab_security',
    label: 'Strengthen Security & Compliance',
    content: {
      imageSrc: '/assets/img/microsoft-deployment/tab-2.png',
      imageAlt: 'Microsoft 365 Security Features',
      title: 'Strengthen Security & Compliance',
      paragraphs: [
        'Protect sensitive business data with enterprise-grade security, identity management, and built-in compliance tools. Ensure safe communication and data handling across your organization.',
        <a
          key="cta-security"
          href="https://www.microsoft.com/en/security/business/microsoft-365-security"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Explore Microsoft 365 Security <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
  {
    id: 'tab_productivity',
    label: 'Maximize Productivity',
    content: {
      imageSrc: '/assets/img/microsoft-deployment/tab-3.png',
      imageAlt: 'Microsoft 365 Productivity Tools',
      title: 'Maximize Productivity',
      paragraphs: [
        'Empower your workforce with Word, Excel, PowerPoint, and OneDrive—all integrated into the cloud. Improve efficiency with AI-powered features and real-time collaboration.',
        <a
          key="cta-productivity"
          href="https://www.microsoft.com/en/microsoft-365"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Discover Microsoft 365 <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
  {
    id: 'tab_training',
    label: 'Smooth Onboarding & Training',
    content: {
      imageSrc: '/assets/img/microsoft-deployment/tab-4.png',
      imageAlt: 'Microsoft 365 Training and Onboarding',
      title: 'Smooth Onboarding & Training',
      paragraphs: [
        'Ensure successful adoption with guided onboarding, role-based training, and continuous support. Help your teams embrace new tools confidently while reducing downtime.',
        <a
          key="cta-training"
          href="https://adoption.microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Microsoft Adoption Hub <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
];

const Dynamics365 = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/microsoft-deployment/hero.avif"
            icon="/assets/img/service-cards/365-deployment.png"
            title="Microsoft 365 Deployment"
            borderColorStart="#0a62a9"
            borderColorEnd="#1d88e5"
        />

        <SoftwareSolutionsSection
            title={`Seamless Microsoft 365 Deployment for Modern Work`}
            paragraphs={[
                "Microsoft 365 empowers organizations with a complete suite of productivity and collaboration tools, including Teams, Outlook, Word, Excel, PowerPoint, and SharePoint. By centralizing communication and work management on a secure cloud platform, it enables your teams to stay connected and productive—whether working in the office or remotely.",
                "At Novum, we provide end-to-end Microsoft 365 deployment services, from licensing and user onboarding to training and adoption. Our experts ensure a smooth transition, helping your workforce embrace new tools confidently while keeping data secure and collaboration effortless."
            ]}
            imageSrc="/assets/img/microsoft-deployment/deployment-1.png"
            altText="Microsoft 365 Deployment"
        />

        <SoftwareDetailSection
            imageSrc="/assets/img/microsoft-deployment/deployment-2.png"
            imageAlt="Microsoft 365 Deployment Benefits"
            numberMain="5"
            numberSub="+"
            label="Deployment Benefits"
            heading={
                <>
                Unlock the Full Power of{" "}
                <span
                    className="highlight-separator mb-0 pb-0"
                    data-shadow-animation="true"
                    data-animation-delay="500"
                >
                    Microsoft 365
                    <span className="z-index-minus-1">
                    <img src="/images/demo-digital-agency-highlight-separator.png" alt="" />
                    </span>
                </span>
                </>
            }
            listItems={[
                "Seamless Collaboration: Empower teams with Teams, Outlook, and SharePoint for real-time communication and file sharing.",
                "Enhanced Security: Protect sensitive data with built-in compliance, encryption, and identity management.",
                "Smooth Onboarding: Streamline user setup, licensing, and training to maximize adoption across the organization.",
                "Cloud Productivity: Access Word, Excel, and PowerPoint anytime, anywhere with reliable cloud integration.",
                "Business Continuity: Ensure uptime and secure remote work with Microsoft’s global cloud infrastructure."
            ]}
            ctaText="Get Started"
            ctaHref="/contact"
            phoneText="971 56 192 06 16"
            phoneHref="tel:971561920616"
        />

      <CoreCapabilitiesSection
            heading="Explore Key Capabilities"
            tabs={coreTabs}
          />

        <WhySection
            heading="Why Choose Microsoft 365 Deployment with Novum?"
            subheadingLines={[
                "Empower your workforce with secure, cloud-based productivity tools that enable collaboration from anywhere.",
                "Novum ensures a smooth deployment journey—from licensing and onboarding to training and long-term adoption."
            ]}
            imgSrc="/assets/img/microsoft-deployment/deployment-3.png"
            imgAlt="Microsoft 365 Deployment Overview"
            cards={[
                {
                iconClass: 'fa-solid fa-users text-novum-blue',
                title: 'Enable Seamless Collaboration',
                text: 'Unify communication and teamwork with Microsoft Teams, Outlook, and SharePoint for real-time productivity.',
                },
                {
                iconClass: 'fa-solid fa-shield-halved text-novum-blue',
                title: 'Enterprise-Grade Security',
                text: 'Protect sensitive business data with built-in security, compliance, and identity management across all applications.',
                },
                {
                iconClass: 'fa-solid fa-chart-line text-novum-blue',
                title: 'Scale with Confidence',
                text: 'Deploy at your own pace and expand capabilities as your business grows—without disrupting operations.',
                },
            ]}
         />

       <CTA
            bgImage="/assets/img/cta-bg.webp"
            heading="Ready to Deploy Microsoft 365 with Novum?"
            subText="From secure setup and licensing to user onboarding and training, Novum ensures your Microsoft 365 deployment is seamless and future-ready. Empower your teams to collaborate and perform at their best."
            buttonText="Get in Touch"
            buttonHref="/contact"
        />

      <Footer />
    </div>
  );
};

export default Dynamics365;