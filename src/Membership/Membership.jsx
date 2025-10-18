import React, { useState } from 'react';
import { FaBuilding, FaBed, FaChartLine, FaCrown, FaConciergeBell, FaHotel, FaShieldAlt, FaGlobeAmericas, FaPercentage, FaShoppingBag, FaHelicopter, FaPlane, FaStar } from 'react-icons/fa';

const Membership = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const memberships = [
    {
      type: 'Titanium',
      cardClass: 'titanium',
      title: 'Titanium Royalty',
      subtitle: 'Deluxe & Standard Deluxe Suite, Executive & President Suite',
      number: '1234',
      benefits: [
        { icon: <FaBuilding />, title: 'Hotel Space Ownership', desc: '15 sft + Land (Sub-Kabla): 0.00288 decimal' },
        { icon: <FaBed />, title: 'Yearly Stay Facility', desc: '3 days complimentary stay per year' },
        { icon: <FaChartLine />, title: 'Business Return', desc: '2,500 Taka per sft & above (Halal benefit)' },
        { icon: <FaCrown />, title: 'Royalties', desc: 'Automated profit share via software system' },
        { icon: <FaConciergeBell />, title: 'Premium Service', desc: 'Meet & Greet Service included' },
      ]
    },
    {
      type: 'Platinum',
      cardClass: 'platinum',
      title: 'Platinum Royalty',
      subtitle: 'Deluxe & Standard Deluxe Suite, Executive & President Suite',
      number: '5678',
      benefits: [
        { icon: <FaBuilding />, title: 'Hotel Space Ownership', desc: '15 sft + Land (Sub-Kabla): 0.00288 decimal' },
        { icon: <FaBed />, title: 'Yearly Stay Facility', desc: '3 days complimentary stay per year' },
        { icon: <FaChartLine />, title: 'Business Return', desc: '2,500 Taka per sft & above (Halal benefit)' },
        { icon: <FaCrown />, title: 'Royalties', desc: 'Automated profit share via software system' },
        { icon: <FaConciergeBell />, title: 'Premium Service', desc: 'Meet & Greet Service included' },
      ]
    },
    {
      type: 'Gold',
      cardClass: 'gold',
      title: 'Single Suite Owner',
      subtitle: 'Complete Suite Ownership Package',
      number: '9012',
      ownerType: 'OWNER',
      benefits: [
        { icon: <FaHotel />, title: 'Full Suite Ownership', desc: 'Per suite + Land (As per ratio)' },
        { icon: <FaBed />, title: 'Yearly Stay Facility', desc: '3 days complimentary stay per year' },
        { icon: <FaChartLine />, title: 'Business Return', desc: '2,500 Taka per sft & above (Halal benefit)' },
        { icon: <FaCrown />, title: 'Royalties', desc: 'Automated profit share via software system' },
        { icon: <FaPlane />, title: 'VIP Services', desc: 'Airport VIP Lounge + Meet & Greet Service' },
      ]
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .membership-section {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
          }

          .section-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .section-header h1 {
            font-size: 3rem;
            background: linear-gradient(135deg, #d4af37, #b8860b);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
            font-weight: 700;
          }

          .section-header p {
            color: #666;
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
          }

          .membership-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 40px;
            margin-bottom: 80px;
          }

          .membership-card-wrapper {
            perspective: 1500px;
          }

          .membership-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(189, 185, 165, 0.2);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          }

          .membership-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at top right, rgba(189, 185, 165, 0.15), transparent 50%);
            pointer-events: none;
          }

          .membership-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
            border-color: rgba(189, 185, 165, 0.4);
          }

          .card-container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
          }

          :root {
            --primary-titanium: linear-gradient(135deg, #434343 0%, #000000 100%);
            --primary-platinum: linear-gradient(135deg, #e5e5e5 0%, #a0a0a0 100%);
            --primary-gold: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          }

          .card {
            overflow: hidden;
            position: relative;
            animation: rotate_500 6s ease-in-out infinite;
            background-image: radial-gradient(circle at 100% 0%, hsla(0,0%,100%,0.08) 29.5%, hsla(0,0%,100%,0) 30%),
                radial-gradient(circle at 100% 0%, hsla(0,0%,100%,0.08) 39.5%, hsla(0,0%,100%,0) 40%),
                radial-gradient(circle at 100% 0%, hsla(0,0%,100%,0.08) 49.5%, hsla(0,0%,100%,0) 50%);
            border-radius: 16px;
            box-shadow: 0 0 0 hsl(0,0%,80%), 0 0 0 hsl(0,0%,100%), -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);
            color: hsl(0,0%,100%);
            width: 330px;
            height: 210px;
            transform: translate3d(0,0,0);
          }

          .card.titanium {
            background-color: #2c2c2c;
            background-image: var(--primary-titanium), 
                radial-gradient(circle at 100% 0%, hsla(0,0%,100%,0.08) 29.5%, hsla(0,0%,100%,0) 30%);
          }

          .card.platinum {
            background-color: #c0c0c0;
            background-image: var(--primary-platinum),
                radial-gradient(circle at 100% 0%, hsla(0,0%,100%,0.15) 29.5%, hsla(0,0%,100%,0) 30%);
          }

          .card.gold {
            background-color: #d4af37;
            background-image: var(--primary-gold),
                radial-gradient(circle at 100% 0%, hsla(45,100%,70%,0.2) 29.5%, hsla(0,0%,100%,0) 30%);
          }

          .card__info {
            position: absolute;
            font: 0.75em/1 "DM Sans", sans-serif;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 30px;
            inset: 0;
          }

          .card__logo {
            width: 100%;
            font-weight: bold;
            font-style: italic;
            font-size: 1.8rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .card__chip {
            background-image: linear-gradient(hsl(0,0%,70%), hsl(0,0%,80%));
            border-radius: 8px;
            box-shadow: 0 0 0 0.05rem hsla(0,0%,0%,0.5) inset;
            width: 50px;
            height: 40px;
            transform: translate3d(0,0,0);
            position: relative;
            overflow: hidden;
          }

          .card__chip-lines {
            width: 100%;
            height: auto;
          }

          .card__chip-texture {
            position: absolute;
            animation: texture 3s ease-in-out infinite;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-image: linear-gradient(-80deg, hsla(0,0%,100%,0), hsla(0,0%,100%,0.6) 48% 52%, hsla(0,0%,100%,0));
          }

          .card__type {
            align-self: flex-end;
            margin-left: auto;
            text-transform: uppercase;
            font-size: 1rem;
            letter-spacing: 2px;
            opacity: 0.9;
          }

          .card__number {
            font-size: 1.3rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
            letter-spacing: 2px;
          }

          .card__valid-thru {
            font-size: 0.5rem;
            padding-right: 10px;
            text-align: right;
            text-transform: uppercase;
            width: 50%;
            margin-bottom: 5px;
          }

          .card__exp-date {
            font-size: 1rem;
            padding-left: 10px;
            font-family: 'Courier New', monospace;
            width: 50%;
          }

          .card__name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 200px;
            font-size: 1rem;
            text-transform: uppercase;
            font-family: 'Courier New', monospace;
            letter-spacing: 1px;
          }

          .card__texture {
            position: absolute;
            animation: texture 3s ease-in-out infinite;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            background-image: linear-gradient(-80deg, hsla(0,0%,100%,0.3) 25%, hsla(0,0%,100%,0) 45%);
          }

          .membership-type {
            text-align: center;
            margin-bottom: 25px;
          }

          .membership-type h2 {
            font-size: 2rem;
            color: #d4af37;
            margin-bottom: 8px;
          }

          .membership-type p {
            color: #666;
            font-size: 0.95rem;
          }

          .benefits-section {
            margin-top: 30px;
          }

          .benefit-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 15px;
            background: rgba(248, 249, 250, 0.8);
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(189, 185, 165, 0.1);
            transition: all 0.3s ease;
          }

          .benefit-item:hover {
            background: rgba(248, 249, 250, 1);
            border-color: rgba(189, 185, 165, 0.3);
            transform: translateX(5px);
          }

          .benefit-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(184, 134, 11, 0.1));
            border: 2px solid rgba(212, 175, 55, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .benefit-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s ease;
          }

          .benefit-item:hover .benefit-icon {
            border-color: rgba(212, 175, 55, 0.6);
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(184, 134, 11, 0.15));
            transform: scale(1.1);
          }

          .benefit-item:hover .benefit-icon::before {
            left: 100%;
          }

          .benefit-content h4 {
            color: #212529;
            font-size: 1rem;
            margin-bottom: 5px;
            font-weight: 600;
          }

          .benefit-content p {
            color: #6c757d;
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .facilities-section {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 50px;
            border: 1px solid rgba(189, 185, 165, 0.3);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          }

          .facilities-section h2 {
            text-align: center;
            font-size: 2.5rem;
            background: linear-gradient(135deg, #b0a47b, #8b7e5c);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 40px;
          }

          .facilities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .facility-card {
            background: rgba(248, 249, 250, 0.8);
            padding: 25px;
            border-radius: 16px;
            border: 1px solid rgba(189, 185, 165, 0.1);
            text-align: center;
            transition: all 0.3s ease;
          }

          .facility-card:hover {
            transform: translateY(-5px);
            border-color: rgba(189, 185, 165, 0.4);
            box-shadow: 0 10px 30px rgba(189, 185, 165, 0.15);
          }

          .facility-icon {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, rgba(176, 164, 123, 0.15), rgba(139, 126, 92, 0.1));
            border: 2px solid rgba(176, 164, 123, 0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            font-size: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .facility-icon::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%);
            transform: scale(0);
            transition: transform 0.3s ease;
          }

          .facility-card:hover .facility-icon {
            border-color: rgba(176, 164, 123, 0.6);
            background: linear-gradient(135deg, rgba(176, 164, 123, 0.25), rgba(139, 126, 92, 0.15));
            transform: rotate(10deg) scale(1.1);
          }

          .facility-card:hover .facility-icon::before {
            transform: scale(1);
          }

          .facility-card h3 {
            color: #212529;
            font-size: 1.1rem;
            margin-bottom: 8px;
            font-weight: 600;
          }

          .facility-card p {
            color: #6c757d;
            font-size: 0.9rem;
          }

          .mobile-expand-btn {
            display: none;
            width: 100%;
            padding: 12px;
            margin-top: 15px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .mobile-expand-btn:active {
            transform: scale(0.98);
          }

          @keyframes rotate_500 {
            from, to {
              animation-timing-function: ease-in;
              box-shadow: 0 0 0 hsl(0,0%,80%), 0.1rem 0 0 hsl(0,0%,100%), -0.2rem 0 0.75rem 0 hsla(0,0%,0%,0.3);
              transform: rotateY(-10deg);
            }
            25%, 75% {
              animation-timing-function: ease-out;
              box-shadow: 0 0 0 hsl(0,0%,80%), 0 0 0 hsl(0,0%,100%), -0.25rem -0.05rem 1rem 0.15rem hsla(0,0%,0%,0.3);
              transform: rotateY(0deg);
            }
            50% {
              animation-timing-function: ease-in;
              box-shadow: -0.1rem 0 0 hsl(0,0%,80%), 0 0 0 hsl(0,0%,100%), -0.3rem -0.1rem 1.5rem 0.3rem hsla(0,0%,0%,0.3);
              transform: rotateY(10deg);
            }
          }

          @keyframes texture {
            from, to { transform: translate3d(0,0,0); }
            50% { transform: translate3d(-50%,0,0); }
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              max-height: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              max-height: 1000px;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .section-header h1 { 
              font-size: 2rem; 
            }
            
            .membership-grid { 
              grid-template-columns: 1fr;
              gap: 30px;
            }
            
            .facilities-grid { 
              grid-template-columns: 1fr; 
            }
            
            .card { 
              width: 100%;
              max-width: 320px;
              height: 200px;
            }
            
            .facilities-section { 
              padding: 30px 20px; 
            }

            .membership-card {
              padding: 25px;
            }

            /* Mobile-specific: Show only card initially */
            .membership-type,
            .benefits-section {
              display: none;
            }

            .membership-card.expanded .membership-type,
            .membership-card.expanded .benefits-section {
              display: block;
              animation: slideDown 0.4s ease-out;
            }

            .mobile-expand-btn {
              display: block;
            }

            .membership-card.expanded .mobile-expand-btn {
              background: linear-gradient(135deg, #f5576c, #764ba2);
            }

            .benefit-item {
              flex-direction: column;
              text-align: center;
            }

            .benefit-icon {
              margin: 0 auto;
            }
          }

          @media (min-width: 769px) {
            .mobile-expand-btn {
              display: none !important;
            }
          }
        `
      }} />
      
      <div className="membership-section">
        <div className="section-header">
          <h1>Royalty Memberships</h1>
          <p>Exclusive ownership benefits and premium privileges for our distinguished members</p>
        </div>

        <div className="membership-grid">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-card-wrapper">
              <div className={`membership-card ${expandedCard === index ? 'expanded' : ''}`}>
                <div className="card-container">
                  <div className={`card ${membership.cardClass}`}>
                    <div className="card__info">
                      <div className="card__logo">{membership.type.toUpperCase()}</div>
                      <div className="card__chip">
                        <svg className="card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100">
                          <g opacity="0.8">
                            <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                            <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2"></polyline>
                          </g>
                        </svg>
                        <div className="card__chip-texture"></div>
                      </div>
                      <div className="card__type">{membership.ownerType || 'ROYALTY'}</div>
                      <div className="card__number">
                        <span>••••</span>
                        <span>••••</span>
                        <span>••••</span>
                        <span>{membership.number}</span>
                      </div>
                      <div className="card__valid-thru">Valid<br />thru</div>
                      <div className="card__exp-date">12/30</div>
                      <div className="card__name">Member Name</div>
                      <div className="card__texture"></div>
                    </div>
                  </div>
                </div>

                <button 
                  className="mobile-expand-btn"
                  onClick={() => toggleCard(index)}
                >
                  {expandedCard === index ? '▲ Hide Details' : '▼ View Details'}
                </button>

                <div className="membership-type">
                  <h2>{membership.title}</h2>
                  <p>{membership.subtitle}</p>
                </div>

                <div className="benefits-section">
                  {membership.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="benefit-item">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <div className="benefit-content">
                        <h4>{benefit.title}</h4>
                        <p>{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="facilities-section">
          <h2>Exclusive Royalty Card Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">🏨</div>
              <h3>Hotel Ownership</h3>
              <p>Partial or full ownership rights</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🛡️</div>
              <h3>Insurance Benefits</h3>
              <p>Comprehensive coverage included</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🌍</div>
              <h3>Tourism Chain Discount</h3>
              <p>Exclusive discounts worldwide</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">💼</div>
              <h3>Hotel Discount</h3>
              <p>Special rates at partner hotels</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🛍️</div>
              <h3>Shopping Discount</h3>
              <p>Premium retail partnerships</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🚁</div>
              <h3>Helipad Access</h3>
              <p>Private helicopter services</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">✈️</div>
              <h3>Airport Transfer</h3>
              <p>Dhaka Airport to Hotel via helicopter</p>
            </div>
            <div className="facility-card">
              <div className="facility-icon">🎯</div>
              <h3>Exclusive Events</h3>
              <p>Access to VIP events and experiences</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;