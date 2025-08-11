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
    id: 'tab_modular',
    label: 'Use Modular, Prebuilt Applications',
    content: {
      imageSrc: '/assets/img/dynamics365/dynamics-4.webp',
      imageAlt: 'Use Modular, Prebuilt Applications',
      title: 'Use Modular, Prebuilt Applications',
      paragraphs: [
        'Easily connect Dynamics 365 apps with your current systems and tools to expand capabilities.',
        <a
          key="cta-modular"
          href="https://www.microsoft.com/en/customers/story/814362-siemens-manufacturing-dynamics-365-field-service"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Siemens case study <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
  {
    id: 'tab_e2e',
    label: 'Connect Solutions End to End',
    content: {
      imageSrc: '/assets/img/dynamics365/dynamics-5.webp',
      imageAlt: 'Connect Solutions End to End',
      title: 'Connect Solutions End to End',
      paragraphs: [
        'Link business applications across departments to optimize processes and customer engagement.',
        <a
          key="cta-e2e"
          href="https://www.microsoft.com/en/customers/story/1496198354107568434-tillamook-consumergoods"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          Tillamook case study <i className="fa-solid fa-arrow-right ms-1"></i>
        </a>,
      ],
    },
  },
  {
    id: 'tab_onboard',
    label: 'Rapidly Deploy and Onboard',
    content: {
      imageSrc: '/assets/img/dynamics365/dynamics-6.webp',
      imageAlt: 'Rapidly Deploy and Onboard',
      title: 'Rapidly Deploy and Onboard',
      paragraphs: [
        'Implement solutions and drive adoption quickly to accelerate innovation and business performance.',
        <a
          key="cta-onboard"
          href="https://www.microsoft.com/en/customers/story/1339024248153617465-hp-inc-consumer-goods-dynamics-365"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-two mt-4"
        >
          HP case study <i className="fa-solid fa-arrow-right ms-1"></i>
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
            bgImage="/assets/img/dynamics365/dynamics-hero.webp"
            icon="/assets/img/service-cards/dynamic365.svg"
            title="Microsoft Dynamics 365"
            borderColorStart="#3352c0"
            borderColorEnd="#5875e5"
        />
        <SoftwareSolutionsSection
            title={`Intelligent Business Applications That Power Performance`}
            paragraphs={[
            "Dynamics 365 is a suite of smart business applications that helps organizations streamline operations, improve customer experiences, and make faster, data-driven decisions. Built on the Microsoft ecosystem, it connects with your existing tools to deliver scalable, end-to-end solutions across finance, sales, supply chain, customer service, and more.",
            "At Novum, we help you unlock the full value of Dynamics 365 by tailoring it to your goals, accelerating implementation, and ensuring long-term usability. Whether you're enhancing a specific workflow or reimagining enterprise-wide systems, we support every step of your digital journey."
            ]}
            imageSrc="/assets/img/dynamics365/dynamics-2.webp"
            altText="Dynamics 365"
        />
        <SoftwareDetailSection
          imageSrc="/assets/img/dynamics365/dynamics-3.webp"
          imageAlt="AI in Dynamics 365"
          numberMain="6"
          numberSub="+"
          label="AI-Enhanced Workstreams"
          heading={
            <>
              How AI Enhances{" "}
              <span
                className="highlight-separator mb-0 pb-0"
                data-shadow-animation="true"
                data-animation-delay="500"
              >
                Dynamics 365
                <span className="z-index-minus-1">
                  <img src="/images/demo-digital-agency-highlight-separator.png" alt="" />
                </span>
              </span>
            </>
          }
          listItems={[
            "Sales: Guide reps with predictive insights and automate follow-ups.",
            "Marketing: Deliver targeted campaigns and track engagement across channels.",
            "Customer Service: Resolve issues faster with real-time suggestions and automation.",
            "Field Service: Coordinate field agents with intelligent scheduling and mobile support.",
            "Supply Chain: Improve inventory management and demand forecasting.",
            "Finance: Strengthen reporting, visibility, and planning with integrated financial data."
          ]}
          ctaText="Explore AI in Dynamics 365"
          ctaHref="/contact"
          phoneText="971 56 192 06 16"
          phoneHref="tel:971561920616"
        />


 <CoreCapabilitiesSection
      heading="Explore Key Capabilities"
      tabs={coreTabs}
    />
       

<section className="py-5">
  <div className="container">
    {/* Heading */}
    <div className="row justify-content-center mb-4">
      <div className="col-lg-8 col-md-10 text-center">
        <h2 className="ls-minus-1px text-dark-gray fw-600 mb-3">
          See How Every Department Wins with Dynamics 365 and AI
        </h2>
        <p className="mb-0">
          Explore how AI-powered Dynamics 365 applications help various teams work smarter, faster, and more efficiently.
        </p>
      </div>
    </div>

    {/* Tabs + content */}
    <div className="row">
      <div className="col tab-style-03">
        <ul className="nav nav-tabs justify-content-center text-center fw-500 border-color-light-medium-gray mb-5" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#dept_sales" role="tab">Sales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#dept_marketing" role="tab">Marketing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#dept_cs" role="tab">Customer Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#dept_fs" role="tab">Field Service</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#dept_sc" role="tab">Supply Chain</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#dept_finance" role="tab">Finance</a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Sales */}
          <div className="tab-pane fade show active" id="dept_sales" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-sales.webp" alt="Dynamics 365 Sales" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Accelerate Revenue with AI-Powered Sales Intelligence
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Equip your sales team with real-time insights, automation, and AI-driven guidance using Microsoft Dynamics 365 Sales.
                  With Sales Copilot, reps streamline workflows, personalize engagement, and close deals faster with intelligent recommendations and next-best actions.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Sales</span>
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div className="tab-pane fade" id="dept_marketing" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-marketing.webp" alt="Dynamics 365 Customer Insights" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Create Personalized Journeys Fueled by Data and AI
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Deliver meaningful marketing experiences by combining customer data with AI-enabled journey orchestration.
                  Dynamics 365 Customer Insights unifies profiles, triggers real-time engagement, and optimizes campaigns across the journey.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Customer Insights</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="tab-pane fade" id="dept_cs" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-customer.webp" alt="Dynamics 365 Customer Service" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Deliver Fast, Personalized Support at Scale
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Transform customer experiences by empowering agents with generative AI, automation, and real-time insights.
                  Dynamics 365 Customer Service enables faster case resolution, consistent service delivery, and seamless omnichannel support that builds long-term loyalty.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Customer Service</span>
              </div>
            </div>
          </div>

          {/* Field Service */}
          <div className="tab-pane fade" id="dept_fs" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-field.webp" alt="Dynamics 365 Field Service" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Optimize Service Delivery with Real-Time Intelligence
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Improve operational efficiency and exceed expectations with smart scheduling, remote diagnostics, and proactive maintenance.
                  Dynamics 365 Field Service connects frontline workers with the tools they need to deliver timely, high-quality service on-site or remotely.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Field Service</span>
              </div>
            </div>
          </div>

          {/* Supply Chain */}
          <div className="tab-pane fade" id="dept_sc" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-supplychain.webp" alt="Dynamics 365 Supply Chain Management" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Build a Resilient and Predictive Supply Chain
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Adapt to market shifts, mitigate risk, and drive sustainability with an AI-powered supply chain.
                  Dynamics 365 Supply Chain Management provides real-time visibility, predictive planning, and automated workflows to reduce disruptions.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Supply Chain Management</span>
              </div>
            </div>
          </div>

          {/* Finance */}
          <div className="tab-pane fade" id="dept_finance" role="tabpanel">
            <div className="row align-items-center justify-content-center g-0">
              <div className="col-lg-6 col-md-11 position-relative md-mb-30px">
                <figure className="mb-0">
                  <img src="/assets/img/dynamics365/tab-finance.webp" alt="Dynamics 365 Finance" className="w-95 rounded mb-3" />
                </figure>
              </div>
              <div className="col-lg-5 col-md-11 offset-lg-1 mt-4 mt-lg-0">
                <h3 className="fs-15 mb-3 text-gradient-fast-blue-purple fw-700 d-inline-block text-uppercase ls-1px">
                  Gain Financial Clarity and Drive Profitability
                </h3>
                <p className="mb-3 w-95 sm-w-100">
                  Move beyond transactional finance with predictive insights, risk mitigation, and real-time visibility.
                  Dynamics 365 Finance empowers smarter decisions, reduces fraud, and improves profitability via automated processes and unified financial data.
                </p>
                <span className="badge bg-primary-subtle text-novum-blue fw-600">Powered by: Dynamics 365 Finance</span>
              </div>
            </div>
          </div>
        </div>{/* /.tab-content */}
      </div>
    </div>
  </div>
</section>


        <WhySection
  heading="Why Choose Microsoft Dynamics 365?"
  subheadingLines={[
    "Bring together data, automation, and AI to transform how teams sell, serve, and operate—all on a secure Microsoft cloud foundation.",
    "Start fast, scale confidently, and connect experiences across sales, service, finance, supply chain, and more."
  ]}
  imgSrc="/assets/img/dynamics365/why.webp"
  imgAlt="Microsoft Dynamics 365 overview"
  cards={[
    {
      iconClass: 'fa-solid fa-bolt text-novum-blue',
      title: 'Accelerate Results',
      text: 'Quickly adopt or extend applications to deliver value sooner. Enable teams to work smarter with built-in automation and AI.',
    },
    {
      iconClass: 'fa-solid fa-database text-novum-blue',
      title: 'Unify Customer & Operational Data',
      text: 'Create a connected environment where every team has access to relevant data, insights, and tools for better decisions and engagement.',
    },
    {
      iconClass: 'fa-solid fa-layer-group text-novum-blue',
      title: 'Grow Without Complexity',
      text: 'Start with what you need and expand as you grow. Modular apps let you innovate without disrupting existing operations.',
    },
  ]}
/>

       

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Let’s Build Your Solution"
                        subText="Ready to improve efficiency, agility, and outcomes with Microsoft Dynamics 365? Novum is here to help you take the next step with strategy, implementation, and support."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default Dynamics365;