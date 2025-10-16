import React from 'react';

const Membership = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `


          /* Membership Section */
          .membership-section {
            max-width: 1400px;
            margin: 0 auto;
          }

          /* Section Header */
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
            color: #d1d5db;
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
          }

          /* Membership Grid */
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
            background: rgba(30, 30, 30, 0.9);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 40px;
            border: 1px solid rgba(189, 185, 165, 0.2);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
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
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
            border-color: rgba(189, 185, 165, 0.4);
          }

          .card-container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
          }

          /* Credit Card Styles */
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
            color: #b0b8c1;
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
            background: rgba(30, 30, 30, 0.6);
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(189, 185, 165, 0.1);
            transition: all 0.3s ease;
          }

          .benefit-item:hover {
            background: rgba(30, 30, 30, 0.8);
            border-color: rgba(189, 185, 165, 0.3);
            transform: translateX(5px);
          }

          .benefit-icon {
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #d4af37, #b8860b);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-weight: bold;
            color: #1a1a1a;
          }

          .benefit-content h4 {
            color: #f1f5f9;
            font-size: 1rem;
            margin-bottom: 5px;
          }

          .benefit-content p {
            color: #b0b8c1;
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .facilities-section {
            background: rgba(30, 30, 30, 0.7);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 50px;
            border: 1px solid rgba(189, 185, 165, 0.3);
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
            background: rgba(40, 40, 40, 0.6);
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
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #b0a47b, #8b7e5c);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            font-size: 1.8rem;
          }

          .facility-card h3 {
            color: #f1f5f9;
            font-size: 1.1rem;
            margin-bottom: 8px;
          }

          .facility-card p {
            color: #b0b8c1;
            font-size: 0.9rem;
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

          @media (max-width: 768px) {
            .section-header h1 { font-size: 2rem; }
            .membership-grid { grid-template-columns: 1fr; }
            .facilities-grid { grid-template-columns: 1fr; }
            .card { width: 280px; height: 180px; }
            .facilities-section { padding: 30px 20px; }
          }
        `
      }} />
      <div className="membership-section">
        {/* Section Header */}
        <div className="section-header">
          <h1>Royalty Memberships</h1>
          <p>Exclusive ownership benefits and premium privileges for our distinguished members</p>
        </div>

        {/* Membership Cards Grid */}
        <div className="membership-grid">
          {/* Titanium Royalty */}
          <div className="membership-card-wrapper">
            <div className="membership-card">
              <div className="card-container">
                <div className="card titanium">
                  <div className="card__info">
                    <div className="card__logo">TITANIUM</div>
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
                    <div className="card__type">ROYALTY</div>
                    <div className="card__number">
                      <span>••••</span>
                      <span>••••</span>
                      <span>••••</span>
                      <span>1234</span>
                    </div>
                    <div className="card__valid-thru">Valid<br />thru</div>
                    <div className="card__exp-date">12/30</div>
                    <div className="card__name">Member Name</div>
                    <div className="card__texture"></div>
                  </div>
                </div>
              </div>

              <div className="membership-type">
                <h2>Titanium Royalty</h2>
                <p>Deluxe & Standard Deluxe Suite, Executive & President Suite</p>
              </div>

              <div className="benefits-section">
                <div className="benefit-item">
                  <div className="benefit-icon">🏢</div>
                  <div className="benefit-content">
                    <h4>Hotel Space Ownership</h4>
                    <p>15 sft + Land (Sub-Kabla): 0.00288 decimal</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛏️</div>
                  <div className="benefit-content">
                    <h4>Yearly Stay Facility</h4>
                    <p>3 days complimentary stay per year</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h4>Business Return</h4>
                    <p>2,500 Taka per sft & above (Halal benefit)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👑</div>
                  <div className="benefit-content">
                    <h4>Royalties</h4>
                    <p>Automated profit share via software system</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✈️</div>
                  <div className="benefit-content">
                    <h4>Premium Service</h4>
                    <p>Meet & Greet Service included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Platinum Royalty */}
          <div className="membership-card-wrapper">
            <div className="membership-card">
              <div className="card-container">
                <div className="card platinum">
                  <div className="card__info">
                    <div className="card__logo">PLATINUM</div>
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
                    <div className="card__type">ROYALTY</div>
                    <div className="card__number">
                      <span>••••</span>
                      <span>••••</span>
                      <span>••••</span>
                      <span>5678</span>
                    </div>
                    <div className="card__valid-thru">Valid<br />thru</div>
                    <div className="card__exp-date">12/30</div>
                    <div className="card__name">Member Name</div>
                    <div className="card__texture"></div>
                  </div>
                </div>
              </div>

              <div className="membership-type">
                <h2>Platinum Royalty</h2>
                <p>Deluxe & Standard Deluxe Suite, Executive & President Suite</p>
              </div>

              <div className="benefits-section">
                <div className="benefit-item">
                  <div className="benefit-icon">🏢</div>
                  <div className="benefit-content">
                    <h4>Hotel Space Ownership</h4>
                    <p>15 sft + Land (Sub-Kabla): 0.00288 decimal</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛏️</div>
                  <div className="benefit-content">
                    <h4>Yearly Stay Facility</h4>
                    <p>3 days complimentary stay per year</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h4>Business Return</h4>
                    <p>2,500 Taka per sft & above (Halal benefit)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👑</div>
                  <div className="benefit-content">
                    <h4>Royalties</h4>
                    <p>Automated profit share via software system</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✈️</div>
                  <div className="benefit-content">
                    <h4>Premium Service</h4>
                    <p>Meet & Greet Service included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Suite Owner */}
          <div className="membership-card-wrapper">
            <div className="membership-card">
              <div className="card-container">
                <div className="card gold">
                  <div className="card__info">
                    <div className="card__logo">GOLD</div>
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
                    <div className="card__type">OWNER</div>
                    <div className="card__number">
                      <span>••••</span>
                      <span>••••</span>
                      <span>••••</span>
                      <span>9012</span>
                    </div>
                    <div className="card__valid-thru">Valid<br />thru</div>
                    <div className="card__exp-date">12/30</div>
                    <div className="card__name">Ishtiak Al Mamoon</div>
                    <div className="card__texture"></div>
                  </div>
                </div>
              </div>

              <div className="membership-type">
                <h2>Single Suite Owner</h2>
                <p>Complete Suite Ownership Package</p>
              </div>

              <div className="benefits-section">
                <div className="benefit-item">
                  <div className="benefit-icon">🏨</div>
                  <div className="benefit-content">
                    <h4>Full Suite Ownership</h4>
                    <p>Per suite + Land (As per ratio)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🛏️</div>
                  <div className="benefit-content">
                    <h4>Yearly Stay Facility</h4>
                    <p>3 days complimentary stay per year</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-content">
                    <h4>Business Return</h4>
                    <p>2,500 Taka per sft & above (Halal benefit)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">👑</div>
                  <div className="benefit-content">
                    <h4>Royalties</h4>
                    <p>Automated profit share via software system</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✈️</div>
                  <div className="benefit-content">
                    <h4>VIP Services</h4>
                    <p>Airport VIP Lounge + Meet & Greet Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Royalty Card Facilities */}
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