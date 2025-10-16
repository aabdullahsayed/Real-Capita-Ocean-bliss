import React, { useState } from 'react';

const ProjectDetails = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      id: 1,
      title: 'Land & Construction',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      details: [
        { label: 'Total Land Area', value: '2.14 acre (Approx.)' },
        { label: 'Maximum Ground Coverage', value: '5,320 sqm / 57,264 sft' },
        { label: 'Total Construction Area', value: '73,000 sqm / 785,766 sft' },
        { label: 'Levels', value: 'B1, B2, G+14' }
      ]
    },
    {
      id: 2,
      title: 'Accommodations',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      details: [
        { label: 'Rooms & Suites', value: '635 nos' },
        { label: 'Room Types', value: 'Deluxe, Executive, & Presidential Suites' }
      ]
    },
    {
      id: 3,
      title: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
      details: [
        { label: 'Cineplex Capacity', value: '168 persons' },
        { label: 'State-of-the-art', value: 'Premium viewing experience' }
      ]
    },
    {
      id: 4,
      title: 'Dining & Events',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      details: [
        { label: 'Restaurant Capacity', value: '500 persons (300 + 200)' },
        { label: 'Convention Hall', value: 'Up to 300 persons' },
        { label: 'Banquet Hall', value: 'Up to 600 persons' },
        { label: 'Conference Room', value: '80-100 persons' },
        { label: 'Juice Bar', value: '50-60 persons' }
      ]
    },
    {
      id: 5,
      title: 'Recreation',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
      details: [
        { label: 'Oceanfront Infinity Pool', value: 'For all guests' },
        { label: 'Family Infinity Pool', value: 'Dedicated family area' },
        { label: 'Car Parking', value: '75 vehicles' }
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <style>
        {`
          .project-details-summary-section {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem 0;
          }
          .project-details-summary-title {
            font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
            font-weight: 700;
            color: #1a2a3a;
            margin-bottom: 2rem;
            text-align: center;
            letter-spacing: 1px;
            font-size: 2rem;
          }
          .project-details-stats-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            max-width: 1280px;
            margin: 0 auto;
          }
          .project-details-stat-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            background: linear-gradient(135deg, rgba(184, 155, 94, 0.1) 0%, rgba(255, 250, 240, 0.1) 100%);
            border-radius: 12px;
            transition: all 0.3s ease;
            cursor: pointer;
            min-width: 200px;
            max-width: 300px;
            position: relative;
            overflow: hidden;
          }
          .project-details-stat-item:hover {
            transform: translateY(-4px);
            background: linear-gradient(135deg, rgba(184, 155, 94, 0.2) 0%, rgba(255, 250, 240, 0.2) 100%);
            box-shadow: 0 6px 16px rgba(184, 155, 94, 0.2);
          }
          .project-details-stat-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: #b89b5e;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .project-details-stat-item:hover::before {
            opacity: 1;
          }
          .project-details-stat-icon {
            background: #b89b5e;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 1.5rem;
            flex-shrink: 0;
          }
          .project-details-stat-content {
            display: flex;
            flex-direction: column;
          }
          .project-details-stat-label {
            color: #666;
            font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.25rem;
          }
          .project-details-stat-value {
            color: #1a2a3a;
            font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(1rem); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .project-details-summary-section {
              padding: 1.5rem 0 !important;
              width: 100% !important;
              margin: 0 !important;
            }
            .project-details-summary-title {
              font-size: 1.5rem !important;
            }
            .project-details-stats-list {
              flex-direction: column !important;
              gap: 1rem !important;
              align-items: stretch !important;
            }
            .project-details-stat-item {
              padding: 1rem !important;
              min-width: auto !important;
              max-width: none !important;
            }
            .project-details-stat-icon {
              width: 2.5rem !important;
              height: 2.5rem !important;
              font-size: 1.25rem !important;
            }
            .project-details-stat-label {
              font-size: 0.75rem !important;
            }
            .project-details-stat-value {
              font-size: 1rem !important;
            }
            .project-details-stat-item:hover {
              transform: none !important;
              box-shadow: none !important;
            }
            .project-details-stat-item:hover::before {
              opacity: 0 !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <div style={styles.headerSection}>
        <h1 style={{ ...styles.mainTitle, fontSize: isMobile ? '2rem' : '3rem' }}>
          Project Features
        </h1>
        <p style={{ ...styles.subtitle, fontSize: isMobile ? '1rem' : '1.125rem' }}>
          {isMobile ? 'Tap each card to explore details' : 'Hover over each section to explore details'}
        </p>
      </div>

      {/* Interactive Hover Cards */}
      <div style={styles.cardWrapper}>
        <div style={{ ...styles.cardContainer, padding: isMobile ? '0.25rem' : '0.5rem' }}>
          {isMobile ? (
            // Mobile: Vertical Stack Layout
            <div style={styles.mobileStack}>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  style={styles.mobileCard}
                  onClick={() => setSelectedFeature(selectedFeature === feature.id ? null : feature.id)}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={styles.mobileImage}
                  />
                  <div style={styles.mobileOverlay} />
                  <div style={styles.mobileContent}>
                    <h3 style={styles.mobileTitle}>{feature.title}</h3>
                    {selectedFeature === feature.id && (
                      <div style={styles.mobileDetailsContainer}>
                        {feature.details.map((detail, index) => (
                          <div key={index} style={styles.mobileDetailCard}>
                            <p style={styles.mobileDetailLabel}>{detail.label}</p>
                            <p style={styles.mobileDetailValue}>{detail.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={styles.expandIcon}>
                      {selectedFeature === feature.id ? '−' : '+'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop: Horizontal Hover Layout
            <div style={styles.cardFlex}>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  style={{
                    ...styles.featureCard,
                    flex: selectedFeature === feature.id ? '4' : '1',
                  }}
                  onMouseEnter={() => setSelectedFeature(feature.id)}
                  onMouseLeave={() => setSelectedFeature(null)}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      ...styles.featureImage,
                      opacity: selectedFeature === feature.id ? 1 : 0.5,
                    }}
                  />
                  <div style={styles.overlay} />
                  <div style={styles.contentWrapper}>
                    <h3
                      style={{
                        ...styles.featureTitle,
                        transform: selectedFeature === feature.id ? 'rotate(0deg)' : 'rotate(-90deg)',
                        marginBottom: selectedFeature === feature.id ? '2rem' : '0',
                        fontSize: selectedFeature === feature.id ? '1.875rem' : '1.25rem',
                      }}
                    >
                      {feature.title}
                    </h3>
                    <div
                      style={{
                        ...styles.detailsContainer,
                        opacity: selectedFeature === feature.id ? 1 : 0,
                        transform: selectedFeature === feature.id ? 'translateY(0)' : 'translateY(1rem)',
                      }}
                    >
                      {feature.details.map((detail, index) => (
                        <div
                          key={index}
                          style={styles.detailCard}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.borderColor = '#b89b5e';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 155, 94, 0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.borderColor = 'rgba(184, 155, 94, 0.3)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <p style={styles.detailLabel}>{detail.label}</p>
                          <p style={styles.detailValue}>{detail.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Overview */}
      <div className="project-details-summary-section">
        <h2 className="project-details-summary-title">Quick Overview</h2>
        <div className="project-details-stats-list">
          {[
            { icon: '🏗️', label: 'Total Construction', value: '785,766 sft' },
            { icon: '🏨', label: 'Rooms & Suites', value: '635 Units' },
            { icon: '🍽️', label: 'Dining Capacity', value: '500 Persons' },
            { icon: '🏊', label: 'Swimming Pools', value: '2 Infinity Pools' },
            { icon: '🎭', label: 'Banquet Hall', value: '600 Persons' },
            { icon: '🚗', label: 'Parking Spaces', value: '75 Vehicles' },
          ].map((item, index) => (
            <div key={index} className="project-details-stat-item">
              <div className="project-details-stat-icon">{item.icon}</div>
              <div className="project-details-stat-content">
                <p className="project-details-stat-label">{item.label}</p>
                <p className="project-details-stat-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fffaf0 0%, #fff8e7 100%)',
    padding: '3rem 1rem',
    fontFamily: "'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  headerSection: {
    maxWidth: '1280px',
    margin: '0 auto 3rem',
    textAlign: 'center',
  },
  mainTitle: {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontWeight: '700',
    color: '#1a2a3a',
    marginBottom: '1rem',
    letterSpacing: '1px',
  },
  subtitle: {
    color: '#666',
    fontWeight: '400',
  },
  cardWrapper: {
    maxWidth: '1280px',
    margin: '0 auto 4rem',
  },
  cardContainer: {
    backgroundColor: 'rgba(26, 42, 58, 0.05)',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  cardFlex: {
    display: 'flex',
    gap: '0.5rem',
    height: '600px',
  },
  featureCard: {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '6px',
    border: '2px solid #b89b5e',
    transition: 'all 0.5s ease',
  },
  featureImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(26, 42, 58, 0.9) 0%, rgba(26, 42, 58, 0.5) 50%, transparent 100%)',
  },
  contentWrapper: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    zIndex: 10,
  },
  featureTitle: {
    color: '#b89b5e',
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontWeight: '700',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'all 0.5s ease',
    whiteSpace: 'nowrap',
  },
  detailsContainer: {
    transition: 'all 0.5s ease',
    width: '100%',
    maxWidth: '28rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  detailCard: {
    backgroundColor: 'rgba(255, 250, 240, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '8px',
    padding: '1rem',
    border: '1px solid rgba(184, 155, 94, 0.3)',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  detailLabel: {
    color: '#b89b5e',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  detailValue: {
    color: '#1a2a3a',
    fontSize: '1.125rem',
    fontWeight: '700',
    margin: 0,
  },
  mobileStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  mobileCard: {
    position: 'relative',
    minHeight: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid #b89b5e',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  mobileImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.7,
  },
  mobileOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(26, 42, 58, 0.7), rgba(26, 42, 58, 0.9))',
  },
  mobileContent: {
    position: 'relative',
    padding: '1.5rem',
    zIndex: 10,
  },
  mobileTitle: {
    color: '#b89b5e',
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  mobileDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1rem',
    animation: 'fadeIn 0.3s ease',
  },
  mobileDetailCard: {
    backgroundColor: 'rgba(255, 250, 240, 0.95)',
    borderRadius: '6px',
    padding: '0.75rem',
    border: '1px solid rgba(184, 155, 94, 0.3)',
  },
  mobileDetailLabel: {
    color: '#b89b5e',
    fontSize: '0.75rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  mobileDetailValue: {
    color: '#1a2a3a',
    fontSize: '1rem',
    fontWeight: '700',
    margin: 0,
  },
  expandIcon: {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#b89b5e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: '700',
    lineHeight: '1',
  },
};

export default ProjectDetails;