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
    id: 'tab_workskop',
    label: 'Microsoft Product Workshops',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-unified.png',
      imageAlt: 'Unified Data Architecture',
      title: 'Microsoft Product Workshops',
      paragraphs: [
        'Our experienced instructors, including Microsoft MVPs, MCTs, and MIE-certified professionals, deliver high-value training across Microsoft platforms. These sessions cover Power BI, Excel, Office 365, SQL Server, and .NET Core to help teams enhance productivity, reporting, and collaboration.'
      ]
    }
  },
  {
    id: 'tab_train',
    label: 'Train the Trainer',
    content: {
      imageSrc: 'https://novum-ae.netlify.app/images/datawarehouse/warehouse-reporting.png',
      imageAlt: 'Advanced Reporting',
      title: 'Train the Trainer and ISC Certification',
      paragraphs: [
        'This hands-on workshop is ideal for professionals seeking Microsoft Certified Trainer (MCT) status. The 12-hour course follows Microsoft’s ISC standards and blends theory with guided presentations, peer reviews, and instructional techniques. Participants learn how to deliver impactful training with confidence and clarity.'
      ]
    }
  },
  
];

const Corporate = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/corporate-training/corporate-training-hero.jpg"
            icon="/assets/img/service-cards/c-training.png"
            title="Corporate Trainings"
            borderColorStart="#0D2B75"
            borderColorEnd="#193781"
        />
        <SoftwareSolutionsSection
            title={`Empower Your Workforce with Practical, High-Impact Learning`}
            paragraphs={[
            "At NOVUM, , we believe that hands-on training builds strong, lasting skills. Our corporate training services are built to deliver real business value using practical instruction and everyday scenarios.",
            "Led by certified experts, our programs focus on Microsoft technologies, analytics, and instructor training."
            ]}
            imageSrc="/assets/img/corporate-training/cooperate-1.jpg"
            altText="Power BI Consulting"
        />
        

<CoreCapabilitiesSection
      heading="Our Core Capabilities"
      tabs={coreTabs}
    />

        <WhySection
  heading="Why Choose NOVUM?"
  subheadingLines={[
    "<strong>Novum</strong> delivers measurable results through tailored, expert-led training solutions.",
    "From hands-on Microsoft product workshops to Train-the-Trainer certification programs, we equip your teams with practical skills and strategic insights to drive performance and growth across your organization.",
  ]}
  imgSrc="/assets/img/corporate-training/cooperate-4.png"
  imgAlt="Corporate Training"
  cards={[
    {
      iconClass: 'fa-solid fa-people-group text-novum-blue',
      title: 'Tailored for All Roles',
      text: 'Customized training for your company’s sector, department, and goals from leadership coaching to role-specific development.',
    },
    {
      iconClass: 'fa-solid fa-award text-novum-blue',
      title: 'Proven Track Record',
      text: 'Training 500+ professionals annually, NOVUM is Azerbaijan’s only provider with an MCT Regional Lead and MVP on staff.',
    },
    {
  iconClass: 'fa-solid fa-check-double text-novum-blue',
  title: 'Certified Expertise',
  text: `
    <ul class="list-unstyled text-muted fs-16 mb-0">
      <li class="mb-2"><i class="fa fa-check text-novum-blue me-2"></i> Certified MVPs &amp; MCT Regional Lead</li>
      <li class="mb-2"><i class="fa fa-check text-novum-blue me-2"></i> Hands-on, real-world instruction</li>
      <li class="mb-2"><i class="fa fa-check text-novum-blue me-2"></i> Online, on-site, or hybrid delivery</li>
      <li><i class="fa fa-check text-novum-blue me-2"></i> Aligned with your sector and goals</li>
    </ul>
  `,
},
    // Add more cards here as needed…
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

export default Corporate;