'use client';

import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="position-relative overflow-hidden d-flex align-items-center text-white" style={{ minHeight: '420px' }}>
      {/* Background image (replace the src path with yours) */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-n1">
        <Image
          src="/assets/img/about-hero.png"  // <-- your image here
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Soft overlay for readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-n1"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(0,0,0,.45) 100%)'
        }}
      />

      {/* Content */}
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-2 lh-tight hero-title">About Novum</h1>
            <p className="fs-5 mb-0 text-white-50">
              Building reliable, scalable digital systems—focused on outcomes.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-title {
          text-shadow: 0 2px 14px rgba(0,0,0,0.25);
          letter-spacing: -0.02em;
        }
        @media (max-width: 576px) {
          section { min-height: 360px; }
        }
      `}</style>
    </section>
  );
}
