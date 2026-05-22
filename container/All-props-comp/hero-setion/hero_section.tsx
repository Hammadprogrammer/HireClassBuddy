"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './hero_section.module.scss';

// TypeScript Interface for Props
interface HeroProps {
  heading: React.ReactNode;
  subText: React.ReactNode;
  bullets: string[];
}

const Hero: React.FC<HeroProps> = ({ heading, subText, bullets = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Need Help");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    taskType: 'Select Need Help',
    message: ''
  });

  const options = [
    "Online Class Help",
    "Assignment Help",
    "Exam Help",
    "Quiz Help"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Valid email required";
    }

    if (!formData.whatsapp) {
      tempErrors.whatsapp = "Phone number required";
    } else if (formData.whatsapp.length < 10) {
      tempErrors.whatsapp = "Minimum 10 digits";
    }

    if (selected === "Select Need Help") {
      tempErrors.taskType = "Please select a service";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://contact-a-pi-one.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp,
          taskType: selected,
          message: `Service: ${selected}`
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          whatsapp: '',
          taskType: 'Select Need Help',
          message: ''
        });
        setSelected("Select Need Help");
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrors({ submit: "Submission failed. Try again." });
      }
    } catch (err) {
      console.error("API Error:", err);
      setErrors({ submit: "Server error. Check connection." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <section className={styles.heroSection}>
        {/* LEFT CONTENT (Data comes from Props) */}
        <div className={styles.contentSide}>
          <h1 className={styles.mainHeading}>{heading}</h1>
          
          <div className={styles.subText}>{subText}</div>

          <ul className={styles.bulletList}>
            {bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <div className={styles.buttonGroup}>
            <Link href="/contact-us" className={styles.btnPrimary}>
              Contact Us
            </Link>
            <Link href="https://wa.me/12292028857"  className={styles.btnSecondary}>
              Chat With Us
            </Link>
          </div>
        </div>

        {/* RIGHT LEAD FORM */}
        <div className={styles.formContainer}>
          <h4 className={styles.formHeading}>
            EVERYTHING YOU NEED, IN A BUDGET!
          </h4>
          
          {isSubmitted && (
            <div className={styles.successMsg}>
              ✓ Thank you! We'll contact you soon.
            </div>
          )}
          
          <form className={styles.leadForm} onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                placeholder="Enter your Name" 
                name="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
              {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Enter your Email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div>
              <input 
                type="tel" 
                placeholder="Enter your Phone Num" 
                name="whatsapp" 
                value={formData.whatsapp}
                onChange={handleChange}
                required 
              />
              {errors.whatsapp && <span className={styles.error}>{errors.whatsapp}</span>}
            </div>
            
            <div>
              <div className={styles.customSelectWrapper} ref={dropdownRef}>
                <div 
                  className={`${styles.selectedBox} ${isOpen ? styles.active : ''}`} 
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{selected}</span>
                  <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
                </div>
                
                {isOpen && (
                  <ul className={styles.optionsList}>
                    {options.map((option) => (
                      <li 
                        key={option} 
                        className={styles.optionItem}
                        onClick={() => {
                          setSelected(option);
                          setFormData(prev => ({ ...prev, taskType: option }));
                          setIsOpen(false);
                          if (errors.taskType) setErrors(prev => ({ ...prev, taskType: '' }));
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.taskType && <span className={styles.error}>{errors.taskType}</span>}
            </div>

            {errors.submit && <span className={styles.error}>{errors.submit}</span>}
            
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isLoading}
            >
              {isLoading ? 'SUBMITTING...' : 'SIGN UP NOW'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;