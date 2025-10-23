import React, { useState, useEffect } from 'react';

const FloatingBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500); // Delay for initial animation
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        maxWidth: '320px',
        fontFamily: "'Roboto', sans-serif",
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.6s ease-out forwards',
      }}
    >
      <button
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'none',
          border: 'none',
          fontSize: '18px',
          cursor: 'pointer',
          color: '#666',
          transition: 'color 0.3s ease',
        }}
        onClick={() => setIsVisible(false)}
        onMouseEnter={(e) => (e.target.style.color = '#333')}
        onMouseLeave={(e) => (e.target.style.color = '#666')}
      >
        ×
      </button>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', color: '#222', fontWeight: 500 }}>
        Unlock Exclusive Benefits!
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
        {[
          { icon: 'fas fa-building', title: 'Hotel Space Ownership' },
          { icon: 'fas fa-bed', title: 'Yearly Stay Facility' },
          { icon: 'fas fa-money-bill-wave', title: 'Business Return' },
          { icon: 'fas fa-crown', title: 'Royalties' },
          { icon: 'fas fa-handshake', title: 'Premium Service' },
        ].map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              opacity: 0,
              transform: 'translateX(-10px)',
              animation: `slideIn 0.4s ease-out forwards ${0.2 + index * 0.1}s`,
            }}
          >
            <i className={item.icon} style={{ marginRight: '12px', color: '#4a90e2', fontSize: '18px' }}></i>
            <span style={{ color: '#444', fontSize: '15px' }}>{item.title}</span>
          </li>
        ))}
      </ul>
      <button
        style={{
          background: 'linear-gradient(135deg, #4a90e2, #357abd)',
          color: '#ffffff',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '15px',
          width: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 4px 12px rgba(74, 144, 226, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Learn More
      </button>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingBenefits;