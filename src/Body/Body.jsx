

import sg from '../assets/spa-gym.jpg'
import res from '../assets/restaurent.jpg'
import ssb from '../assets/saloon-sauna-barbar.jpg';
import sp from '../assets/swimming-pool.jpg';
import jb from '../assets/juice-bar.jpg';
import pc from '../assets/party-center.jpg';

import React, { useState, useEffect } from "react";
import { FaBed, FaUtensils, FaSpa, FaSwimmingPool, FaGlassCheers, FaHotel, FaDumbbell, FaCocktail, FaTimes } from "react-icons/fa";

const Body = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setPopupImage(null);
      }
    };
    
    if (popupImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [popupImage]);

  const sections = [
    {
      icon: <FaDumbbell />,
      title: "Spa & Gym",
      description: "State-of-the-art fitness center with premium equipment and rejuvenating spa treatments for complete wellness.",
      image: sg,
      objectFit: "contain",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining Restaurant",
      description: "Indulge in world-class cuisine prepared by expert chefs, offering both local flavors and international delights.",
      image: res,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <FaSpa />,
      title: "Salon, Sauna & Barber",
      description: "Premium grooming and relaxation services with professional stylists and therapeutic sauna experiences.",
      image: ssb,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <FaSwimmingPool />,
      title: "Swimming Pool",
      description: "Luxurious infinity pool with breathtaking ocean views, perfect for relaxation and recreation.",
      image: sp,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <FaCocktail />,
      title: "Juice Bar",
      description: "Fresh tropical juices, smoothies, and healthy refreshments to keep you energized throughout the day.",
      image: jb,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: <FaGlassCheers />,
      title: "Party Center",
      description: "Elegant event spaces perfect for celebrations, weddings, and corporate gatherings with stunning ambiance.",
      image: pc,
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const handleImageClick = (image, e) => {
    e.stopPropagation();
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section style={styles.bodySection}>
      <div style={{
        ...styles.intro,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease-out'
      }}>
        <h2 style={styles.title}>Your Journey Begins Here</h2>
        <p style={styles.subtitle}>
          Discover a destination where nature meets luxury — and every detail is designed to inspire peace, comfort, and timeless elegance.
        </p>
      </div>

      <div style={styles.cardGrid}>
        {sections.map((sec, index) => (
          <div
            style={{
              ...styles.card,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
              transition: `all 0.6s ease-out ${index * 0.1}s`,
              ...(activeCard === index ? styles.cardActive : {})
            }}
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div 
              style={{
                ...styles.imageContainer,
                backgroundImage: `url(${sec.image})`,
                cursor: 'zoom-in',
              }}
              onClick={(e) => handleImageClick(sec.image, e)}
            >
              <div style={{
                ...styles.overlay,
                background: sec.gradient,
              }} />
              <div style={styles.iconWrapper}>
                <div style={styles.icon}>{sec.icon}</div>
              </div>
            </div>
            
            <div style={styles.content}>
              <h3 style={styles.cardTitle}>{sec.title}</h3>
              <p style={styles.cardDescription}>{sec.description}</p>
              <button style={styles.exploreBtn}>
                <span>Explore More</span>
                <span style={styles.arrow}>→</span>
              </button>
            </div>

            {/* Decorative elements */}
            <div style={{
              ...styles.decorativeCircle,
              opacity: activeCard === index ? 1 : 0,
            }} />
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {popupImage && (
        <div 
          style={styles.popupOverlay}
          onClick={closePopup}
        >
          <button 
            style={styles.closeButton}
            onClick={closePopup}
            aria-label="Close popup"
          >
            <FaTimes />
          </button>
          <div 
            style={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={popupImage} 
              alt="Full size view" 
              style={styles.popupImage}
            />
          </div>
        </div>
      )}

      {/* Floating decoration */}
      <div style={styles.floatingDecor}>
        <div style={styles.blob1} />
        <div style={styles.blob2} />
      </div>
    </section>
  );
};

const styles = {
  bodySection: {
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  intro: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px',
    padding: '0 20px',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#6c757d',
    lineHeight: '1.8',
    fontWeight: '400',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  card: {
    background: 'white',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  cardActive: {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
  imageContainer: {
    width: '100%',
    height: '280px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    transition: 'opacity 0.4s ease',
    mixBlendMode: 'multiply',
  },
  iconWrapper: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 2,
  },
  icon: {
    fontSize: '2.5rem',
    color: 'white',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
  },
  content: {
    padding: '30px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#212529',
    marginBottom: '12px',
    transition: 'color 0.3s ease',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  exploreBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '12px 28px',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
  },
  arrow: {
    transition: 'transform 0.3s ease',
    display: 'inline-block',
  },
  decorativeCircle: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
    top: '-100px',
    left: '-100px',
    transition: 'opacity 0.5s ease',
    pointerEvents: 'none',
  },
  floatingDecor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    zIndex: 0,
  },
  blob1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    top: '10%',
    right: '-200px',
    animation: 'float 20s ease-in-out infinite',
  },
  blob2: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    background: 'radial-gradient(circle, rgba(118, 75, 162, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    bottom: '5%',
    left: '-250px',
    animation: 'float 25s ease-in-out infinite reverse',
  },
  // Popup styles
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px',
    animation: 'fadeIn 0.3s ease',
    backdropFilter: 'blur(5px)',
  },
  popupContent: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
    animation: 'zoomIn 0.3s ease',
  },
  popupImage: {
    width: '100%',
    height: '100%',
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 10000,
  },
};



// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -50px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .cardGrid {
      grid-template-columns: 1fr !important;
    }
  }

  @media (hover: hover) {
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
    
    button:hover span:last-child {
      transform: translateX(4px);
    }
  }
`;

if (!document.head.querySelector('style[data-body-animations]')) {
  styleSheet.setAttribute('data-body-animations', 'true');
  document.head.appendChild(styleSheet);
}

export default Body;
