"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './reviews.module.scss';

const ReviewsPage = () => {
  return (
    <div className={styles.main}>
    <section className={styles.container}>
      {/* Background Decorative Glow */}
      <div className={styles.bgGlow}></div>

      {/* Left Content Area */}
      <motion.div 
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={styles.textContent}
      >
        <div className={styles.promoBadge}>
          <span>NEW</span> 50% Discount on Your First Order
        </div>
        
        <h1 className={styles.title}>
          Get Expert Help for Your <br />
          <span className={styles.highlight}>Online Exams & Classes</span>
        </h1>
        
        <p className={styles.description}>
          Join thousands of students who trust Hire Class Buddy for proctored exams, 
          nursing portals, and complex subject assignments. We ensure privacy, 
          accuracy, and on-time submission.
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>✔</div>
            <span>A+ Grade Guaranteed</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>✔</div>
            <span>100% Secure & Private</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconBox}>✔</div>
            <span>24/7 Subject Support</span>
          </div>
        </div>

        <div className={styles.actionArea}>
          <button className={styles.btnPrimary}>Order My Task Now</button>
          <button className={styles.btnSecondary}>View Pricing</button>
        </div>
      </motion.div>

      {/* Right Image Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.imageSection}
      >
        {/* The Animated Border Wrapper */}
        <div className={styles.animatedBorder}>
          <div className={styles.imageContainer}>
            <Image 
              src="/rating.png" 
              alt="ClassBuddy Dashboard Illustration"
              width={580}
              height={420}
              className={styles.mainImg}
              priority
            />
          </div>
        </div>

        {/* Floating Trust Card */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={styles.floatingCard}
        >
          <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          <p><strong>4.9/5</strong> based on 10k+ Reviews</p>
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default ReviewsPage;