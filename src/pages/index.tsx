import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Landing.module.css";
import logo from "@/assets/logo.png";
import newLogo from "@/assets/new logo.png";
import samSignLogo from "@/assets/samsign.png";
import artaLogo from "@/assets/arta.png";

type Language = 'en' | 'ar';

const translations = {
  en: {
    nav: {
      about: 'About',
      partners: 'Partners',
      contact: 'Contact'
    },
    hero: {
      tagline: '30+ Years of Excellence in Advertising and Artistic Industries',
      scrollText: 'Scroll to Explore'
    },
    about: {
      title: 'About Us',
      description: 'A leading company in the advertising and artistic industries, with over 30 years of experience delivering integrated creative and commercial solutions.',
      stats: {
        years: 'Years Experience',
        brands: 'Specialized Brands',
        projects: 'Projects Delivered'
      },
      brandsTitle: 'Our Specialized Brands',
      brands: {
        newlogo: 'Brand identity innovation and design',
        samsign: 'Execution of indoor and outdoor commercial signage',
        arta: 'Digital marketplace for premium art boards and artistic products'
      }
    },
    footer: {
      tagline: 'Excellence in every solution',
      brandsTitle: 'Our Brands',
      contactTitle: 'Contact Us',
      copyright: 'SAM SA. All rights reserved.'
    }
  },
  ar: {
    nav: {
      about: 'من نحن',
      partners: 'الشركاء',
      contact: 'اتصل بنا'
    },
    hero: {
      tagline: '30+ عاماً من التميز في صناعة الإعلان والفنون',
      scrollText: 'انتقل للاستكشاف'
    },
    about: {
      title: 'من نحن',
      description: 'سام شركة رائدة في المجالات الإعلانية والفنية، بخبرة تمتد لأكثر من 30 عاماً في تقديم الحلول الإبداعية الفنية والتجارية المتكاملة. تجمع الشركة بين احترافية الابتكار وقوة الجودة.',
      stats: {
        years: 'سنوات من الخبرة',
        brands: 'علامات تجارية متخصصة',
        projects: 'مشروع تم إنجازه'
      },
      brandsTitle: 'تمتلك الشركة ثلاث علامات تجارية مسجلة ومتخصصة:',
      brands: {
        newlogo: 'نيولوقو لابتكار وتصميم العلامات التجارية',
        samsign: 'سام ساين لتنفيذ اللوحات التجارية الخارجية والداخلية',
        arta: 'آرتا للوحات والاعمال الفنية'
      }
    },
    footer: {
      tagline: 'التميز في كل حل',
      brandsTitle: 'علاماتنا التجارية',
      contactTitle: 'اتصل بنا',
      copyright: 'SAM SA. جميع الحقوق محفوظة.'
    }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = translations[language];
  const currentYear = new Date().getFullYear();

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
        <title>{language === 'en' ? 'SAM SA - Excellence in Business Solutions' : 'SAM SA - التميز في حلول الأعمال'}</title>
        <meta name="description" content={language === 'en' ? 'SAM SA - Leading provider of innovative business solutions' : 'SAM SA - مزود رائد للحلول التجارية المبتكرة'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <Image 
                src={logo} 
                alt="SAM SA Logo" 
                className={styles.logoImage}
                width={120}
                height={60}
                priority
              />
            </div>
            <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
              <a href="#about" className={styles.navLink} onClick={closeMobileMenu}>{t.nav.about}</a>
              <a href="#contact" className={styles.navLink} onClick={closeMobileMenu}>{t.nav.contact}</a>
            </nav>
            <div className={styles.headerActions}>
              <button 
                className={styles.languageToggle}
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
              <button 
                className={styles.mobileMenuToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div 
              className={styles.mobileMenuBackdrop} 
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
          )}
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.diagonalGrid}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <Image 
                src={logo} 
                alt="SAM SA Logo" 
                className={styles.heroLogoImage}
                width={300}
                height={150}
                priority
              />
            </div>
            <p className={styles.heroTagline}>
              {t.hero.tagline}
            </p>
          </div>
          <a href="#about" className={styles.scrollIndicator}>
            <span className={styles.scrollText}>{t.hero.scrollText}</span>
            <div className={styles.scrollArrow}></div>
          </a>
        </section>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>{t.about.title}</h2>
            
            {/* Mother Company */}
            <div className={styles.motherCompany}>
              <div className={styles.companyHeader}>
                <p className={styles.companyDescription}>
                  {t.about.description}
                </p>
              </div>
              
              {/* Statistics */}
              <div className={styles.companyStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>30+</div>
                  <div className={styles.statLabel}>{t.about.stats.years}</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>3</div>
                  <div className={styles.statLabel}>{t.about.stats.brands}</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>{t.about.stats.projects}</div>
                </div>
              </div>
            </div>

            {/* Subsidiary Brands */}
            <div className={styles.subsidiarySection}>
              <h4 className={styles.subsidiaryTitle}>{t.about.brandsTitle}</h4>
              <div className={styles.brandsHierarchy}>
                <a 
                  href="https://newlogo.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.brandCardLink}
                >
                  <div className={styles.subsidiaryBrandCard}>
                    <div className={styles.brandLogoContainer}>
                      <Image 
                        src={newLogo} 
                        alt="Newlogo" 
                        className={styles.brandLogoImage}
                        width={120}
                        height={120}
                      />
                    </div>
                    <p className={styles.subsidiaryBrandDesc}>{t.about.brands.newlogo}</p>
                  </div>
                </a>
                <a 
                  href="https://samsign.sa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.brandCardLink}
                >
                  <div className={styles.subsidiaryBrandCard}>
                    <div className={styles.brandLogoContainer}>
                      <Image 
                        src={samSignLogo} 
                        alt="SamSign" 
                        className={styles.brandLogoImage}
                        width={120}
                        height={120}
                      />
                    </div>
                    <p className={styles.subsidiaryBrandDesc}>{t.about.brands.samsign}</p>
                  </div>
                </a>
                <a 
                  href="https://arta.sa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.brandCardLink}
                >
                  <div className={styles.subsidiaryBrandCard}>
                    <div className={styles.brandLogoContainer}>
                      <Image 
                        src={artaLogo} 
                        alt="Arta" 
                        className={styles.brandLogoImage}
                        width={120}
                        height={120}
                      />
                    </div>
                    <p className={styles.subsidiaryBrandDesc}>{t.about.brands.arta}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}

        {/* Footer */}
        <footer id="contact" className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogoContainer}>
                <Image 
                  src={logo} 
                  alt="SAM SA Logo" 
                  className={styles.footerLogoImage}
                  width={150}
                  height={75}
                />
              </div>
              <p className={styles.footerTagline}>{t.footer.tagline}</p>
            </div>
            <div className={styles.footerLinks}>
              <h4 className={styles.footerTitle}>{t.footer.brandsTitle}</h4>
              <div className={styles.contactInfo}>
                <a href="https://newlogo.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Newlogo
                </a>
                <a href="https://samsign.sa/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  SamSign
                </a>
                <a href="https://arta.sa" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  Arta
                </a>
              </div>
            </div>
            <div className={styles.footerContact}>
              <h4 className={styles.footerTitle}>{t.footer.contactTitle}</h4>
              <div className={styles.contactInfo}>
                <a href="mailto:esam@sam.sa" className={`${styles.contactLink} ${styles.emailLink}`}>
                  <span className={styles.contactIcon}>✉︎</span>
                  esam@sam.sa
                </a>
                <a href="tel:+966536211111" className={`${styles.contactLink} ${styles.phoneLink}`} dir="ltr">
                  <span className={styles.contactIcon}>📱︎</span>
                  +966 53 621 1111
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; {currentYear} {t.footer.copyright}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
