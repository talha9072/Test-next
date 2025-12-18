"use client";
import HeaderFour from "@/components/layout/headers/header/header-four";
import Hero from "@/components/layout/hero-section";
import CTA from '@/components/data/cta';
import ContactWidget from "@/components/widget/widget";
import Footer from "@/components/layout/footers/footer";




const Health = () => {
  return (
    <div>
        <HeaderFour />
        <Hero
        title="Novum LLC Code of Conduct"
        line1="At Novum LLC, we are committed to upholding the highest standards of integrity, professionalism, and ethical behavior."
        line2="This Code of Conduct outlines the principles that guide our actions and decisions, ensuring we maintain trust with our clients, partners, and each other."
        bgColor="var(--primary-color-1)"
      />
        





<section className="privacy-policy" style={{ padding: '5rem 0' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-10">

        <div className="mb-5">
          <h2 className="h2">1. Integrity and Honesty</h2>
          <p>
            We conduct our business with honesty and integrity, fostering trust
            and transparency in all interactions. We are committed to delivering
            on our promises and maintaining the highest ethical standards.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">2. Client Commitment</h2>
          <p>
            Our clients are at the heart of everything we do. We strive to
            provide innovative, high-quality solutions tailored to their
            specific business needs, ensuring their satisfaction and success.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">3. Respect and Fairness</h2>
          <p>
            We treat everyone with respect, dignity, and fairness. We value
            diversity and promote an inclusive environment where different
            perspectives are encouraged and valued.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">4. Confidentiality</h2>
          <p>
            We respect the confidentiality of information entrusted to us by our
            clients and partners. We are committed to protecting sensitive data
            and using it responsibly.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">5. Compliance with Laws and Regulations</h2>
          <p>
            We comply with all applicable laws, regulations, and industry
            standards in the regions where we operate. We are dedicated to
            ethical business practices and expect the same from our partners and
            clients.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">6. Professional Development</h2>
          <p>
            We encourage continuous learning and professional development. By
            staying abreast of the latest technologies and industry trends, we
            ensure the delivery of innovative and effective solutions.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">7. Social Responsibility</h2>
          <p>
            We are committed to making a positive impact on society. We engage
            in sustainable practices and contribute to the communities in which
            we operate.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">8. Reporting Concerns</h2>
          <p>
            We encourage open communication and expect employees to report any
            unethical behavior or violations of this Code. Reports will be
            handled confidentially and without retaliation.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">9. Legal and Regulatory Compliance</h2>
          <p>
            At Novum LLC, we prioritize full compliance with all relevant laws
            and regulations in every jurisdiction where we operate. This
            commitment extends to specific areas of trade, antitrust, and
            anti-corruption to ensure ethical and lawful conduct across all
            aspects of our business.
          </p>

          <h3 className="h3">9.1 Trade Compliance</h3>
          <h4 className="h4">Adherence to Export and Import Laws:</h4>
          <p>
            We comply with all applicable export and import control laws, trade
            sanctions, and embargoes. Employees must ensure that our operations
            do not violate these regulations.
          </p>

          <h4 className="h4">Restricted Parties Screening</h4>
          <p>
            We maintain processes to verify that we do not engage in business
            with individuals, organizations, or countries prohibited by trade
            laws.
          </p>

          <h4 className="h4">Transparency in Documentation</h4>
          <p>
            All import/export documentation and declarations must be accurate,
            complete, and transparent.
          </p>

          <h3 className="h3">9.2 Antitrust Compliance</h3>
          <h4 className="h4">Fair Competition</h4>
          <p>
            Novum LLC is committed to fostering fair competition and refrains
            from engaging in anti-competitive practices such as price-fixing,
            bid-rigging, or market allocation.
          </p>

          <h4 className="h4">Prohibition of Unfair Trade Practices</h4>
          <p>
            Employees are prohibited from sharing sensitive competitive
            information with competitors or engaging in activities that could
            unfairly influence the market.
          </p>

          <h4 className="h4">Awareness and Training</h4>
          <p>
            Regular training is provided to employees to ensure awareness of
            antitrust laws and compliance requirements.
          </p>

          <h3 className="h3">9.3 Anti-Corruption and Bribery</h3>
          <h4 className="h4">Zero Tolerance Policy</h4>
          <p>
            Novum LLC has a zero-tolerance policy for
            bribery or corruption in any form, whether direct or indirect.
          </p>

          <h4 className="h4">Prohibition on Improper Payments</h4>
          <p>
            Employees and agents must not offer, give, solicit, or accept any form
            of bribe, kickback, or improper payment to gain or retain business or
            influence decisions.
          </p>

          <h4 className="h4">Third-Party Due Diligence</h4>
          <p>
            All third-party agents, consultants, and partners must be thoroughly
            vetted to ensure they comply with anti-corruption standards.
          </p>

          <h4 className="h4">Compliance with the Law</h4>
          <p>
            We adhere strictly to global anti-corruption regulations, including
            the U.S. Foreign Corrupt Practices Act (FCPA) and the UK Bribery Act.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>        

        



<ContactWidget />
       

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

export default Health;