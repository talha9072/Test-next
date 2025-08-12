"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import BannerSection from "@/components/data/services/banner";
import SoftwareSolutionsSection from "@/components/data/services/SoftwareSolutionsSection";
import WhySection from "@/components/data/services/WhySection";
import CoreCapabilitiesSection from "@/components/data/services/CoreCapabilitiesSection";
import CTA from '@/components/data/cta';
import Footer from "@/components/layout/footers/footer";



const coreTabs = [
  {
    id: 'tab_communication',
    label: 'Strategic Communication and Training',
    content: {
      imageSrc: '/assets/img/change-management-adoption/tab1.webp',
      imageAlt: 'Strategic Communication and Training',
      title: 'Strategic Communication and Training',
      paragraphs: [
        'We create structured communication plans and interactive training materials to ensure that every stakeholder understands the vision and benefits of the transformation. These materials are tailored for different audiences including leadership, department heads, and end users.'
      ]
    }
  },
  {
    id: 'tab_enablement',
    label: 'Role-Based Enablement',
    content: {
      imageSrc: '/assets/img/change-management-adoption/tab2.webp',
      imageAlt: 'Role-Based Enablement',
      title: 'Role-Based Enablement',
      paragraphs: [
        'Our programs are designed around real user roles and responsibilities. This ensures that training sessions and adoption strategies directly reflect the way employees perform their daily tasks, increasing relevance and retention.'
      ]
    }
  },
  {
    id: 'tab_resistance',
    label: 'Resistance Management and Feedback Loops',
    content: {
      imageSrc: '/assets/img/change-management-adoption/tab3.webp',
      imageAlt: 'Resistance Management and Feedback Loops',
      title: 'Resistance Management and Feedback Loops',
      paragraphs: [
        'We identify common sources of resistance early and work with internal champions to address concerns proactively. Post-launch, we implement feedback loops and performance reviews to monitor adoption and fine-tune ongoing support.'
      ]
    }
  }
];

const Management = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/change-management-adoption/management-hero.webp"
            icon="/assets/img/service-cards/change-management.png"
            title="Change Management and Adoption"
            borderColorStart="#F9B817"
            borderColorEnd="#EB5B3B"
        />
        <SoftwareSolutionsSection
            title={`Align People with Technology`}
            paragraphs={[
            "Digital transformation is not just about systems and tools it’s about people. At Novum, we recognize that successful technology deployment requires a clear change management strategy that supports your teams through every step of the transformation. Our change management and adoption services help organizations build readiness, drive engagement, and ensure that users embrace new ways of working.",
            "We focus on aligning digital initiatives with human behavior, business culture, and operational workflows to ensure long-term success."
            ]}
            imageSrc="/assets/img/change-management-adoption/management-1.webp"
            altText="Management Adoptation"
        />

        <section className="py-5 changemanagement" id="ms-sustainability-overview-alt">
  <div className="container">
    
    {/* Row 1 — Supporting Long-Term Adoption (image left, text right) */}
    <div className="row align-items-center g-4 mb-4 mb-lg-5">
      <div className="col-12 col-lg-6">
        <img
          src="/assets/img/change-management-adoption/management-2.webp"
          alt="Supporting Long-Term Adoption"
          className="img-fluid rounded-4"
        />
      </div>
      <div className="col-12 col-lg-6">
        <div className="feature-rule ps-4 ps-md-4">
          <div className="small text-uppercase text-secondary mb-2">Adoption</div>
          <h2 className="h2 fw-bold mb-3">Supporting Long-Term Adoption</h2>
          <p className="text-muted mb-4">
            Change does not stop after go-live. We provide support beyond implementation to reinforce behaviors,
            measure impact, and track user engagement. Our adoption plans are iterative and scalable, supporting
            growth and continuous improvement within your organization.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-two"
          >
            Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Row 2 — Why It Matters for Digital Transformation (image right, text left) */}
    <div className="row align-items-center g-4">
      <div className="col-12 col-lg-6 order-lg-2">
        <img
          src="/assets/img/change-management-adoption/management-3.webp"
          alt="Why It Matters for Digital Transformation"
          className="img-fluid rounded-4"
        />
      </div>
      <div className="col-12 col-lg-6 order-lg-1">
        <div className="feature-rule ps-4 ps-md-4">
          <div className="small text-uppercase text-secondary mb-2">Change Management</div>
          <h2 className="h2 fw-bold mb-3">Why It Matters for Digital Transformation</h2>
          <p className="text-muted mb-4">
            Even the most advanced tools can fail if users are not equipped or willing to adopt them.
            Change management is the link between vision and execution. By preparing your teams for change and
            guiding them through the transition, Novum ensures that your digital investments generate measurable returns.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-two"
          >
            Learn more <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<CoreCapabilitiesSection
      heading="What We Deliver"
      tabs={coreTabs}
    />
        
        <WhySection
  heading="Partner with Novum"
  subheadingLines={[
    "Whether you’re rolling out a new ERP system, shifting to cloud-based workflows, or modernizing internal processes, Novum provides the guidance and structure needed for smooth adoption. Contact us to learn how our change management services can accelerate the impact of your transformation."
  ]}
  imgSrc="/assets/img/change-management-adoption/management-why.webp"
  imgAlt="Change Management and Adoption Overview"
  cards={[
    {
      iconClass: 'fa-solid fa-bullhorn text-novum-blue',
      title: 'Strategic Communication & Training',
      text: 'Clear messaging and interactive training tailored for leaders, department heads, and end users.'
    },
    {
      iconClass: 'fa-solid fa-chalkboard-user text-novum-blue',
      title: 'Role-Based Enablement',
      text: 'Programs mapped to real responsibilities so adoption fits day-to-day work and sticks.'
    },
    {
      iconClass: 'fa-solid fa-people-arrows text-novum-blue',
      title: 'Resistance Management',
      text: 'Identify concerns early, activate internal champions, and address barriers proactively.'
    },
    {
      iconClass: 'fa-solid fa-chart-line text-novum-blue',
      title: 'Adoption Analytics',
      text: 'Track engagement and performance KPIs to monitor progress and prove impact.'
    },
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Champions Network',
      text: 'Equip change ambassadors across departments to reinforce new behaviors at scale.'
    },
    {
      iconClass: 'fa-solid fa-life-ring text-novum-blue',
      title: 'Post-Go-Live Support',
      text: 'Feedback loops, refreshers, and continuous optimization for sustained adoption.'
    }
  ]}
/>




        

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

export default Management;