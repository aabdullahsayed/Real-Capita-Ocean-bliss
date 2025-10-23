import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Award, Users, Building2, Send, User, MessageSquare,
  ChevronDown, ChevronUp, Star, Download 
} from 'lucide-react';
import logoImg from '../assets/logo.png';
import oceanBlissLogo from '../assets/logo1.png';
import chairmanImg from '../assets/chairman.jpg';
import mdImg from '../assets/md.jpg';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Page load animation trigger
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+88-02-8833232 (Sales Office)',
        '+88-02-226600699 (Corporate Office)'
      ],
      links: ['tel:+88028833232', 'tel:+8802226600699'],
      color: '#10b981'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@rcgcbd.com'],
      links: ['mailto:info@rcgcbd.com'],
      color: '#3b82f6'
    },
    {
      icon: MapPin,
      title: 'Our Offices',
      details: [
        'Sales Office: Level-19, Nafi Tower, 53, Gulshan Avenue, Gulshan-1, Dhaka-1212',
        'Corporate Office: House #05, Flat C-4 & C-5, Road 16 & 21, Gulshan-1, Dhaka-1212'
      ],
      links: [null, null],
      color: '#f59e0b'
    }
  ];

  const teamMembers = [
    {
      name: 'Manzur Ahmed Sohan',
      role: 'Chairman, RCG',
      image: chairmanImg,
      description: 'Visionary leader with 20+ years of experience in real estate development'
    },
    {
      name: 'Mohammad Arifuzzaman',
      role: 'Managing Director, RCG',
      image: mdImg,
      description: 'Strategic executive driving innovation and sustainable growth'
    }
  ];

  const services = [
    'Residential Projects', 'Commercial Buildings', 'Resort Development',
    'Infrastructure Projects', 'Property Management', 'Investment Advisory'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }, 1000);
  };

  const getStyles = (isMobile, pageLoaded, hoveredCard) => ({
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#f8fafc',
      color: '#0f172a',
      lineHeight: 1.6,
      overflowX: 'hidden',
    },
    
    // Hero Section with Motion
    heroSection: {
      position: 'relative',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: '#fff',
      padding: isMobile ? '5rem 1rem 4rem' : '8rem 2rem 6rem',
      overflow: 'hidden',
    },
    heroGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'scale(1)' : 'scale(1.05)',
      transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s',
    },
    logoRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '1.5rem' : '4rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    },
    logoContainer: {
      padding: '1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(-5deg)',
      transition: 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s',
    },
    mainLogo: {
      width: isMobile ? '120px' : '160px',
      height: isMobile ? '120px' : '160px',
      objectFit: 'contain',
    },
    secondaryLogo: {
      width: isMobile ? '100px' : '140px',
      height: isMobile ? '100px' : '140px',
      objectFit: 'contain',
    },
    heroText: {
      marginBottom: '2.5rem',
    },
    heroTitle: {
      fontWeight: 800,
      margin: '0 0 1rem 0',
      letterSpacing: '-0.02em',
      background: 'linear-gradient(135deg, #fff 0%, #f8fafc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize: isMobile ? '2.25rem' : '3.5rem',
    },
    heroSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: 'rgba(255, 255, 255, 0.8)',
      maxWidth: '600px',
      margin: '0 auto',
      fontWeight: 400,
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease 0.6s',
    },
    primaryCTA: {
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: '#fff',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    secondaryCTA: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1rem 2rem',
      borderRadius: '12px',
      fontWeight: 500,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    ctaIcon: {
      transition: 'transform 0.3s ease',
    },

    // Main Content & Sections with Staggered Animation
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    },
    section: {
      marginBottom: isMobile ? '4rem' : '6rem',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    sectionTitle: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      fontWeight: 800,
      color: '#0f172a',
      marginBottom: '1rem',
      letterSpacing: '-0.02em',
    },
    sectionDivider: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
      margin: '0 auto 1rem',
      borderRadius: '2px',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
    },
    sectionDescription: {
      color: '#64748b',
      fontSize: '1.125rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.7,
    },

    // Contact Cards with Enhanced Motion
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    contactCard: {
      background: '#fff',
      padding: '2.5rem 2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      border: '1px solid rgba(0, 0, 0, 0.03)',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      display: 'flex',
      gap: '1.5rem',
      cursor: 'pointer',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
      ...(hoveredCard === 'contact' && {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
      }),
    },
    contactIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    contactContent: {
      flex: 1,
    },
    contactTitle: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: '1rem',
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    detailItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
    },
    detailLink: {
      color: '#475569',
      textDecoration: 'none',
      fontSize: '1rem',
      lineHeight: 1.6,
      transition: 'color 0.2s ease',
    },
    detailText: {
      color: '#475569',
      fontSize: '1rem',
      lineHeight: 1.6,
    },

    // Stats Section with Motion
    statsSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      margin: isMobile ? '2rem 0' : '4rem 0',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },
    statItem: {
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease 0.7s',
    },
    statNumber: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 800,
      color: '#f59e0b',
      marginBottom: '0.5rem',
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      color: '#64748b',
      fontSize: '1rem',
      fontWeight: 500,
    },

    // Team Section - CIRCLE IMAGES (No Border)
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    teamCard: {
      background: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(30px)',
      ...(hoveredCard === 'team' && {
        transform: 'translateY(-12px) scale(1.02)',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)',
      }),
    },
    teamImageContainer: {
      position: 'relative',
      height: '280px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    },
    teamImage: {
      width: isMobile ? '140px' : '180px',
      height: isMobile ? '140px' : '180px',
      objectFit: 'cover',
      borderRadius: '50%',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      ...(hoveredCard === 'team' && {
        transform: 'scale(1.1)',
      }),
    },
    teamOverlay: {
      position: 'absolute',
      bottom: '1rem',
      right: '1rem',
      background: 'rgba(245, 158, 11, 0.9)',
      color: '#fff',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 600,
      opacity: hoveredCard === 'team' ? 1 : 0,
      transform: hoveredCard === 'team' ? 'translateY(0)' : 'translateY(10px)',
      transition: 'all 0.3s ease',
    },
    teamContent: {
      padding: '2rem',
      textAlign: 'center',
    },
    teamName: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: '0.5rem',
    },
    teamRole: {
      color: '#f59e0b',
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    teamDescription: {
      color: '#64748b',
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },

    // Form Styles with Motion
    formContainer: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    contactForm: {
      background: '#fff',
      padding: isMobile ? '2rem' : '3rem',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
      opacity: pageLoaded ? 1 : 0,
      transform: pageLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease 1s',
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1.5rem',
      marginBottom: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    formLabel: {
      fontWeight: 600,
      color: '#374151',
      fontSize: '0.95rem',
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    textareaWrapper: {
      position: 'relative',
    },
    formInput: {
      width: '100%',
      padding: '1rem 1rem 1rem 3rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      background: '#fff',
      outline: 'none',
    },
    formInputFocus: {
      borderColor: '#f59e0b',
      boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.1)',
    },
    selectWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    formSelect: {
      width: '100%',
      padding: '1rem 1rem 1rem 3rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      background: '#fff',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")',
      backgroundPosition: 'right 1rem center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    formTextarea: {
      width: '100%',
      padding: '1rem 1rem 1rem 3rem',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: 'inherit',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      background: '#fff',
      outline: 'none',
    },
    formTextareaFocus: {
      borderColor: '#f59e0b',
      boxShadow: '0 0 0 3px rgba(245, 158, 11, 0.1)',
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: '#fff',
      border: 'none',
      padding: '1.25rem',
      borderRadius: '12px',
      fontSize: '1.125rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
    },
    submitButtonHover: {
      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)',
      transform: 'translateY(-2px)',
    },
  });

  const styles = getStyles(isMobile, pageLoaded, hoveredCard);

  return (
    <div style={styles.container}>
      {/* Enhanced Hero Section with Page Load Motion */}
      <div style={styles.heroSection}>
        <div style={styles.heroGradient} />
        <div style={styles.heroContent}>
          <div style={styles.logoRow}>
            <div style={styles.logoContainer}>
              <img src={logoImg} alt="Real Capita Group Logo" style={styles.mainLogo} />
            </div>
            <div style={styles.logoContainer}>
              <img src={oceanBlissLogo} alt="RC Ocean Bliss Logo" style={styles.secondaryLogo} />
            </div>
          </div>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>Let's Connect</h1>
            <p style={styles.heroSubtitle}>
              Ready to start your next project? Our team is here to help you every step of the way
            </p>
          </div>
          <div style={styles.ctaButtons}>
            <button 
              style={styles.primaryCTA} 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                const icon = e.target.querySelector('svg');
                if (icon) icon.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                const icon = e.target.querySelector('svg');
                if (icon) icon.style.transform = 'translateX(0)';
              }}
            >
              Get Quote <ChevronDown size={20} style={styles.ctaIcon} />
            </button>
            <button 
              style={styles.secondaryCTA}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Learn More <Star size={18} style={styles.ctaIcon} />
            </button>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        {/* Contact Information */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
            <div style={styles.sectionDivider} />
            <p style={styles.sectionDescription}>
              Reach out to us through any of our channels. We're always ready to assist you.
            </p>
          </div>
          
          <div style={styles.contactGrid}>
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                style={styles.contactCard}
                onMouseEnter={() => setHoveredCard('contact')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ ...styles.contactIcon, backgroundColor: `${info.color}10` }}>
                  <info.icon size={28} color={info.color} strokeWidth={2} />
                </div>
                <div style={styles.contactContent}>
                  <h3 style={styles.contactTitle}>{info.title}</h3>
                  <div style={styles.contactDetails}>
                    {info.details.map((detail, detailIdx) => (
                      <div key={detailIdx} style={styles.detailItem}>
                        {info.links[detailIdx] ? (
                          <a href={info.links[detailIdx]} style={styles.detailLink}>{detail}</a>
                        ) : (
                          <span style={styles.detailText}>{detail}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Customer Support</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Projects Delivered</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Leadership Team - CIRCLE IMAGES */}
        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Meet Our Leadership</h2>
            <div style={styles.sectionDivider} />
            <p style={styles.sectionDescription}>
              Our experienced leadership team is committed to excellence and innovation
            </p>
          </div>
          
          <div style={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                style={styles.teamCard}
                onMouseEnter={() => setHoveredCard('team')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.teamImageContainer}>
                  <img src={member.image} alt={member.name} style={styles.teamImage} />
                  <div className="team-overlay" style={styles.teamOverlay}>
                    📞 Contact
                  </div>
                </div>
                <div style={styles.teamContent}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamRole}>{member.role}</p>
                  <p style={styles.teamDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Send us a Message</h2>
            <div style={styles.sectionDivider} />
            <p style={styles.sectionDescription}>
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
          
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.contactForm}>
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Full Name</label>
                  <div style={styles.inputWrapper}>
                    <User size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', zIndex: 1 }} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      required
                      style={{
                        ...styles.formInput,
                        ...(formData.name && styles.formInputFocus)
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email Address</label>
                  <div style={styles.inputWrapper}>
                    <Mail size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', zIndex: 1 }} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      required
                      style={{
                        ...styles.formInput,
                        ...(formData.email && styles.formInputFocus)
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone Number</label>
                  <div style={styles.inputWrapper}>
                    <Phone size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', zIndex: 1 }} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      style={styles.formInput}
                      placeholder="+880 1XXXXXXXXX"
                    />
                  </div>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Service Interested</label>
                  <div style={styles.selectWrapper}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      style={{
                        ...styles.formSelect,
                        ...(formData.service && styles.formInputFocus)
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message</label>
                <div style={styles.textareaWrapper}>
                  <MessageSquare size={20} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '1.5rem', zIndex: 1 }} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={(e) => e.target.style.borderColor = '#f59e0b'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    required
                    rows={5}
                    style={{
                      ...styles.formTextarea,
                      ...(formData.message && styles.formTextareaFocus)
                    }}
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formSubmitted}
                style={{
                  ...styles.submitButton,
                  opacity: formSubmitted ? 0.7 : 1,
                  background: formSubmitted ? '#10b981' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  ...(formSubmitted ? {} : styles.submitButtonHover)
                }}
                onMouseEnter={(e) => !formSubmitted && (e.target.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => !formSubmitted && (e.target.style.transform = 'translateY(0)')}
              >
                {formSubmitted ? (
                  <>
                    <Send size={20} style={{ marginRight: '0.5rem' }} />
                    Message Sent! 🎉
                  </>
                ) : (
                  <>
                    <Send size={20} style={{ marginRight: '0.5rem' }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;