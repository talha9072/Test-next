"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import SoftwareDetailSection from "@/components/data/services/SoftwareDetailSection";
import WhySection from "@/components/data/services/WhySection";
import IssuesSection from "@/components/data/industries/issues";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";


const Health = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/industries/food/food-hero.jpg"
            icon="/assets/img/service-cards/food-retail.png"
            title="Food Retail & Distribution Solutions"
            borderColorStart="#E0EBF0"
            borderColorEnd="#FED34C"
        />
        <SoftwareSolutionsSection
            title={`Delivering Operational Clarity and Real-Time Insights Across the Supply Chain`}
            paragraphs={[
            "In the fast-moving world of food retail and distribution, success depends on the ability to manage inventory, track performance, and respond quickly to customer demand. Novum helps food retailers, wholesalers, and distributors build intelligent, scalable systems that integrate data from sourcing to shelf. With cloud-based platforms, real-time analytics, and predictive tools, we give businesses the insight and flexibility they need to thrive in a competitive, high-volume environment.",
            ]}
            imageSrc="/assets/img/industries/food/food-1.jpg"
            altText="Food Retail"
        />
        
        <IssuesSection
  title="Food Retail and Distribution"
  subtitle="Key Challenges"
  imageSrc="/assets/img/industries/food/food-4.png"
  imageAlt="Food Retail and Distribution Challenges"
  leftCards={[
    { icon: "bi bi-diagram-3", title: "Disconnected Systems", text: "Across procurement, inventory, logistics, and sales." },
    { icon: "bi bi-eye", title: "Limited Real-Time Visibility", text: "Into stock levels, expiration dates, and demand fluctuations." }
  ]}
  rightCards={[
    { icon: "bi bi-clipboard-data", title: "Manual Reporting Bottlenecks", text: "Slowing down decision-making and reducing accuracy." },
    { icon: "bi bi-graph-up-arrow", title: "Forecasting Challenges", text: "Difficulty predicting product performance across regions and channels." }
  ]}
/>

        <SoftwareDetailSection
  imageSrc="/assets/img/industries/food/food-3.png"
  imageAlt="Measurable Impact Delivered"
  numberMain="6"
  numberSub="+"
  label="Retail & Distribution Partners Served"
  heading={(
    <>Measurable Impact Delivered <span className="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
        <span className="z-index-minus-1">
          <img src="images/demo-digital-agency-highlight-separator.png" alt="" />
        </span>
      </span></>
  )}
  listItems={[
    'Improved supply chain visibility across all distribution hubs and retail points',
    'Reduced inventory loss and overstock through predictive demand planning',
    'Faster reporting cycles with real-time analytics across departments',
    'Enhanced compliance tracking and food safety monitoring',
    'Greater alignment between sales, procurement, and logistics teams'
  ]}
  ctaText="Let’s talk now"
  ctaHref="#contact"
  phoneText="971 56 192 06 16"
  phoneHref="tel:971561920616"
/>

        <WhySection
  heading="Why Food Retailers and Distributors Choose Novum"
  subheadingLines={[
    "Novum brings deep technical capability and industry knowledge to every engagement. As a Microsoft Solutions Partner, we design scalable, secure, and purpose-built platforms that help food businesses operate more efficiently, respond faster to market shifts, and maintain compliance across complex supply chains.",
    "Our tools turn real-time data into better decisions and more predictable outcomes."
  ]}
  imgSrc="/assets/img/industries/food/food-2.jpg"
  imgAlt="Food Retail Digital Transformation"
  cards={[
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Data Warehouse and Integration',
      text: 'Unify data from ERP systems, POS terminals, warehouse platforms, and supply chain tools into a single source of truth for reporting and planning.',
    },
    {
      iconClass: 'fa-solid fa-chart-column text-novum-blue',
      title: 'Power BI for Retail Analytics',
      text: 'Track key metrics such as sell-through rates, inventory turnover, delivery efficiency, and regional performance through customizable dashboards built for business leaders.',
    },
    {
      iconClass: 'fa-solid fa-cloud text-novum-blue',
      title: 'Azure Cloud Infrastructure',
      text: 'Migrate operations to a secure, scalable cloud platform that supports peak demand, real-time data access, and business continuity.',
    },
    {
      iconClass: 'fa-solid fa-brain text-novum-blue',
      title: 'AI-Driven Demand Forecasting',
      text: 'Use machine learning to anticipate customer demand, optimize inventory levels, and reduce waste across distribution centers and retail locations.',
    },
    {
      iconClass: 'fa-solid fa-gears text-novum-blue',
      title: 'Custom Software Solutions',
      text: 'Build tailored applications for order tracking, supplier coordination, and distribution planning that streamline daily operations and reduce delays.',
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Microsoft 365 for Operational Coordination',
      text: 'Equip staff across locations with modern collaboration tools for faster communication and improved responsiveness.',
    },
  ]}
/>

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Modernize Your Food Retail and Distribution Operations?"
                        subText="Speak with our team to explore how data, cloud, and automation can transform your retail and distribution workflows.
                                 Book a consultation with Novum today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Health;