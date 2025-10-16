import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Globe, Twitter, Github, Phone, MapPin, ChevronUp, Mail } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/rcoceanbliss', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/real-capita-group/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://www.rcgcbd.com/', label: 'Website' },
    { icon: Twitter, href: 'https://x.com', label: 'Twitter' },
  ];

  const offices = [
    {
      type: 'Sales Office',
      address: ['Level-19, Nafi Tower', '53, Gulshan Avenue, Gulshan-1', 'Dhaka-1212, Bangladesh'],
      phone: '+88-02-8833232',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)'
    },
    {
      type: 'Corporate Office',
      address: ['House #05, Flat C-4 & C-5', 'Road 16 & 21, Gulshan-1', 'Dhaka-1212, Bangladesh'],
      phone: '+88-02-226600699',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)'
    }
  ];

  return (
    <footer style={styles.footer}>
      {/* Gradient Top Border */}
      <div style={styles.topGradient} />

      <div style={styles.container}>
        {/* Hotline Section */}
        <div style={styles.hotlineSection}>
          <div style={styles.hotlineContent}>
            <div style={styles.hotlineIcon}>
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <div>
              <p style={styles.hotlineLabel}>24/7 Customer Support</p>
              <h2 style={styles.hotlineNumber}>Hotline 10602</h2>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={styles.mainGrid}>
          {/* Company Info */}
          <div style={styles.companySection}>
            <h3 style={styles.brandName}>Real Capita Group</h3>
            <p style={styles.brandTagline}>
              Building dreams, crafting excellence. Your trusted partner in luxury real estate development.
            </p>
            
            {/* Social Links */}
            <div style={styles.socialContainer}>
              <p style={styles.socialLabel}>Connect With Us</p>
              <div style={styles.socialLinks}>
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.socialLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Offices */}
          <div style={styles.officesGrid}>
            {offices.map((office, idx) => (
              <div
                key={idx}
                style={styles.officeCard}
                onMouseMove={handleMouseMove}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{...styles.officeGradient, background: office.gradient}} />
                
                <div style={styles.officeContent}>
                  <div style={styles.officeHeader}>
                    <MapPin size={20} strokeWidth={1.5} />
                    <h4 style={styles.officeType}>{office.type}</h4>
                  </div>
                  
                  <div style={styles.officeDetails}>
                    {office.address.map((line, i) => (
                      <p key={i} style={styles.addressLine}>{line}</p>
                    ))}
                  </div>

                  <a href={`tel:${office.phone}`} style={styles.phoneLink}>
                    <Phone size={16} strokeWidth={1.5} />
                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p style={styles.copyright}>
            © 2025 Real Capita Group — All Rights Reserved
          </p>
          
          <div style={styles.developerInfo}>
            <span style={styles.developedBy}>Developed by</span>
            <a
              href="https://linkedin.com/in/abdullahsayedchy"
              target="_blank"
              rel="noreferrer"
              style={styles.developerName}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#6366f1';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              Abdullah Al Sayed
            </a>
            
            <div style={styles.developerLinks}>
              <a
                href="https://linkedin.com/in/abdullahsayedchy"
                target="_blank"
                rel="noreferrer"
                style={styles.developerLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/aabdullahsayed"
                target="_blank"
                rel="noreferrer"
                style={styles.developerLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={styles.scrollTop}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} strokeWidth={2} />
        </button>
      )}
    </footer>
  );
};

const styles = {
  footer: {
    position: 'relative',
    background: 'linear-gradient(180deg, #0a0e1a 0%, #0f1419 100%)',
    color: '#fff',
    overflow: 'hidden',
  },
  topGradient: {
    height: '4px',
    background: 'linear-gradient(90deg, #6366f1 0%, #8b5cf6 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%)',
    backgroundSize: '200% 100%',
    animation: 'gradientFlow 8s linear infinite',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1.5rem 2rem',
  },
  hotlineSection: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  hotlineContent: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1.5rem',
    padding: '1.5rem 3rem',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  hotlineIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  hotlineLabel: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    margin: '0 0 0.25rem 0',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },
  hotlineNumber: {
    fontSize: '2rem',
    margin: 0,
    fontWeight: '700',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  companySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  brandName: {
    fontSize: '1.75rem',
    fontWeight: '700',
    margin: 0,
    background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  brandTagline: {
    fontSize: '0.95rem',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: '1.6',
    margin: 0,
  },
  socialContainer: {
    marginTop: '0.5rem',
  },
  socialLabel: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: '0.75rem',
    fontWeight: '500',
  },
  socialLinks: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  socialLink: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  officesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    gridColumn: 'span 2',
  },
  officeCard: {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  officeGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
  },
  officeContent: {
    padding: '1.75rem',
    position: 'relative',
    zIndex: 1,
  },
  officeHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  officeType: {
    fontSize: '1.125rem',
    fontWeight: '600',
    margin: 0,
    color: '#fff',
  },
  officeDetails: {
    marginBottom: '1.25rem',
  },
  addressLine: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: '0.25rem 0',
    lineHeight: '1.5',
  },
  phoneLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '0.5rem 1rem',
    background: 'rgba(99, 102, 241, 0.1)',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(99, 102, 241, 0.2)',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
    margin: '2rem 0',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    paddingTop: '1rem',
  },
  copyright: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: 0,
  },
  developerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  developedBy: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  developerName: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  developerLinks: {
    display: 'flex',
    gap: '0.5rem',
    paddingLeft: '0.5rem',
  },
  developerLink: {
    color: 'rgba(255, 255, 255, 0.6)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
  },
  scrollTop: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
};

export default Footer;
