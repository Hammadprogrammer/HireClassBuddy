"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Divider } from '@mui/material';
import { 
  Email, Phone, Facebook, Instagram, X, 
  ChevronRight, LocationOn, WhatsApp
} from '@mui/icons-material';
import styles from './footer.module.scss';

const Footer = () => {
  // SSG safe way for dynamic year
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Online Class Help", url: "/services/online-class-help/" },
    { name: "Online Exam Help", url: "/services/online-exam-help/" },
    { name: "Online Course Help", url: "/services/online-course-help/" },
    { name: "Online Assignment Help", url: "/services/online-assignment-help/" },
    { name: "Online Test & Quizzes", url: "/services/online-test-and-quizzes/" },
    { name: "Online Proctored Exam", url: "/services/online-proctored-exam/" }
  ];

  const subjects = [
    { name: "Biology Class", url: "/subjects/biology-class/" },
    { name: "Business Class", url: "/subjects/business-class/" },
    { name: "Chemistry Class", url: "/subjects/chemistry-class/" },
    { name: "Computer Class", url: "/subjects/computer-class/" },
    { name: "Economics Class", url: "/subjects/economics-class/" },
    { name: "Finance Class", url: "/subjects/finance-class/" },
    { name: "History Class", url: "/subjects/history-class/" },
    { name: "Law Class", url: "/subjects/law-class/" },
    { name: "Math Class", url: "/subjects/math-class/" },
    { name: "Nursing Class", url: "/subjects/nursing-class/" },
    { name: "Philosophy Class", url: "/subjects/philosophy-class/" },
    { name: "Physics Class", url: "/subjects/physics-class/" },
    { name: "Psychology Class", url: "/subjects/psychology-class/" },
    { name: "Sociology Class", url: "/subjects/sociology-class/" },
    { name: "Statistics Class", url: "/subjects/statistics-class/" }
  ];

  const companyLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us/" },
    { name: "Reviews", url: "/reviews/" },
    { name: "Contact Us", url: "/contact-us/" },
    { name: "Privacy Policy", url: "/privacy-policy/" },
    { name: "Terms & Conditions", url: "/terms-and-conditions/" },
    { name: "Refund Policy", url: "/refund-Policy/" }
  ];

  return (
    <footer className={styles.footerWrapper}>
      <Container maxWidth="lg">
        <div className={styles.footerGrid}>
          
          {/* Logo & Intro */}
          <div className={styles.footerCol}>
            <div className={styles.logoContainer}>
              <Link href="/" prefetch={false}>
                <Image src="/logo.png" alt="Hire Class Buddy" width={160} height={50} priority />
              </Link>
            </div>
            <p className={styles.description}>
              Expert academic assistance at your fingertips. We help you navigate online classes and exams with ease.
            </p>
            <div className={styles.socialBox}>
              <Link href="#" className={styles.fb} prefetch={false}><Facebook /></Link>
              <Link href="#" className={styles.insta} prefetch={false}><Instagram /></Link>
              <Link href="#" className={styles.tw} prefetch={false}><X /></Link>
              <Link href="https://wa.me/12292028857" className={styles.wa} prefetch={false}><WhatsApp /></Link>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={`${styles.linkList} ${styles.mobileTwoCol}`}>
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} prefetch={false} className={styles.footerLink}>
                    <ChevronRight className={styles.arrow} /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Subjects</h4>
            <ul className={`${styles.linkList} ${styles.subjectGrid}`}>
              {subjects.map((sub) => (
                <li key={sub.name}>
                  <Link href={sub.url} prefetch={false} className={styles.footerLink}>
                    <ChevronRight className={styles.arrow} /> {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Connect With Us</h4>
            <div className={styles.contactDetails}>
              <a href="mailto:info@hireclassbuddy.com" className={styles.contactItem}>
                <Email className={styles.icon} /> <span>info@hireclassbuddy.com</span>
              </a>
              <a href="tel:+447400465932" className={styles.contactItem}>
                <Phone className={styles.icon} /> <span>+44 7400 465932</span>
              </a>
              <div className={styles.contactItem}>
                <LocationOn className={styles.icon} /> <span>450 Lexington Ave, New York, NY 10017, United States</span>
              </div>
            </div>
            <div className={styles.paymentSection}>
              <p>We Accept Major Cards</p>
              <Image src="/paymenticon.png" alt="Accepted Payments" width={200} height={35} />
            </div>
          </div>

        </div>

        <Divider className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            {companyLinks.map((link) => (
              <Link key={link.name} href={link.url} prefetch={false}>{link.name}</Link>
            ))}
          </div>
          <p className={styles.copyright} suppressHydrationWarning>
              Copyright © {currentYear} Hire Class Buddy. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;