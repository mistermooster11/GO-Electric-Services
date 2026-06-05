"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return; // StrictMode unmounted before import resolved

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Video background */}
      <div className="hero__video-bg">
        {/* TODO: Replace video src with GO Electric hero video. Upload to /public/videos/hero.mp4 */}
        {/* TODO: Replace poster with GO Electric hero background image at /public/images/hero-poster.webp */}
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="/images/hero-poster.webp"
          aria-hidden="true"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Licensed Electricians
          <br />
          Serving Palm Beach County
          <br />
          Since 2016
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Veteran-owned electrical contractor — panels, generators, rewiring,
          <br />
          and commercial work. Permitted, inspected, and done right.
          <br />
          Free estimates. EC-13007758.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="/contact-us" className="hero__btn-primary">
            Fast Quote
          </Link>
          <Link href="/about-us" className="hero__btn-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}