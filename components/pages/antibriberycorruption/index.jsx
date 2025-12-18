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
        title="Anti-Bribery and Corruption Policy"
        line1="This Anti-Bribery and Corruption (ABC) Policy is a formal annex to the Corporate Code of Conduct and demonstrates Novum LS LLC's unwavering commitment to integrity, transparency, and compliance with all applicable anti-bribery and anti-corruption laws worldwide."
        line2=""
        bgColor="var(--primary-color-1)"
      />
        





<section className="privacy-policy" style={{ padding: '5rem 0' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-10">

        <div className="mb-5">
          <h2 className="h2">1. Purpose</h2>
          <p>
            This Anti-Bribery and Corruption (ABC) Policy is a formal annex to the Corporate Code of Conduct and demonstrates Novum LS LLC's unwavering commitment to integrity, transparency, and compliance with all applicable anti-bribery and anti-corruption laws worldwide. The purpose of this policy is to ensure that bribery and corruption do not occur in any aspect of our operations.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">2. Scope</h2>
          <p>
            This Policy applies globally to all employees, officers, directors, contractors, consultants, agents, joint venture partners, and any other third parties acting on behalf of Novum LS LLC and its subsidiaries. It covers all business dealings and transactions, regardless of country or industry.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">3. Policy Statement</h2>
          <p>
            Novum LS LLC and its subsidiaries adopt a strict zero-tolerance approach to bribery and corruption. Any form of bribery—whether offered, given, received, or solicited—is strictly prohibited. We commit to upholding all relevant anti-corruption laws, including the UK Bribery Act 2010, the U.S. Foreign Corrupt Practices Act (FCPA), and other applicable international standards.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">4. Definitions</h2>
          <ul className="privacy-list">
            <li><strong>Bribery:</strong> Offering, promising, giving, or receiving anything of value to influence a decision improperly.</li>
            <li><strong>Corruption:</strong> Abuse of entrusted power for private gain.</li>
            <li><strong>Facilitation Payments:</strong> Small, unofficial payments made to expedite routine actions, strictly prohibited under this policy.</li>
            <li><strong>Kickbacks:</strong> Any form of payment returned to someone as a reward for making a favorable decision.</li>
            <li><strong>Gifts and Hospitality:</strong> Non-cash benefits including meals, entertainment, or other items of value.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="h2">5. Prohibited Conduct</h2>
          <h3 className="h3">Personnel must not:</h3>
          <ul className="privacy-list">
            <li>Offer, give, solicit, or accept bribes in any form.</li>
            <li>Make facilitation payments or unofficial payments to public officials.</li>
            <li>Ignore or fail to report any suspicious activity or potential breaches of this policy.</li>
            <li>Engage third parties to do anything that would be a breach of this policy if done by company personnel.</li>
            <li>Fail to perform adequate due diligence on third-party relationships.</li>
          </ul>
        </div>

        <div className="mb-5">
          <h2 className="h2">6. Gifts and Hospitality</h2>
          <p>
            Gifts and hospitality must be reasonable, proportionate, and for legitimate business purposes. They must not influence, or be perceived to influence, business decisions. All such expenditures must be recorded accurately and approved in accordance with the internal procedures.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">7. Political and Charitable Contributions</h2>
          <p>
            Novum LS LLC does not permit political donations. Charitable contributions must not be used as a subterfuge for bribery and require appropriate due diligence and documentation.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">8. Third Parties and Due Diligence</h2>
          <p>
            Due diligence must be conducted before engaging any third party. Contracts must include ABC clauses, and third-party performance must be regularly monitored. High-risk relationships require enhanced due diligence.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">9. Risk Assessment and Internal Controls</h2>
          <p>
            Novum LS LLC will periodically assess bribery and corruption risks and implement proportionate controls. This includes transaction monitoring, financial controls, and audits.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">10. Reporting Violations and Whistleblowing</h2>
          <p>
            All personnel are encouraged to report suspected violations in good faith through secure and confidential reporting channels. The company strictly prohibits retaliation against whistleblowers.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">11. Training and Communication</h2>
          <p>
            ABC training is mandatory for all employees and relevant third parties. This policy will be prominently communicated and integrated into onboarding and compliance programs.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">12. Monitoring and Review</h2>
          <p>
            Novum LS LLC and its subsidiaries will regularly review this policy to ensure it remains effective and aligned with evolving legal and business requirements.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="h2">13. Responsibilities</h2>
          <p>
            Senior management, compliance officers, and business unit leaders are responsible for ensuring policy enforcement, fostering a culture of integrity, and taking prompt action against violations.
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