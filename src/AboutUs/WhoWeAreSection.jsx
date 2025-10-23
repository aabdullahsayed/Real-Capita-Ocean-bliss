import React, { useState, useEffect } from 'react';
import { Award, TrendingUp, Users, Building2, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import chairmanImg from '../assets/chairman.jpg';
import mdImg from '../assets/md.jpg';
import logoImg from '../assets/logo1.png';
import maya from '../assets/mayakanon.jpg'

const WhoWeAreSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentLeader, setCurrentLeader] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide for leadership messages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % leadershipMessages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-slide for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Building2, value: '50+', label: 'Projects Delivered', color: '#f59e0b' },
    { icon: Users, value: '2000+', label: 'Happy Customers', color: '#10b981' },
    { icon: Award, value: '8+', label: 'Years Experience', color: '#06b6d4' },
    { icon: TrendingUp, value: '100%', label: 'Quality Assurance', color: '#8b5cf6' }
  ];

  const leadershipMessages = [
    {
      role: 'Chairman',
      name: 'Manzur Ahmed Sohan',
      image: chairmanImg,
      message: 'At Real Capita Group, we don\'t just build structures; we create legacies. Our commitment to excellence and innovation has been the cornerstone of our success since 2017.',
      signature: 'Manzur Ahmed Sohan'
    },
    {
      role: 'Managing Director',
      name: 'Mohammad Arifuzzaman',
      image: mdImg,
      message: 'Quality is never an accident; it is always the result of intelligent effort. We take pride in delivering projects that exceed expectations and stand the test of time.',
      signature: 'Mohammad Arifuzzaman'
    }
  ];

  const projects = [
    {
      name: 'Mayakanon',
      location: "Cox's Bazar",
      year: '2023',
      image: maya,
      status: 'On Going'
    },
    {
      name: 'Green Valley Residency',
      location: 'Dhaka',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      status: 'Completed'
    },
    {
      name: 'Skyline Tower',
      location: 'Chittagong',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      status: 'Completed'
    }
  ];

  const testimonials = [
    {
      name: 'Rafiqul Islam',
      location: 'Dhaka',
      rating: 5,
      text: 'Real Capita Group exceeded all our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home.',
      project: 'Green Valley Residency',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
    },
    {
      name: 'Nasrin Ahmed',
      location: 'Chittagong',
      rating: 5,
      text: 'Professional team, timely delivery, and exceptional quality. Real Capita Group has set a new standard in real estate development. Highly recommended!',
      project: 'Skyline Tower',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Kamal Hossain',
      location: 'Patuakhali',
      rating: 5,
      text: 'Investing with Real Capita Group was the best decision. Their transparency and commitment to quality are unmatched in the industry.',
      project: 'Ocean Bliss Resort',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Sultana Begum',
      location: 'Dhaka',
      rating: 5,
      text: 'From planning to handover, everything was seamless. The team was always available to address our concerns. Truly a five-star experience!',
      project: 'Green Valley Residency',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  const nextLeader = () => {
    setIsAutoPlaying(false);
    setCurrentLeader((prev) => (prev + 1) % leadershipMessages.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevLeader = () => {
    setIsAutoPlaying(false);
    setCurrentLeader((prev) => (prev - 1 + leadershipMessages.length) % leadershipMessages.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div style={styles.container}>
      {/* Hero Section with Logo */}
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <img
              src={logoImg}
              alt="Real Capita Group Logo"
              style={styles.logoImage}
            />
            <div style={styles.logoText}>
              <h1 style={{...styles.companyName, fontSize: isMobile ? '2rem' : '3rem'}}>
                Real Capita Group
              </h1>
              <p style={{...styles.tagline, fontSize: isMobile ? '0.875rem' : '1rem'}}>
                Building Excellence Since 2017
              </p>
            </div>
          </div>
          {/* Stats Grid */}
          <div style={{...styles.statsGrid, gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(150px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))'}}>
            {stats.map((stat, idx) => (
              <div key={idx} style={styles.statCard}>
                <div style={{...styles.statIcon, background: `${stat.color}15`}}>
                  <stat.icon size={isMobile ? 24 : 28} color={stat.color} strokeWidth={2} />
                </div>
                <div style={{...styles.statValue, fontSize: isMobile ? '2rem' : '2.5rem'}}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={styles.mainContent}>
        {/* About Section */}
        <div style={styles.aboutSection}>
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '2rem' : '3rem'}}>
              Who We Are
            </h2>
            <div style={styles.titleUnderline} />
          </div>
          <p style={{...styles.aboutText, fontSize: isMobile ? '1rem' : '1.125rem'}}>
            Real Capita Group is a leading real estate and infrastructure development company established in 2017.
            We specialize in creating quality residential, commercial, and resort properties that combine modern
            architecture with sustainable practices. Our commitment to excellence, transparency, and customer
            satisfaction has made us one of the most trusted names in Bangladesh's real estate sector.
          </p>
          <p style={{...styles.aboutText, fontSize: isMobile ? '1rem' : '1.125rem'}}>
            With a portfolio of 50+ successfully delivered projects and over 2000 satisfied customers, we continue
            to set new benchmarks in quality construction and timely delivery. Every project we undertake reflects
            our dedication to building not just properties, but communities and lasting relationships.
          </p>
        </div>
        {/* Leadership Messages Carousel */}
        <div style={styles.leadershipSection}>
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '1.75rem' : '2.5rem'}}>
              Message from Leadership
            </h2>
            <div style={styles.titleUnderline} />
          </div>
          <div style={{...styles.carouselContainer, flexDirection: isMobile ? 'column' : 'row'}}>
            {!isMobile && (
              <button
                style={styles.carouselBtn}
                onClick={prevLeader}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.7)'}
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <div style={styles.leadershipCard}>
              <div style={styles.leadershipGradient} />
              <div style={styles.leadershipContent}>
                <div style={styles.quoteIcon}>
                  <Quote size={48} strokeWidth={1.5} />
                </div>
                <div style={{...styles.leaderInfo, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left'}}>
                  <img
                    src={leadershipMessages[currentLeader].image}
                    alt={leadershipMessages[currentLeader].name}
                    style={{...styles.leaderImage, width: isMobile ? '100px' : '80px', height: isMobile ? '100px' : '80px'}}
                  />
                  <div>
                    <h3 style={{...styles.leaderName, fontSize: isMobile ? '1.25rem' : '1.5rem'}}>{leadershipMessages[currentLeader].name}</h3>
                    <p style={styles.leaderRole}>{leadershipMessages[currentLeader].role}</p>
                  </div>
                </div>
                <p style={{...styles.leaderMessage, fontSize: isMobile ? '1rem' : '1.25rem'}}>
                  {leadershipMessages[currentLeader].message}
                </p>
                <div style={styles.signature}>
                  <div style={styles.signatureLine} />
                  <p style={styles.signatureText}>{leadershipMessages[currentLeader].signature}</p>
                </div>
              </div>
              {/* Indicators */}
              <div style={styles.indicators}>
                {leadershipMessages.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...styles.indicator,
                      background: currentLeader === idx ? '#f59e0b' : 'rgba(255, 255, 255, 0.3)'
                    }}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentLeader(idx);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                  />
                ))}
              </div>
            </div>
            {!isMobile && (
              <button
                style={styles.carouselBtn}
                onClick={nextLeader}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(15, 23, 42, 0.7)'}
              >
                <ChevronRight size={24} />
              </button>
            )}
            {isMobile && (
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                <button
                  style={{...styles.carouselBtn, width: '40px', height: '40px'}}
                  onClick={prevLeader}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  style={{...styles.carouselBtn, width: '40px', height: '40px'}}
                  onClick={nextLeader}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Projects Showcase */}
        <div style={styles.projectsSection}>
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '1.75rem' : '2.5rem'}}>
              Featured Projects
            </h2>
            <div style={styles.titleUnderline} />
          </div>
          <div style={styles.projectsGrid}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                style={styles.projectCard}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.querySelector('.project-image').style.transform = 'scale(1.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.querySelector('.project-image').style.transform = 'scale(1)';
                  }
                }}
              >
                <div style={{...styles.projectImageContainer, height: isMobile ? '200px' : '250px'}}>
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.name}
                    style={styles.projectImage}
                  />
                  <div style={styles.projectStatus}>{project.status}</div>
                </div>
                <div style={styles.projectInfo}>
                  <h3 style={{...styles.projectName, fontSize: isMobile ? '1.125rem' : '1.25rem'}}>{project.name}</h3>
                  <p style={styles.projectLocation}>{project.location}</p>
                  <p style={styles.projectYear}>Completed in {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Customer Testimonials */}
        <div style={styles.testimonialsSection}>
          <div style={styles.sectionHeader}>
            <h2 style={{...styles.sectionTitle, fontSize: isMobile ? '1.75rem' : '2.5rem'}}>
              What Our Customers Say
            </h2>
            <div style={styles.titleUnderline} />
          </div>
          <div style={styles.testimonialSlider}>
            <div
              style={{
                ...styles.testimonialTrack,
                transform: `translateX(-${currentTestimonial * (isMobile ? 100 : 50)}%)`
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} style={{...styles.testimonialCard, minWidth: isMobile ? '100%' : '50%'}}>
                  <div style={styles.testimonialHeader}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      style={{...styles.testimonialAvatar, width: isMobile ? '48px' : '64px', height: isMobile ? '48px' : '64px'}}
                    />
                    <div style={styles.testimonialAuthor}>
                      <h4 style={{...styles.testimonialName, fontSize: isMobile ? '1rem' : '1.125rem'}}>{testimonial.name}</h4>
                      <p style={{...styles.testimonialLocation, fontSize: isMobile ? '0.75rem' : '0.875rem'}}>{testimonial.location}</p>
                      <div style={styles.ratingStars}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={isMobile ? 14 : 16} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p style={{...styles.testimonialText, fontSize: isMobile ? '0.875rem' : '1rem'}}>"{testimonial.text}"</p>
                  <div style={styles.testimonialProject}>
                    <Building2 size={isMobile ? 14 : 16} />
                    <span>{testimonial.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Testimonial Indicators */}
          <div style={styles.testimonialIndicators}>
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.testimonialIndicator,
                  background: currentTestimonial === idx ? '#f59e0b' : '#e5e7eb'
                }}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    background: '#fafaf9',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    WebkitFontSmoothing: 'antialiased',
  },
  heroSection: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    padding: '6rem 1.5rem 4rem 1.5rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  logoImage: {
    width: '100px',
    height: '100px',
    borderRadius: '24px',
    objectFit: 'contain',
    boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)',
  },
  logoText: {
    textAlign: 'center',
  },
  companyName: {
    fontWeight: '800',
    color: '#fff',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  tagline: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '0.5rem',
    fontWeight: '500',
  },
  statsGrid: {
    display: 'grid',
    gap: '1.5rem',
  },
  statCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  statIcon: {
    width: '56px',
    height: '56px',
    margin: '0 auto 1rem',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontWeight: '800',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
  },
  mainContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  titleUnderline: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  aboutSection: {
    marginBottom: '5rem',
  },
  aboutText: {
    color: '#475569',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto 1.5rem',
  },
  leadershipSection: {
    marginBottom: '5rem',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '900px',
    margin: '0 auto',
  },
  carouselBtn: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'rgba(15, 23, 42, 0.7)',
    border: 'none',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },
  leadershipCard: {
    position: 'relative',
    flex: 1,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    borderRadius: '24px',
    padding: '3rem',
    overflow: 'hidden',
  },
  leadershipGradient: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
  },
  leadershipContent: {
    position: 'relative',
    zIndex: 10,
  },
  quoteIcon: {
    color: 'rgba(245, 158, 11, 0.3)',
    marginBottom: '2rem',
  },
  leaderInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  leaderImage: {
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(245, 158, 11, 0.5)',
  },
  leaderName: {
    fontWeight: '700',
    color: '#fff',
    margin: 0,
  },
  leaderRole: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: '0.25rem',
  },
  leaderMessage: {
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.8',
    marginBottom: '2rem',
    fontStyle: 'italic',
  },
  signature: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  signatureLine: {
    flex: 1,
    height: '1px',
    background: 'rgba(255, 255, 255, 0.2)',
  },
  signatureText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontStyle: 'italic',
    fontSize: '1rem',
  },
  indicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  indicator: {
    width: '40px',
    height: '4px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  projectsSection: {
    marginBottom: '5rem',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    background: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  },
  projectImageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  },
  projectStatus: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  projectInfo: {
    padding: '1.5rem',
  },
  projectName: {
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: '0.5rem',
  },
  projectLocation: {
    color: '#64748b',
    marginBottom: '0.25rem',
  },
  projectYear: {
    color: '#94a3b8',
    fontSize: '0.875rem',
  },
  testimonialsSection: {
    marginBottom: '3rem',
  },
  testimonialSlider: {
    overflow: 'hidden',
    padding: '1rem 0',
  },
  testimonialTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  testimonialCard: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    margin: '0 0.5rem',
  },
  testimonialHeader: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    alignItems: 'center',
  },
  testimonialAvatar: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
  testimonialAuthor: {
    flex: 1,
  },
  testimonialName: {
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
  },
  testimonialLocation: {
    color: '#64748b',
    marginTop: '0.25rem',
  },
  ratingStars: {
    display: 'flex',
    gap: '0.25rem',
    marginTop: '0.5rem',
  },
  testimonialText: {
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  testimonialProject: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f59e0b',
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  testimonialIndicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  testimonialIndicator: {
    width: '32px',
    height: '4px',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default WhoWeAreSection;