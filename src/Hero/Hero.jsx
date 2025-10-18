import hero2 from '../assets/hero2.jpg'
import hero1 from '../assets/hero1.jpg'
import hero3 from '../assets/rec2.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5@0.5x.jpg'

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    type: "image",
    src: hero3,
    title: "Welcome to RC Ocean Bliss",
    subtitle: "Experience serenity and luxury on the stunning Kuakata Sea Beach.",
    buttonText: "Book Now",
  },
  {
    type: "image",
    src: hero4,
    title: "Luxury Rooms & Suites",
    subtitle: "Comfort and elegance with breathtaking views.",
    buttonText: "Explore Rooms",
  },
  {
    type: "image",
    src: hero5,
    title: "Exclusive Beachside Features",
    subtitle: "Indulge in fine dining, spa, and adventure.",
    buttonText: "Discover More",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slide = slides[current];
  const isVideo = slide.type === "video";

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.2,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, 0.05, 0.01, 0.9],
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section 
      className="hero"
      ref={heroRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {isVideo ? (
          <motion.video
            key={`video-${current}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="media"
            src={slide.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ scale, opacity }}
          />
        ) : (
          <motion.div
            key={`image-${current}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="media image"
            style={{ 
              backgroundImage: `url(${slide.src})`,
              scale,
              opacity
            }}
          />
        )}
      </AnimatePresence>

      {/* Gradient Overlay with Animation */}
      <motion.div 
        className="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Particles Effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0 
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current}`}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="content"
        >
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {slide.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                style={{ display: 'inline-block', marginRight: '0.3em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {slide.subtitle}
          </motion.p>
          
          <motion.a
            href="#book"
            className="cta-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(184, 155, 94, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{slide.buttonText}</span>
            <motion.span
              className="arrow"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <motion.div 
        className="dots"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${current === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="dot-fill"
              initial={false}
              animate={{
                width: current === index ? '100%' : '0%',
              }}
              transition={{ duration: current === index ? 6 : 0.3 }}
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <span>Scroll to explore</span>
        <motion.div className="scroll-line" />
      </motion.div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #1a2a3a;
        }

        .media {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image {
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(26, 42, 58, 0.7) 0%,
            rgba(26, 42, 58, 0.4) 50%,
            rgba(184, 155, 94, 0.3) 100%
          );
          z-index: 1;
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 1.5rem;
          line-height: 1.2;
          text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.5);
          letter-spacing: 1px;
        }

        .subtitle {
          font-family: 'Lato', sans-serif;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 2.5rem;
          max-width: 700px;
          line-height: 1.6;
          text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #b89b5e 0%, #a08548 100%);
          color: #fff;
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          border-radius: 50px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 30px rgba(184, 155, 94, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .arrow {
          font-size: 1.3rem;
          font-weight: 400;
        }

        .dots {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 4;
        }

        .dot {
          width: 50px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .dot.active {
          background: rgba(255, 255, 255, 0.4);
        }

        .dot-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: #b89b5e;
          border-radius: 2px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          right: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          z-index: 4;
          letter-spacing: 1px;
        }

        .scroll-line {
          width: 2px;
          height: 40px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.8),
            transparent
          );
          border-radius: 1px;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2.5rem;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .cta-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }

          .dots {
            bottom: 2rem;
          }

          .dot {
            width: 40px;
          }

          .scroll-indicator {
            right: 2rem;
            bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
