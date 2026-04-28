"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, 
  Collapse, Box, Container, Divider
} from '@mui/material';
import { 
  Menu as MenuIcon, PhoneInTalk, Email, LocationOn, KeyboardArrowDown,
  School, Assignment, Quiz, Computer, Science, BusinessCenter, 
  Functions, HistoryEdu, Gavel, Psychology, People, BarChart, 
  LocalHospital, Biotech, PsychologyAlt, MenuBook, Home as HomeIcon,
  Star as StarIcon, Info as InfoIcon, Close as CloseIcon, ContactSupport,
  AutoStories 
} from '@mui/icons-material';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const services = [
    { name: "Online Class Help", icon: <School /> },
    { name: "Online Exam Help", icon: <Assignment /> },
    { name: "Online Course Help", icon: <MenuBook /> },
    { name: "Online Assignment Help", icon: <HistoryEdu /> },
    { name: "Online Test & Quizzes", icon: <Quiz /> },
    { name: "Online Proctored Exam", icon: <Computer /> }
  ];

  const subjects = [
    { name: "Biology Class", icon: <Biotech /> },
    { name: "Business Class", icon: <BusinessCenter /> },
    { name: "Chemistry Class", icon: <Science /> },
    { name: "Computer Class", icon: <Computer /> },
    { name: "Economics Class", icon: <BarChart /> },
    { name: "Finance Class", icon: <Functions /> },
    { name: "History Class", icon: <HistoryEdu /> },
    { name: "Law Class", icon: <Gavel /> },
    { name: "Math Class", icon: <Functions /> },
    { name: "Nursing Class", icon: <LocalHospital /> },
    { name: "Philosophy Class", icon: <PsychologyAlt /> },
    { name: "Physics Class", icon: <Science /> },
    { name: "Psychology Class", icon: <Psychology /> },
    { name: "Sociology Class", icon: <People /> },
    { name: "Statistics Class", icon: <BarChart /> }
  ];

  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null); 
  };

  const handleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

  const isActive = (path: string) => pathname === path;
  const isCategoryActive = (basePath: string) => pathname.startsWith(basePath);

  return (
    <Box className={styles.navbarWrapper}>
      {/* --- TOP BAR --- */}
      <Box className={styles.topBar}>
        <Container maxWidth="lg" className={styles.topContainer}>
          {/* Updated Phone Link */}
          <a href="tel:+12292028857" className={styles.contactItem}>
            <PhoneInTalk /> +1 229 202 8857
          </a>
          
          {/* Email Link */}
          <a href="mailto:info@hireclassbuddy.com" className={styles.contactItem}>
            <Email /> info@hireclassbuddy.com
          </a>

          {/* Location Link */}
          {/* <a 
            href="https://www.google.com/maps/search/?api=1&query=450+Lexington+Ave,+New+York,+NY+10017" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.contactItem} ${styles.hideMobile}`}
          >
            <LocationOn /> 450 Lexington Ave, New York, NY 10017
          </a> */}
        </Container>
      </Box>

      {/* --- MAIN NAVIGATION --- */}
      <AppBar position="sticky" color="inherit" elevation={1} className={styles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            
            <Box className={styles.logoArea}>
              <Link href="/" prefetch={false}>
                <Image src="/logo1.png" alt="Logo" width={100} height={45} priority />
              </Link>
            </Box>

            <Box className={styles.centerNav}>
              <Link href="/" prefetch={false} className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>
              
              <Link href="/about-us/" prefetch={false} className={`${styles.navLink} ${isActive('/about-us/') ? styles.active : ''}`}>
                About Us
              </Link>

              {/* Services Dropdown */}
              <Box className={styles.navItem} onMouseEnter={() => setOpenDropdown('ser')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/services') ? styles.activeText : ''}`}>
                  Services <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <ul className={`${styles.dropdownMenu} ${openDropdown === 'ser' ? styles.show : ''}`}>
                  {services.map((item) => {
                    const href = `/services/${createSlug(item.name)}/`;
                    return (
                      <li key={item.name}>
                        <Link href={href} prefetch={false} className={isActive(href) ? styles.dropdownActive : ''}>
                          {item.icon} {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Box>

              {/* Subjects Mega Menu */}
              <Box className={styles.navItem} onMouseEnter={() => setOpenDropdown('sub')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/subjects') ? styles.activeText : ''}`}>
                  Subjects <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <Box className={`${styles.megaMenu} ${openDropdown === 'sub' ? styles.show : ''}`}>
                  <div className={styles.flexGrid}>
                    {subjects.map((sub) => {
                       const href = `/subjects/${createSlug(sub.name)}/`;
                       return (
                        <Link key={sub.name} href={href} prefetch={false} className={`${styles.flexItem} ${isActive(href) ? styles.dropdownActive : ''}`}>
                          {sub.icon} {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </Box>
              </Box>

              <Link href="/reviews/" prefetch={false} className={`${styles.navLink} ${isActive('/reviews/') ? styles.active : ''}`}>
                Reviews
              </Link>
            </Box>

            <Box className={styles.rightNav}>
              <Link href="/contact-us/" prefetch={false} className={`${styles.ctaBtn} ${isActive('/contact-us/') ? styles.ctaActive : ''}`}>
                Contact Us
              </Link>
              
              <IconButton 
                className={styles.menuButton} 
                onClick={handleDrawerToggle} 
                sx={{ color: '#000', display: { xs: 'flex', lg: 'none' } }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* --- MOBILE DRAWER --- */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box className={styles.drawerBox}>
          <Box className={styles.drawerHeader}>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#000' }}>
              <CloseIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Box>
          <Divider />
          
          <List className={styles.mobileList}>
            <ListItem className={`${styles.mobileListItem} ${isActive('/') ? styles.mobActive : ''}`}>
              <Link href="/" prefetch={false} onClick={handleDrawerToggle}><HomeIcon /> Home</Link>
            </ListItem>

            <ListItem className={`${styles.mobileListItem} ${isActive('/about-us/') ? styles.mobActive : ''}`}>
              <Link href="/about-us/" prefetch={false} onClick={handleDrawerToggle}><InfoIcon /> About Us</Link>
            </ListItem>

            <ListItem 
              className={`${styles.mobileListItem} ${isCategoryActive('/services') ? styles.mobActive : ''}`} 
              onClick={() => handleDropdown('ser')}
            >
              <Box className={styles.labelWithIcon}><School /> Services</Box>
              <KeyboardArrowDown sx={{ transform: openDropdown === 'ser' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </ListItem>
            <Collapse in={openDropdown === 'ser'} timeout="auto" unmountOnExit>
              <div className={styles.mobileSubList}>
                {services.map(s => {
                  const href = `/services/${createSlug(s.name)}/`;
                  return (
                    <Link key={s.name} href={href} prefetch={false} onClick={handleDrawerToggle} className={isActive(href) ? styles.mobSubActive : ''}>
                      {s.icon} {s.name}
                    </Link>
                  );
                })}
              </div>
            </Collapse>

            <ListItem 
              className={`${styles.mobileListItem} ${isCategoryActive('/subjects') ? styles.mobActive : ''}`} 
              onClick={() => handleDropdown('sub')}
            >
              <Box className={styles.labelWithIcon}><AutoStories /> Subjects</Box>
              <KeyboardArrowDown sx={{ transform: openDropdown === 'sub' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </ListItem>
            <Collapse in={openDropdown === 'sub'} timeout="auto" unmountOnExit>
              <div className={styles.mobileSubList}>
                {subjects.map(sub => {
                  const href = `/subjects/${createSlug(sub.name)}/`;
                  return (
                    <Link key={sub.name} href={href} prefetch={false} onClick={handleDrawerToggle} className={isActive(href) ? styles.mobSubActive : ''}>
                      {sub.icon} {sub.name}
                    </Link>
                  );
                })}
              </div>
            </Collapse>

            <ListItem className={`${styles.mobileListItem} ${isActive('/reviews/') ? styles.mobActive : ''}`}>
              <Link href="/reviews/" prefetch={false} onClick={handleDrawerToggle}><StarIcon /> Reviews</Link>
            </ListItem>

            <Box sx={{ p: 2, mt: 2 }}>
              <Link href="/contact-us/" prefetch={false} className={styles.ctaBtnMob} onClick={handleDrawerToggle}>
                <ContactSupport /> Contact Us
              </Link>
            </Box>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;