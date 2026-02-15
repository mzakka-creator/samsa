import Head from "next/head";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "@/styles/Landing.module.css";
import logo from "@/assets/logo.png";
import newLogo from "@/assets/new logo.png";
import samSignLogo from "@/assets/samsign.png";
import artaLogo from "@/assets/arta.png";

const ARABIC_CONTENT = `سام شركة رائدة في المجالات الإعلانية والفنية، بخبرة تمتد لأكثر من ٣٠ عاماً في تقديم الحلول الإبداعية الفنية والتجارية المتكاملة. تجمع الشركة بين احترافية الابتكار وقوة الجودة.
تمتلك الشركة ثلاث علامات تجارية مسجلة ومتخصصة:
نيولوقو لابتكار وتصميم العلامات التجارية
سام ساين لتنفيذ اللوحات التجارية الخارجية والداخلية
آرتا للوحات والاعمال الفنية`;

const ENGLISH_CONTENT = `SAM is a leading company in the advertising and artistic industries, with over 30 years of experience delivering integrated creative and commercial solutions. The company owns three registered and specialized brands:
Newlogo, Brand identity innovation and design
SamSign, Execution of indoor and outdoor commercial signage
Arta, Artistic works`;

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>SAM SA</title>
        <meta name="description" content="SAM SA - Leading company in the advertising and artistic industries, with over 30 years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} type="image/png" />
      </Head>

      <div className={styles.container}>
        {/* Logo */}
        <section className={styles.logoSection}>
          <div className={styles.logoSectionInner}>
            <Image
              src={logo}
              alt="SAM SA Logo"
              className={styles.mainLogo}
              width={280}
              height={140}
              priority
            />
          </div>
        </section>

        {/* Content - Arabic & English */}
        <section className={styles.contentSection}>
          <div className={styles.sectionContent}>
            <div className={styles.contentBlock} dir="rtl" lang="ar">
              <pre className={styles.contentText}>{ARABIC_CONTENT}</pre>
            </div>
            <div className={styles.contentBlock} dir="ltr" lang="en">
              <pre className={styles.contentText}>{ENGLISH_CONTENT}</pre>
            </div>
          </div>
        </section>

        {/* Brand logos */}
        <section className={styles.brandsSection}>
          <div className={styles.sectionContent}>
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
                      width={200}
                      height={200}
                    />
                  </div>
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
                      width={200}
                      height={200}
                    />
                  </div>
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
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

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
            </div>
            <div className={styles.footerLinks}>
              <h4 className={styles.footerTitle}>Our Brands</h4>
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
              <h4 className={styles.footerTitle}>Contact Us</h4>
              <div className={styles.contactInfo}>
                <a href="mailto:esam@sam.sa" className={`${styles.contactLink} ${styles.emailLink}`}>
                  <MdOutlineAlternateEmail className={styles.contactIcon} />
                  esam@sam.sa
                </a>
                <a href="tel:+966536211111" className={`${styles.contactLink} ${styles.phoneLink}`} dir="ltr">
                  <FaPhoneAlt className={styles.contactIcon} />
                  +966 53 621 1111
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              &copy; {currentYear} SAM SA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
