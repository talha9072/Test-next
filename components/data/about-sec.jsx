import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSec = ({
  heading = 'About Us',
  title = 'We Are Pioneers in Digital Solutions',
  description = '',
  experienceYears = 25,
  experienceSuffix = '+',
  experienceLabel = 'Years Of Experience',
  image1,
}) => {
  return (
    <section className="about__four section-padding">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Text Column - Left */}
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="about__four-content">
              {/* Small Heading */}
              <h3 className="subtitle-one">{heading}</h3>
              {/* H2 Title */}
              <h2>{title}</h2>
              {/* Description Paragraph */}
              {description && <p>{description}</p>}
            </div>
          </div>

          {/* Image Column - Right */}
          <div className="col-xl-6 col-lg-8">
            <div className="about__four-image">
              <div className="experience-bar animate-y-axis-slider">
                <div className="experience-bar-right">
                  <div className="experience-bar-counter">
                    <h4 className="counter">{experienceYears}</h4>
                    <span>{experienceSuffix}</span>
                  </div>
                  <span>{experienceLabel}</span>
                </div>
              </div>
              {image1 && (
                <div className="about__four-image-wrapper">
                  <Image
                    className="image-1"
                    src={image1}
                    alt="About Section Image"
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;