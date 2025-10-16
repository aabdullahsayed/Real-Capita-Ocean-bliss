import React from 'react';
import { TrendingUp, Calendar, Gift, MapPin, Sparkles, Check } from 'lucide-react';

const ROI = () => {
  const roiData = {
    annualROI: { min: 9, max: 10.5 },
    capitalRecovery: 4,
    freeNights: 3,
    extraEarnings: { min: 30000, max: 45000 }
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Prime Beachfront',
      description: 'Closest to Kuakata\'s Marine Drive & Sea Beach',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: `${roiData.annualROI.min}%-${roiData.annualROI.max}% annual ROI guaranteed`,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Quick Recovery',
      description: `Capital recovered in ${roiData.capitalRecovery}-${roiData.capitalRecovery + 1} years`,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Gift,
      title: 'Owner Perks',
      description: `${roiData.freeNights} free nights yearly + BDT ${roiData.extraEarnings.min.toLocaleString()}-${roiData.extraEarnings.max.toLocaleString()} extras`,
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="roi-container">
      <style>
        {`
          .roi-container {
            width: 100% !important;
            min-height: 100vh;
            background: linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%);
            font-family: 'Inter', -apple-system, system-ui, sans-serif;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box;
          }
          .roi-hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 5rem 1.5rem 3rem;
            position: relative;
            overflow: hidden;
            width: 100% !important;
            margin: 0 !important;
          }
          .roi-hero-content {
            max-width: 1280px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 10;
          }
          .roi-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(245, 158, 11, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 100px;
            color: #fbbf24;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid rgba(245, 158, 11, 0.3);
            margin-bottom: 2rem;
          }
          .roi-hero-title {
            font-size: 4rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 1.5rem;
            letter-spacing: -0.02em;
            line-height: 1.1;
          }
          .roi-gold-text {
            background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .roi-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }
          .roi-main-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 4rem 1.5rem;
            width: 100% !important;
            box-sizing: border-box;
          }
          .roi-benefits-section {
            margin-bottom: 4rem;
          }
          .roi-section-header {
            text-align: center;
            margin-bottom: 3rem;
          }
          .roi-section-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #0f172a;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
          }
          .roi-section-subtitle {
            font-size: 1.125rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
          }
          .roi-benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .roi-benefit-card {
            position: relative;
            background: #fff;
            padding: 2rem;
            border-radius: 24px;
            border: 1px solid #e5e7eb;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            overflow: hidden;
          }
          .roi-benefit-gradient {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          .roi-benefit-card:hover .roi-benefit-gradient {
            opacity: 1;
          }
          .roi-benefit-icon {
            position: relative;
            z-index: 10;
            width: 64px;
            height: 64px;
            background: #f8fafc;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            color: #0f172a;
          }
          .roi-benefit-title {
            position: relative;
            z-index: 10;
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 0.75rem;
          }
          .roi-benefit-description {
            position: relative;
            z-index: 10;
            font-size: 0.95rem;
            color: #64748b;
            line-height: 1.6;
          }
          .roi-benefit-check {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            width: 32px;
            height: 32px;
            background: #10b981;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            z-index: 10;
          }
          .roi-stats-bar {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            padding: 2.5rem;
            border-radius: 24px;
            margin-bottom: 4rem;
            flex-wrap: wrap;
            gap: 2rem;
          }
          .roi-stat-item {
            text-align: center;
          }
          .roi-stat-value {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
          }
          .roi-stat-label {
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 500;
          }
          .roi-stat-divider {
            width: 1px;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
          }
          .roi-cta-section {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            border-radius: 32px;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .roi-cta-content {
            position: relative;
            z-index: 10;
          }
          .roi-cta-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          .roi-cta-text {
            font-size: 1.125rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2.5rem;
            max-width: 600px;
            margin: 0 auto 2.5rem;
          }
          .roi-cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .roi-cta-primary {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1.125rem 2.5rem;
            background: #fff;
            color: #059669;
            border: none;
            border-radius: 16px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
            width: 100%;
            max-width: 300px;
          }
          .roi-cta-primary:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 12px 28px rgba(16, 185, 129, 0.4);
          }
          .roi-cta-secondary {
            padding: 1.125rem 2.5rem;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            font-size: 1.125rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 300px;
          }
          .roi-cta-secondary:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          @media (max-width: 640px) {
            .roi-container {
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .roi-hero {
              padding: 3rem 1rem !important;
              width: 100% !important;
              margin: 0 !important;
            }
            .roi-hero-title {
              font-size: 2.5rem !important;
            }
            .roi-hero-subtitle {
              font-size: 1rem !important;
              max-width: 90% !important;
            }
            .roi-main-content {
              padding: 2rem 1rem !important;
              width: 100% !important;
              margin: 0 !important;
            }
            .roi-benefits-grid {
              grid-template-columns: 1fr !important;
            }
            .roi-stats-bar {
              flex-direction: column !important;
              gap: 1.5rem !important;
              padding: 1.5rem !important;
            }
            .roi-stat-divider {
              display: none !important;
            }
            .roi-cta-section {
              padding: 2rem 1rem !important;
            }
            .roi-cta-title {
              font-size: 1.75rem !important;
            }
            .roi-cta-text {
              font-size: 1rem !important;
            }
            .roi-cta-primary,
            .roi-cta-secondary {
              width: 100% !important;
              max-width: 300px !important;
            }
            .roi-benefit-card:hover .roi-benefit-gradient,
            .roi-cta-primary:hover,
            .roi-cta-secondary:hover {
              transform: none !important;
              box-shadow: none !important;
              background: none !important;
            }
            .roi-benefit-card:hover {
              transform: none !important;
            }
          }
        `}
      </style>
      {/* Hero Section */}
      <div className="roi-hero">
        <div className="roi-hero-content">
          <div className="roi-badge">
            <Sparkles size={16} />
            <span>Smart Investment Opportunity</span>
          </div>
          <h1 className="roi-hero-title">
            Invest in <span className="roi-gold-text">Paradise</span>
          </h1>
          <p className="roi-hero-subtitle">
            Kuakata's premier beachfront destination with guaranteed returns and luxury perks
          </p>
        </div>
      </div>

      <div className="roi-main-content">
        {/* Benefits Grid */}
        <div className="roi-benefits-section">
          <div className="roi-section-header">
            <h2 className="roi-section-title">Why RC Ocean Bliss?</h2>
            <p className="roi-section-subtitle">
              More than just an investment—a lifestyle upgrade
            </p>
          </div>

          <div className="roi-benefits-grid">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="roi-benefit-card"
              >
                <div 
                  className="roi-benefit-gradient"
                  style={{ background: `linear-gradient(135deg, ${benefit.gradient})` }}
                />
                <div className="roi-benefit-icon">
                  <benefit.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="roi-benefit-title">{benefit.title}</h3>
                <p className="roi-benefit-description">{benefit.description}</p>
                <div className="roi-benefit-check">
                  <Check size={16} strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="roi-stats-bar">
          <div className="roi-stat-item">
            <div className="roi-stat-value">{roiData.annualROI.min}-{roiData.annualROI.max}%</div>
            <div className="roi-stat-label">Annual ROI</div>
          </div>
          <div className="roi-stat-divider" />
          <div className="roi-stat-item">
            <div className="roi-stat-value">{roiData.capitalRecovery}Y</div>
            <div className="roi-stat-label">Capital Recovery</div>
          </div>
          <div className="roi-stat-divider" />
          <div className="roi-stat-item">
            <div className="roi-stat-value">{roiData.freeNights}</div>
            <div className="roi-stat-label">Free Nights/Year</div>
          </div>
          <div className="roi-stat-divider" />
          <div className="roi-stat-item">
            <div className="roi-stat-value">৳{(roiData.extraEarnings.max / 1000).toFixed(0)}K</div>
            <div className="roi-stat-label">Yearly Perks</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="roi-cta-section">
          <div className="roi-cta-content">
            <h3 className="roi-cta-title">Ready to Secure Your Future?</h3>
            <p className="roi-cta-text">
              Join hundreds of smart investors building wealth by the sea
            </p>
            <div className="roi-cta-buttons">
              <button className="roi-cta-primary">
                Start Investing Today
                <TrendingUp size={20} strokeWidth={2} />
              </button>
              <button className="roi-cta-secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROI;