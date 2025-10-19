import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Compass, ArrowRight, Map } from 'lucide-react';

const ProjectLocation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeAttraction, setActiveAttraction] = useState(null);

  useEffect(() => {
    // Load Inter font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const locationHighlights = [
    {
      icon: Clock,
      title: '3 Minutes West',
      detail: 'Marine Drive Zero Point',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: MapPin,
      title: 'Eco Park Highway',
      detail: 'Prime Location',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: Navigation,
      title: 'Kuakata Beach',
      detail: 'Sea View Access',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      icon: Compass,
      title: 'Highway Access',
      detail: 'Direct Connectivity',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ];

  const attractions = [
    { name: 'Kuakata Sea Beach', distance: '2 min', icon: '🏖️', color: '#06b6d4' },
    { name: 'Eco Park', distance: 'Adjacent', icon: '🌳', color: '#10b981' },
    { name: 'Marine Drive', distance: '3 min', icon: '🚗', color: '#f59e0b' },
    { name: 'Zero Point', distance: '3 min', icon: '📍', color: '#ef4444' },
    { name: 'Local Markets', distance: '5 min', icon: '🏪', color: '#ec4899' },
    { name: 'Restaurants', distance: '2 min', icon: '🍽️', color: '#8b5cf6' }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section with Parallax Effect */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <div style={styles.heroIcon}>
            <MapPin size={isMobile ? 40 : 56} strokeWidth={1.5} />
          </div>
          <h1 style={{...styles.heroTitle, fontSize: isMobile ? '2.5rem' : '4rem'}}>
            <span style={styles.goldText}>Prime</span> Location
          </h1>
          <p style={{...styles.heroSubtitle, fontSize: isMobile ? '1rem' : '1.25rem'}}>
            Where natural beauty meets modern accessibility
          </p>
        </div>
        
        {/* Floating Location Badge */}
        <div style={styles.locationBadge}>
          <div style={styles.badgeContent}>
            <Clock size={20} strokeWidth={2} />
            <div>
              <div style={styles.badgeTitle}>3 minutes west</div>
              <div style={styles.badgeSubtitle}>Marine Drive Zero Point, Kuakata</div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        {/* Location Highlights - Bento Grid Style */}
        <div style={styles.bentoGrid}>
          {locationHighlights.map((item, idx) => (
            <div
              key={idx}
              style={styles.bentoCard}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.querySelector('.gradient-bg').style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.querySelector('.gradient-bg').style.opacity = '0.1';
                }
              }}
            >
              <div 
                className="gradient-bg"
                style={{...styles.bentoGradient, background: item.gradient}}
              />
              <div style={styles.bentoContent}>
                <div style={styles.bentoIcon}>
                  <item.icon size={isMobile ? 28 : 32} strokeWidth={1.5} />
                </div>
                <h3 style={{...styles.bentoTitle, fontSize: isMobile ? '1.25rem' : '1.5rem'}}>
                  {item.title}
                </h3>
                <p style={{...styles.bentoDetail, fontSize: isMobile ? '0.875rem' : '1rem'}}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section with Modern Frame */}
        <div style={styles.mapSection}>
          <div style={styles.mapHeader}>
            <div style={styles.mapHeaderLeft}>
              <Map size={24} strokeWidth={2} />
              <div>
                <h2 style={styles.mapTitle}>Explore Location</h2>
                <p style={styles.mapSubtitle}>Heart of Eco Park Highway, Kuakata Sea Beach, Patuakhali</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/RC+Ocean+Bliss/@21.8190812,90.1121935,231m/data=!3m1!1e3!4m6!3m5!1s0x30aa7d0026f07a75:0x3cc2d1801c0072b4!8m2!3d21.8190812!4d90.1134382!16s%2Fg%2F11vz4j01xy?entry=ttu&g_ep=EgoyMDI1MDExMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.mapLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(184, 155, 94, 0.1)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              Open Maps
              <ArrowRight size={18} strokeWidth={2} />
            </a>
          </div>
          
          <div style={styles.mapFrame}>
            <iframe
              title="Project Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.49975686708459!2d90.11219345941524!3d21.819081201409677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa7d0026f07a75%3A0x3cc2d1801c0072b4!2sRC%20Ocean%20Bliss!5e0!3m2!1sen!2sbd!4v1760530124266!5m2!1sen!2sbd"
              width="100%"
              height={isMobile ? "350" : "500"}
              style={styles.iframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Nearby Attractions - Modern Pills */}
        <div style={styles.attractionsSection}>
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '1.75rem' : '2.5rem'}}>
              Nearby Attractions
            </h2>
            <p style={{...styles.sectionSubtitle, fontSize: isMobile ? '0.875rem' : '1rem'}}>
              Everything you need, right at your doorstep
            </p>
          </div>

          <div style={styles.attractionsGrid}>
            {attractions.map((attraction, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.attractionPill,
                  borderColor: activeAttraction === idx ? attraction.color : 'transparent'
                }}
                onMouseEnter={() => {
                  setActiveAttraction(idx);
                }}
                onMouseLeave={() => setActiveAttraction(null)}
              >
                <span style={styles.attractionEmoji}>{attraction.icon}</span>
                <div style={styles.attractionInfo}>
                  <div style={styles.attractionName}>{attraction.name}</div>
                  <div style={{...styles.attractionDistance, color: attraction.color}}>
                    {attraction.distance} away
                  </div>
                </div>
                <div 
                  style={{
                    ...styles.attractionIndicator,
                    background: attraction.color,
                    opacity: activeAttraction === idx ? 1 : 0
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Modern Glassmorphism */}
        <div style={styles.ctaSection}>
          <div style={styles.ctaGradient} />
          <div style={styles.ctaContent}>
            <h3 style={{...styles.ctaTitle, fontSize: isMobile ? '1.5rem' : '2rem'}}>
              Ready to Experience Paradise?
            </h3>
            <p style={{...styles.ctaText, fontSize: isMobile ? '0.875rem' : '1rem'}}>
              Discover the perfect harmony of coastal serenity and urban convenience
            </p>
            <div style={styles.ctaButtons}>
              <button 
                style={{...styles.primaryBtn, padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(184, 155, 94, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 155, 94, 0.3)';
                }}
              >
                Get Directions
                <Navigation size={18} strokeWidth={2} />
              </button>
              <button 
                style={{...styles.secondaryBtn, padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)',
    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
  },
  hero: {
    position: 'relative',
    height: '70vh',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(184, 155, 94, 0.15) 0%, transparent 70%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 2rem',
  },
  heroIcon: {
    width: '80px',
    height: '80px',
    margin: '0 auto 2rem',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)',
  },
  heroTitle: {
    fontWeight: '800',
    color: '#fff',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
  },
  goldText: {
    background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    fontWeight: '400',
  },
  locationBadge: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
    width: 'calc(100% - 4rem)',
    maxWidth: '600px',
  },
  badgeContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 2rem',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: '#0f172a',
  },
  badgeTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  badgeSubtitle: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginTop: '0.25rem',
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
  },
  bentoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  bentoCard: {
    position: 'relative',
    background: '#fff',
    borderRadius: '24px',
    padding: '2rem',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
  },
  bentoGradient: {
    position: 'absolute',
    inset: 0,
    opacity: 0.1,
    transition: 'opacity 0.4s ease',
  },
  bentoContent: {
    position: 'relative',
    zIndex: 10,
  },
  bentoIcon: {
    width: '56px',
    height: '56px',
    background: 'rgba(15, 23, 42, 0.05)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    color: '#0f172a',
  },
  bentoTitle: {
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '0.5rem',
    letterSpacing: '-0.01em',
  },
  bentoDetail: {
    color: '#64748b',
    fontWeight: '400',
  },
  mapSection: {
    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    marginBottom: '4rem',
    border: '1px solid #e5e7eb',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
  },
  mapHeader: {
    padding: '1.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e5e7eb',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  mapHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  mapTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
  },
  mapSubtitle: {
    fontSize: '0.875rem',
    color: '#64748b',
    margin: '0.25rem 0 0 0',
  },
  mapLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: 'rgba(184, 155, 94, 0.1)',
    color: '#0f172a',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '0.875rem',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(184, 155, 94, 0.2)',
  },
  mapFrame: {
    position: 'relative',
  },
  iframe: {
    border: 'none',
    display: 'block',
  },
  attractionsSection: {
    marginBottom: '4rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '0.75rem',
    letterSpacing: '-0.02em',
  },
  sectionSubtitle: {
    color: '#64748b',
    fontWeight: '400',
  },
  attractionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1rem',
  },
  attractionPill: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 1.5rem',
    background: '#fff',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid',
    overflow: 'hidden',
  },
  attractionEmoji: {
    fontSize: '2rem',
    flexShrink: 0,
  },
  attractionInfo: {
    flex: 1,
  },
  attractionName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '0.25rem',
  },
  attractionDistance: {
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  attractionIndicator: {
    position: 'absolute',
    right: '1rem',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'opacity 0.3s ease',
  },
  ctaSection: {
    position: 'relative',
    padding: '4rem 2rem',
    borderRadius: '32px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ctaGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    opacity: 1,
  },
  ctaContent: {
    position: 'relative',
    zIndex: 10,
    color: '#fff',
  },
  ctaTitle: {
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  ctaText: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(184, 155, 94, 0.3)',
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default ProjectLocation;