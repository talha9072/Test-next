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
    id: 'tab_dedicated',
    label: 'Dedicated Resourcing',
    content: {
      imageSrc: '/assets/img/strategic-resourcing/tab3.webp',
      imageAlt: 'Dedicated Resourcing',
      title: 'Dedicated Resourcing',
      paragraphs: [
        'Full-time support for a defined period, typically three to six months. These resources operate as part of your team, embedded in day-to-day activities and fully aligned with your work schedule.'
      ]
    }
  },
  {
    id: 'tab_designated',
    label: 'Designated Resourcing',
    content: {
      imageSrc: '/assets/img/strategic-resourcing/tab1.webp',
      imageAlt: 'Designated Resourcing',
      title: 'Designated Resourcing',
      paragraphs: [
        'This model is ideal for ongoing consulting, system support, or backlog reduction. Each resource is backed by Novum’s broader delivery team for added continuity.'
      ]
    }
  },
  {
    id: 'tab_remote',
    label: 'Remote-First Flexibility',
    content: {
      imageSrc: '/assets/img/strategic-resourcing/tab2.webp',
      imageAlt: 'Remote-First Flexibility',
      title: 'Remote-First Flexibility',
      paragraphs: [
        'Our resourcing model is designed for hybrid and remote environments. Resources can work virtually with limited or periodic on-site visits based on your specific operational and security requirements.'
      ]
    }
  }
];

const StrategicResourcing = () => {
  return (
    <div>
        <HeaderFour />

        <BannerSection
            bgImage="/assets/img/strategic-resourcing/Strategic-resourcing-hero.webp"
            icon="/assets/img/service-cards/strategic-resourcing.png"
            title="Strategic Resourcing"
            borderColorStart="#F2D25E"
            borderColorEnd="#0E3B66"
        />
        <SoftwareSolutionsSection
            title={`Flexible Talent Solutions That Accelerate Digital Outcomes`}
            paragraphs={[
            "Novum helps organizations extend their digital capabilities by providing expert technical resources with the right skills, at the right time, for the right duration. Our Strategic Resourcing service goes beyond simple staffing. We deliver specialized talent, long-term support, and deep technical alignment to ensure your projects and operations run efficiently.",
            "Whether you need to fill short-term skill gaps, supplement internal teams, or support large-scale transformation, Novum offers a scalable, cost-effective model that adapts to your business needs. We focus on enabling outcomes, not just filling roles."
            ]}
            imageSrc="/assets/img/strategic-resourcing/strategy-1.webp"
            altText="Strategic Resourcing"
        />


            <section className="big-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                    {/* Image & Overlay Badge */}
                    <div className="col-lg-6 position-relative md-mb-50px sm-mb-30px">
                        <figure className="position-relative mb-0 overflow-hidden">
                        <img
                            src="/assets/img/strategic-resourcing/strategic-2.webp"
                            className="w-100"
                            alt="More Than a Staffing Partner"
                        />
                        <figcaption className="position-absolute text-center left-0 bottom-0 bg-white">
                            <span className="text-dark-gray ls-minus-2px position-relative mb-5px d-block alt-font figheading">
                            15
                            <sup className="fs-40 lh-40 text-dark-gray position-relative top-minus-40px">+</sup>
                            </span>
                            <span className="d-block mx-auto fs-14 fw-600 lh-20 w-200px text-center text-dark-gray text-uppercase figtext">
                            Years of Combined Expertise
                            </span>
                        </figcaption>
                        </figure>
                    </div>

                    {/* Text Content */}
                    <div className="col-xl-5 col-lg-6 offset-xl-1 lg-ps-40px md-ps-15px">
                        <h2 className="text-dark-gray fw-600 highlight-separator-small">
                        More Than a Staffing Partner
                        </h2>
                        <p>
                        We are not in the business of placing people. We are focused on delivering
                        expertise, continuity, and value. Our resourcing models are designed to
                        reduce pressure on your internal teams, accelerate time to delivery, and fill
                        critical technical gaps without increasing long-term overhead.
                        </p>
                        <p>
                        With access to a diverse pool of certified professionals across cloud, data,
                        cybersecurity, infrastructure, and development, Novum helps your team move
                        faster and operate smarter.
                        </p>
                        <div className="d-inline-block w-100 mt-30px">
                        <a href="/contact" className="btn service-btn">
                            Let’s Get Started <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a
                            href="tel:971561920616"
                            className="d-block d-sm-inline-block align-middle text-dark-gray text-dark-gray-hover fs-18 fw-600"
                        >
                            <i className="feather icon-feather-phone-call icon-small me-10px"></i>
                            971 56 192 06 16
                        </a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

        <CoreCapabilitiesSection
            heading="Our Resourcing Models"
            tabs={coreTabs}
        />

        

        <WhySection
        heading="Why Novum?"
        subheadingLines={[
            "Novum combines hands-on technical delivery with strategic foresight. Our Strategic Resourcing service is built to support clients through rapid change, system modernization, and ongoing IT transformation. We bring both speed and substance to the table delivering flexible, reliable talent that aligns with your culture, technology stack, and project goals.",
            
        ]}
        imgSrc="/assets/img/strategic-resourcing/strategic-why.webp"
        imgAlt="Strategic Resourcing"
        cards={[
                {
                    iconClass: 'fa-solid fa-network-wired text-novum-blue',
                    title: 'Network Infrastructure & Routing',
                    text: 'Certified experts in designing, implementing, and maintaining robust network infrastructures to ensure reliable connectivity and optimized performance.'
                },
                {
                    iconClass: 'fa-solid fa-comments text-novum-blue',
                    title: 'Unified Communications',
                    text: 'Specialists in integrating communication platforms for seamless voice, video, and messaging experiences across your organization.'
                },
                {
                    iconClass: 'fa-solid fa-shield-halved text-novum-blue',
                    title: 'Cybersecurity & Firewall Administration',
                    text: 'Professionals skilled in safeguarding systems with advanced firewall management, threat detection, and proactive security measures.'
                },
                {
                    iconClass: 'fa-solid fa-cloud text-novum-blue',
                    title: 'Cloud Platforms & Virtualization',
                    text: 'Certified cloud engineers experienced in deploying, managing, and optimizing solutions across major platforms including Azure, AWS, and VMware.'
                },
                {
                    iconClass: 'fa-solid fa-wifi text-novum-blue',
                    title: 'Wireless & Storage Architecture',
                    text: 'Experts in building secure wireless networks and scalable storage solutions tailored to your operational needs.'
                },
                {
                    iconClass: 'fa-solid fa-code text-novum-blue',
                    title: 'Software Development',
                    text: 'Developers proficient in .NET, Java, SQL, and more—delivering custom software solutions to meet your business objectives.'
                }
                ]}
        />

        

        <CTA
                        bgImage="/assets/img/cta-bg.png"
                        heading="Ready to Scale Your IT Capabilities?"
                        subText="Get the expertise you need to move forward without overcommitting resources.Book a consultation with Novum today."
                        buttonText="Get in Touch"
                        buttonHref="/contact"
                    />

      <Footer />
    </div>
  );
};

export default StrategicResourcing;