import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Landing.module.css";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brands = [
    "TechCorp",
    "Innovate Inc",
    "Digital Solutions",
    "Future Labs",
    "Smart Systems",
    "Global Ventures",
    "NextGen Tech",
    "Prime Industries"
  ];

  return (
    <>
      <Head>
        <title>SAM SA - Excellence in Business Solutions</title>
        <meta name="description" content="SAM SA - Leading provider of innovative business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>SAM SA</div>
            <nav className={styles.nav}>
              <a href="#about" className={styles.navLink}>About</a>
              <a href="#brands" className={styles.navLink}>Partners</a>
              <a href="#contact" className={styles.navLink}>Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>SAM SA</span>
            </h1>
            <p className={styles.heroTagline}>
              Transforming businesses through innovative solutions and strategic excellence
            </p>
            <div className={styles.heroButtons}>
              <a href="#about" className={styles.btnPrimary}>Learn More</a>
              <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollArrow}></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <p className={styles.aboutParagraph}>
                  SAM SA is a leading provider of cutting-edge business solutions, dedicated to helping 
                  organizations achieve their full potential. With years of industry expertise and a 
                  commitment to innovation, we deliver tailored strategies that drive growth and success.
                </p>
                <p className={styles.aboutParagraph}>
                  Our team of experienced professionals works closely with clients to understand their 
                  unique challenges and develop comprehensive solutions that deliver measurable results. 
                  From strategic consulting to implementation support, we're your partner in excellence.
                </p>
              </div>
              <div className={styles.aboutStats}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>98%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="brands" className={styles.brands}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Trusted Partners</h2>
            <p className={styles.brandsSubtitle}>
              We're proud to work with industry-leading organizations
            </p>
            <div className={styles.brandsGrid}>
              {brands.map((brand, index) => (
                <div key={index} className={styles.brandCard}>
                  <span className={styles.brandName}>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3 className={styles.footerLogo}>SAM SA</h3>
              <p className={styles.footerTagline}>Excellence in every solution</p>
            </div>
            <div className={styles.footerContact}>
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <div className={styles.contactInfo}>
                <a href="mailto:info@samsa.com" className={styles.contactLink}>
                  info@samsa.com
                </a>
                <a href="mailto:contact@samsa.com" className={styles.contactLink}>
                  contact@samsa.com
                </a>
                <a href="tel:+1234567890" className={styles.contactLink}>
                  +1 (234) 567-890
                </a>
                <a href="tel:+0987654321" className={styles.contactLink}>
                  +0 (987) 654-321
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; 2026 SAM SA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
