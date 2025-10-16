import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const headerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "rooms", label: "Rooms & Suites" },
    { id: "features", label: "Features" },
    { id: "investment", label: "Investment", href: "Membership.html" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      className={`header ${scrolled ? "scrolled" : ""}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle animated glow effect */}
      <motion.div
        className="header-glow"
        style={{
          x: useTransform(x, (val) => val * 0.03),
          y: useTransform(y, (val) => val * 0.03),
        }}
      />

      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: menuOpen ? 0 : 1, 
          x: menuOpen ? -20 : 0,
          pointerEvents: menuOpen ? "none" : "auto"
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: menuOpen ? 1 : 1.02 }}
      >
        <motion.span
          className="logo-wave"
          animate={{
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          
        </motion.span>
        RC Ocean Bliss
      </motion.div>

      <nav>
        {/* Overlay for mobile menu */}
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          />
        )}

        <motion.ul
          className={`navList ${menuOpen ? "active" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
            >
              <motion.a
                href={item.href || `#${item.id}`}
                onClick={() => setActiveLink(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
                {activeLink === item.id && (
                  <motion.span
                    className="active-indicator"
                    layoutId="activeLink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            </motion.li>
          ))}
          
          {/* Mobile CTA inside menu */}
          <li className="mobileCta">
            <motion.a
              href="#book"
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </li>
        </motion.ul>

        <motion.a
          href="#book"
          className="ctaButton desktopCta"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 6px 20px rgba(184, 155, 94, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Book Now</span>
          <motion.div
            className="cta-shine"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.a>

        <motion.div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </nav>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          background-color: rgba(255, 250, 240, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          z-index: 1000;
          transition: background-color 0.3s ease;
          box-sizing: border-box;
        }

        .header:hover {
          background-color: rgba(255, 250, 240, 1);
        }

        .header-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(184, 155, 94, 0.08) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .logo {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: 28px;
          font-weight: 700;
          color: #1a2a3a;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          position: relative;
          z-index: 1;
        }

        .logo-wave {
          display: inline-block;
          font-size: 32px;
          line-height: 1;
        }

        nav {
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        .navList {
          list-style: none;
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 30px;
        }

        .navList li {
          position: relative;
        }

        .navList li a {
          font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          text-decoration: none;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.3s ease;
          background-image: linear-gradient(to right, #b89b5e 0%, #b89b5e 100%);
          background-size: 0% 2px;
          background-repeat: no-repeat;
          background-position: left bottom;
          position: relative;
          display: block;
        }

        .navList li a:hover {
          color: #b89b5e;
          background-size: 100% 2px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #b89b5e;
          border-radius: 1px;
        }

        .ctaButton {
          font-family: 'Lato', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          background-color: #1a2a3a;
          color: #fff;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .ctaButton:hover {
          background-color: #b89b5e;
        }

        .cta-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 30%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.25),
            transparent
          );
          transform: skewX(-20deg);
          pointer-events: none;
        }

        .desktopCta {
          margin-left: 20px;
          flex-shrink: 0;
          position: relative;
          z-index: 1100;
        }

        .mobileCta {
          display: none;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 1200;
          background: none;
          border: none;
          padding: 8px;
        }

        .hamburger span {
          height: 2px;
          width: 28px;
          background: #1a2a3a;
          margin: 5px 0;
          transition: all 0.3s ease;
          display: block;
        }

                  @media (max-width: 768px) {
          .header {
            padding: 0 20px;
          }

          .desktopCta {
            display: none;
          }

          .navList {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: rgba(255, 250, 240, 0.98);
            padding: 6rem 2rem 2rem;
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
            margin: 0;
            gap: 0;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            overflow-y: auto;
          }

          .navList.active {
            right: 0;
          }

          .navList li {
            margin: 10px 0;
            text-align: left;
            width: 100%;
          }

          .navList li a {
            display: block;
            padding: 12px 16px;
            font-size: 1.1rem;
          }

          .mobileCta {
            display: block;
            margin-top: 10px;
          }

          .mobileCta a {
            display: inline-block;
            background-color: #1a2a3a;
            color: #fff !important;
            padding: 12px 24px;
            border-radius: 4px;
            font-weight: 700;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }

          .mobileCta a:hover {
            background-color: #b89b5e;
          }

          .hamburger {
            display: flex;
            margin-left: auto;
          }
        }
      `}</style>
    </motion.header>
  );
}

export default Header;