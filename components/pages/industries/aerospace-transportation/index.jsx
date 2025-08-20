"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const Aerospace = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/aerospace/aero-hero.jpg"
            icon="/assets/img/service-cards/aeropace.png"
            title="Aerospace & Transportation Solutions"
            borderColorStart="#767689"
            borderColorEnd="#FCC667"
        />
        <SoftwareSolutionsSection
            title={`Enabling Real-Time Oversight and Operational Excellence with Scalable Data Platforms`}
            paragraphs={[
            "Aerospace and transportation companies rely on coordinated, time-sensitive operations that demand both accuracy and agility. Novum delivers integrated digital solutions that support fleet management, turnaround performance, predictive maintenance, and logistics optimization. By connecting data across departments and locations, we help aviation and transportation businesses improve safety, reduce delays, and enhance visibility from ground control to executive offices.",
            ]}
            imageSrc="/assets/img/industries/aerospace/aero-2.jpg"
            altText="Aerospace"
        />
        
        <IssuesSection
        title="Aerospace and Transportation"
        subtitle="Key Challenges"
        imageSrc="/assets/img/industries/aerospace/aero-4.png"
        imageAlt="Aerospace and Transportation Challenges"
        leftCards={[
            { icon: "bi bi-eye", title: "Limited Real-Time Visibility", text: "Into fleet status, turnaround metrics, and asset performance." },
            { icon: "bi bi-diagram-3", title: "Disconnected Systems", text: "Across scheduling, maintenance, logistics, and operations." }
        ]}
        rightCards={[
            { icon: "bi bi-clipboard-data", title: "Manual KPI Tracking", text: "Slowing down reporting and delaying interventions." },
            { icon: "bi bi-graph-up", title: "Demand & Resource Optimization Challenges", text: "Difficulty forecasting demand and managing energy usage, costs, and disruptions." }
        ]}
        />

        <SoftwareDetailSection
        imageSrc="/assets/img/industries/aerospace/aero-5.png"
        imageAlt="Measurable Impact Delivered"
        numberMain="6"
        numberSub="+"
        label="Aerospace & Transportation Partners Served"
        heading={(
            <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                <span className="z-index-minus-1">
                
                </span>
            </span></>
        )}
        listItems={[
            'Real-time monitoring of fleet performance and logistics',
            'Reduced turnaround times through automated alerts and task tracking',
            'Improved on-time delivery and service reliability across transport networks',
            'Predictive analytics supporting proactive maintenance and schedule optimization',
            'Greater efficiency in resource utilization and operational planning'
        ]}
        ctaText="Let’s talk now"
        ctaHref="#contact"
        phoneText="971 56 192 06 16"
        phoneHref="tel:971561920616"
        />

        <WhySection
        heading="Why Aerospace and Transportation Companies Choose Novum"
        subheadingLines={[
            "Novum has helped national carriers and transport organizations build intelligent operations with real-time data, AI, and cloud technologies.",
            "As a Microsoft Solutions Partner, we bring deep technical capability and practical industry experience to deliver platforms that scale, integrate, and drive results.",
            "Our approach improves control, efficiency, and responsiveness in mission-critical environments."
        ]}
        imgSrc="/assets/img/industries/aerospace/aero-3.jpg"
        imgAlt="Aerospace and Transportation Digital Transformation"
        cards={[
            {
            iconClass: 'fa-solid fa-truck-plane text-novum-blue',
            title: 'Custom Turnaround and Logistics Platforms',
            text: 'Develop digital tools to monitor aircraft or fleet turnaround activities, track logistics workflows, and enforce accountability across roles.',
            },
            {
            iconClass: 'fa-solid fa-cloud text-novum-blue',
            title: 'Azure Cloud Infrastructure',
            text: 'Support scalable, high-performance operations by migrating to Microsoft Azure for improved speed, reliability, and centralization of data.',
            },
            {
            iconClass: 'fa-solid fa-chart-column text-novum-blue',
            title: 'Power BI for Operations Dashboards',
            text: 'Deliver dashboards for executives and operations teams to monitor KPIs such as on-time performance, fuel usage, fleet availability, and logistics efficiency.',
            },
            {
            iconClass: 'fa-solid fa-brain text-novum-blue',
            title: 'AI-Based Forecasting and Disruption Response',
            text: 'Use machine learning to predict delays, monitor traffic and airspace data, and optimize schedules based on real-time insights.',
            },
            {
            iconClass: 'fa-solid fa-database text-novum-blue',
            title: 'Data Warehouse and Systems Integration',
            text: 'Consolidate data from scheduling, telemetry, ticketing, ERP, and third-party systems into one consistent analytics environment.',
            },
            {
            iconClass: 'fa-solid fa-people-group text-novum-blue',
            title: 'Microsoft 365 for Cross-Location Collaboration',
            text: 'Enhance communication and coordination between field teams, maintenance crews, and executive leadership using secure Microsoft collaboration tools.',
            },
        ]}
        />

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Upgrade Your Aerospace or Transportation Operations?"
                        subText="Speak with Novum’s specialists to learn how cloud and data solutions can enhance your logistics, safety, and service performance.
                                 Book a consultation today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Aerospace;