"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import Microsoft365Section from "@/components/data/services/Microsoft365Section";
import Microsoft365BusinessPlans from "@/components/data/services/Microsoft365BusinessPlans";
import EnterprisePlans from "@/components/data/services/EnterprisePlans";
import PlansComparison from "@/components/data/services/PlansComparison";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";


// Comparison data array (with all apps included)
const comparisonPlans = [
  {
    title: 'Microsoft 365 E3',
    features: [
      'Microsoft 365 apps for desktop and mobile',
      'Windows for Enterprise',
      'Chat, meetings, and file sharing',
      '1 TB of cloud storage',
      'Security and identity management',
    ],
    apps: [
      { src: '/assets/img/azure/word.png',               alt: 'Word' },
      { src: '/assets/img/azure/excel.png',              alt: 'Excel' },
      { src: '/assets/img/azure/powerpoint.png',         alt: 'PowerPoint' },
      { src: '/assets/img/azure/windows.png',            alt: 'Windows' },
      { src: '/assets/img/azure/teams.png',              alt: 'Teams' },
      { src: '/assets/img/azure/outlook.png',            alt: 'Outlook' },
      { src: '/assets/img/azure/exchange.png',           alt: 'Exchange' },
      { src: '/assets/img/azure/sharepoint.png',         alt: 'Sharepoint' },
      { src: '/assets/img/azure/onenote.png',            alt: 'OneNote' },
      { src: '/assets/img/azure/onedrive.png',           alt: 'OneDrive' },
      { src: '/assets/img/azure/microsoftstream.png',    alt: 'Microsoft Stream' },
      { src: '/assets/img/azure/microsoft-bookings.png', alt: 'Microsoft Booking' },
      { src: '/assets/img/azure/microsoft-publisher.png',alt: 'Microsoft Publisher (PC only)' },
      { src: '/assets/img/azure/microsoft-access.png',   alt: 'Microsoft Access (PC only)' },
      { src: '/assets/img/azure/viva-connections.png',   alt: 'Viva Connections' },
      { src: '/assets/img/azure/viva-engage.png',        alt: 'Viva Engage' },
      { src: '/assets/img/azure/viva-insights.png',      alt: 'Viva Insights' },
      { src: '/assets/img/azure/viva-lists.png',         alt: 'Microsoft Lists' },
      { src: '/assets/img/azure/forms.png',              alt: 'Microsoft Forms' },
      { src: '/assets/img/azure/sway.png',               alt: 'Sway' },
      { src: '/assets/img/azure/visio.png',              alt: 'Visio' },
      { src: '/assets/img/azure/power-apps.png',         alt: 'Power Apps' },
      { src: '/assets/img/azure/power-automate.png',     alt: 'Power Automate' },
      { src: '/assets/img/azure/virtual-agents.png',     alt: 'Power Virtual Agents' },
      { src: '/assets/img/azure/planner.png',            alt: 'Microsoft Planner' },
      { src: '/assets/img/azure/todo.png',               alt: 'Microsoft To-Do' },
    ],
    ctaText: 'Contact Sales',
    ctaHref: '#',
  },
  {
    title: 'Microsoft 365 E5',
    features: [
      'Everything in E3, plus',
      'Advanced security and compliance',
      'Audio conferencing for up to 1,000 attendees',
    ],
    apps: [
      { src: '/assets/img/azure/word.png',               alt: 'Word' },
      { src: '/assets/img/azure/excel.png',              alt: 'Excel' },
      { src: '/assets/img/azure/powerpoint.png',         alt: 'PowerPoint' },
      { src: '/assets/img/azure/windows.png',            alt: 'Windows' },
      { src: '/assets/img/azure/teams.png',              alt: 'Teams' },
      { src: '/assets/img/azure/outlook.png',            alt: 'Outlook' },
      { src: '/assets/img/azure/exchange.png',           alt: 'Exchange' },
      { src: '/assets/img/azure/sharepoint.png',         alt: 'Sharepoint' },
      { src: '/assets/img/azure/onenote.png',            alt: 'OneNote' },
      { src: '/assets/img/azure/onedrive.png',           alt: 'OneDrive' },
      { src: '/assets/img/azure/microsoftstream.png',    alt: 'Microsoft Stream' },
      { src: '/assets/img/azure/microsoft-bookings.png', alt: 'Microsoft Booking' },
      { src: '/assets/img/azure/microsoft-publisher.png',alt: 'Microsoft Publisher (PC only)' },
      { src: '/assets/img/azure/microsoft-access.png',   alt: 'Microsoft Access (PC only)' },
      { src: '/assets/img/azure/viva-connections.png',   alt: 'Viva Connections' },
      { src: '/assets/img/azure/viva-engage.png',        alt: 'Viva Engage' },
      { src: '/assets/img/azure/viva-insights.png',      alt: 'Viva Insights' },
      { src: '/assets/img/azure/viva-lists.png',         alt: 'Microsoft Lists' },
      { src: '/assets/img/azure/forms.png',              alt: 'Microsoft Forms' },
      { src: '/assets/img/azure/sway.png',               alt: 'Sway' },
      { src: '/assets/img/azure/visio.png',              alt: 'Visio' },
      { src: '/assets/img/azure/power-apps.png',         alt: 'Power Apps' },
      { src: '/assets/img/azure/power-automate.png',     alt: 'Power Automate' },
      { src: '/assets/img/azure/virtual-agents.png',     alt: 'Power Virtual Agents' },
      { src: '/assets/img/azure/planner.png',            alt: 'Microsoft Planner' },
      { src: '/assets/img/azure/todo.png',               alt: 'Microsoft To-Do' },
    ],
    ctaText: 'Contact Sales',
    ctaHref: '#',
  },
  {
    title: 'Microsoft 365 E1',
    features: [
      'Web-only apps and services',
      'Includes Teams, Outlook, and OneDrive',
      'Ideal for frontline & remote workers',
    ],
    apps: [
      { src: '/assets/img/azure/word.png',               alt: 'Word' },
      { src: '/assets/img/azure/excel.png',              alt: 'Excel' },
      { src: '/assets/img/azure/powerpoint.png',         alt: 'PowerPoint' },
      { src: '/assets/img/azure/windows.png',            alt: 'Windows' },
      { src: '/assets/img/azure/teams.png',              alt: 'Teams' },
      { src: '/assets/img/azure/outlook.png',            alt: 'Outlook' },
      { src: '/assets/img/azure/exchange.png',           alt: 'Exchange' },
      { src: '/assets/img/azure/sharepoint.png',         alt: 'Sharepoint' },
      { src: '/assets/img/azure/onenote.png',            alt: 'OneNote' },
      { src: '/assets/img/azure/onedrive.png',           alt: 'OneDrive' },
      { src: '/assets/img/azure/microsoftstream.png',    alt: 'Microsoft Stream' },
      { src: '/assets/img/azure/microsoft-bookings.png', alt: 'Microsoft Booking' },
      { src: '/assets/img/azure/viva-engage.png',        alt: 'Viva Engage' },
      { src: '/assets/img/azure/viva-insights.png',      alt: 'Viva Insights' },
      { src: '/assets/img/azure/viva-lists.png',         alt: 'Microsoft Lists' },
      { src: '/assets/img/azure/forms.png',              alt: 'Microsoft Forms' },
      { src: '/assets/img/azure/sway.png',               alt: 'Sway' },
      { src: '/assets/img/azure/visio.png',              alt: 'Visio' },
      { src: '/assets/img/azure/power-apps.png',         alt: 'Power Apps' },
      { src: '/assets/img/azure/power-automate.png',     alt: 'Power Automate' },
      { src: '/assets/img/azure/virtual-agents.png',     alt: 'Power Virtual Agents' },
      { src: '/assets/img/azure/planner.png',            alt: 'Microsoft Planner' },
      { src: '/assets/img/azure/todo.png',               alt: 'Microsoft To-Do' },
    ],
    ctaText: 'Contact Sales',
    ctaHref: '#',
  },
];

const Azure = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/azure/azure-hero.png"
            icon="https://novum-ae.netlify.app/images/service-cards/azure.svg"
            title="Microsoft Azure Solutions"
            borderColorStart="#32ADE9"
            borderColorEnd="#095EAA"
        />

        <SoftwareSolutionsSection
                    title={`Automate, Optimize,and Innovate`}
                    paragraphs={[
                    "At NOVUM, we design intelligent systems that transform the way businesses operate. Using artificial intelligence and IoT technologies, we automate workflows, monitor environments, and unlock insights in real time.",
                    "Our solutions are built for scalability and aligned with your organizational goals. Whether integrating machine learning into customer journeys or enabling IoT across physical locations, we help you gain control, visibility, and performance where it matters most."
                    ]}
                    imageSrc="/assets/img/azure/azure-1.png"
                    altText="Azure"
                />

        <Microsoft365Section
      badgeTitle="Microsoft 365"
      badgeText="Microsoft 365 is a suite of apps that help you stay connected and get things done."
      plans={[
        {
          title: 'Microsoft 365 Business',
          backgroundImage: '/assets/img/azure/bg-2.png',
        },
        {
          title: 'Microsoft 365 Enterprise',
          backgroundImage: '/assets/img/azure/bg-1.png',
        },
      ]}
      diffText="The primary difference between the two plans is the number of users offered. Microsoft 365 Business can be used and shared with up to 300 users, whereas Microsoft 365 Enterprise can be shared with an unlimited number of users."
      subtitle="Novum Offers You Migration from Different Platforms to Microsoft 365"
      migrations={[
        {
          number: '01',
          title: 'Staged Migration',
          text: `Office 365 staged migration moves everything over in batches.
It transitions all of your resource mailboxes and existing users from Exchange 2003 or 2007 to Exchange Online.`,
        },
        {
          number: '02',
          title: 'Cutover Migration',
          text: `A cutover migration is an immediate transition from an on-premises Exchange system to Office 365.
All your resources are migrated at once, including mailboxes, contacts, and distribution groups.`,
        },
        {
          number: '03',
          title: 'Hybrid Migration',
          text: `Allows you to integrate Office 365 with your on-premises Exchange servers and your existing directory services.
Synchronize and manage user accounts for both environments.`,
        },
        {
          number: '04',
          title: 'IMAP Migration',
          text: `IMAP (Internet Message Access Protocol) migration allows you to transition users from Gmail or any other email system that supports IMAP integration to Office 365.`,
        },
      ]}
    />
    <Microsoft365BusinessPlans
      badgeTitle="Microsoft 365 Business"
      plans={[
        {
          title: 'Microsoft<br>365 Business Basic',
          gradient: 'linear-gradient(135deg, #EB5321, #FBB8A2)',
        },
        {
          title: 'Microsoft<br>365 Business Standard',
          gradient: 'linear-gradient(135deg, #7FBA00, #CDFB6C)',
        },
        {
          title: 'Microsoft<br>365 Business Premium',
          gradient: 'linear-gradient(135deg, #08A1EF, #CCEEFF)',
        },
        {
          title: 'Microsoft<br>365 Apps',
          gradient: 'linear-gradient(135deg, #FCBB01, #FFEAAE)',
        },
      ]}
    />
        <EnterprisePlans
      badgeTitle="Microsoft 365 Enterprise"
      cards={[
        {
          iconSrc: '/assets/img/azure/bx-lock 1.png',
          iconAlt: 'Lock Icon',
          titleHtml: 'Microsoft 365 E3 — Get best-in-class productivity apps combined with core security and compliance capabilities for your enterprise.',
        },
        {
          iconSrc: '/assets/img/azure/bx-check-circle 1.png',
          iconAlt: 'Check Icon',
          titleHtml: 'Microsoft 365 E5 — Get best-in-class productivity apps and advanced security, compliance, voice and analytical capabilities for your enterprise.',
        },
        {
          iconSrc: '/assets/img/azure/bx-cloud 1.png',
          iconAlt: 'Cloud Icon',
          titleHtml: 'Microsoft 365 F3 — <span class="text-light-purple">Formerly Microsoft 365 F1</span> Empower your frontline workforce with productivity apps and cloud services that allow them to do their best work.',
        },
        {
          iconSrc: '/assets/img/azure/bytesize_download.png',
          iconAlt: 'Download Icon',
          titleHtml: 'Download the full enterprise plans comparison table',
          ctaText: 'Get the full comparison table (PDF)',
          ctaHref: '/downloads/enterprise-comparison.pdf'
        }
      ]}
    />

{/* Comparison Plans Section */}
      <PlansComparison plans={comparisonPlans} />

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

export default Azure;