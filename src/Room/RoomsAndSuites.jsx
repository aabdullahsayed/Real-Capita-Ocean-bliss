import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RoomsAndSuites() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filter, setFilter] = useState('all');

  const rooms = [
    {
      id: 1,
      name: "Elegant & Premium Room",
      category: "premium",
      size: "44 sqm (470 sq ft)",
      capacity: "2 Guests",
      price: "$250",
      image: "./assets/elegant-room.jpg",
      shortDesc: "Enhanced comfort with elegant furnishings and modern amenities",
      features: [
        "King-size bed or twin beds",
        "Walk-in shower & bathtub",
        "Flat-screen TV with streaming",
        "Coffee station",
        "Work desk & sitting area",
        "Premium linens & robes"
      ],
      fullDescription: "These rooms offer enhanced comfort and amenities with elegant furniture, a cozy sitting area, and a work desk. High-quality linens, plush pillows, robes, slippers, and mood lighting create a relaxing atmosphere."
    },
    {
      id: 2,
      name: "Aristocrate Room",
      category: "deluxe",
      size: "60 sqm (625 sq ft)",
      capacity: "2 Guests",
      price: "$350",
      image: "./assets/aristocrate-room.jpg",
      shortDesc: "Spacious luxury with refined elegance and scenic views",
      features: [
        "King-size bed or twin beds",
        "Private balcony with views",
        "Premium entertainment system",
        "Luxury bathroom amenities",
        "Coffee & refreshment station",
        "Elegant sitting area"
      ],
      fullDescription: "Enhanced comfort with premium linens, plush pillows, robes, and mood lighting. Features a walk-in shower, bathtub, and premium toiletries. Select rooms offer scenic views or a private balcony."
    },
    {
      id: 3,
      name: "Honeymoon Suite",
      category: "suite",
      size: "63 sqm (680 sq ft)",
      capacity: "2 Guests",
      price: "$450",
      image: "./assets/honeymoon-suite.jpg",
      shortDesc: "Perfectly designed for couples seeking romance and elegance",
      features: [
        "King-size bed with premium linens",
        "Spacious bathroom with tub",
        "Private balcony",
        "Romantic mood lighting",
        "Premium streaming services",
        "Coffee & beverage station"
      ],
      fullDescription: "Perfectly designed for couples, offering enhanced comfort, elegant design, and premium amenities. Features refined furnishings, a cozy sitting area, ambient mood lighting, and select rooms with scenic views."
    },
    {
      id: 4,
      name: "Jacuzzi Suite",
      category: "suite",
      size: "50 sqm (538 sq ft)",
      capacity: "2 Guests",
      price: "$550",
      image: "./assets/jacuzzi-suite.jpg",
      shortDesc: "Luxurious romantic retreat with private in-room Jacuzzi",
      features: [
        "Private Jacuzzi",
        "King-size bed with luxury linens",
        "Scenic balcony",
        "In-room dining service",
        "Mini juice bar",
        "Champagne on arrival"
      ],
      fullDescription: "A luxurious and romantic retreat designed for newlyweds or couples celebrating special occasions. Features soft lighting, elegant décor, private Jacuzzi, deep soaking tub, rain shower, and exclusive personalized services."
    },
    {
      id: 5,
      name: "Minister Suite",
      category: "presidential",
      size: "115 sqm (1250 sq ft)",
      capacity: "4 Guests",
      price: "$1200",
      image: "./assets/minister-suite.jpg",
      shortDesc: "The most precious ocean views with unparalleled sophistication",
      features: [
        "Panoramic ocean views",
        "Multiple living areas",
        "Dedicated butler service",
        "Whirlpool tubs & rain showers",
        "Private terrace",
        "Designer furnishings"
      ],
      fullDescription: "The most precious view of the ocean, with privacy and sophistication. Features multiple bedrooms, elegant ocean views, opulent bathrooms with spa-like amenities, dedicated butler, and high-end décor with marble floors and chandeliers."
    },
    {
      id: 6,
      name: "Presidential Suite",
      category: "presidential",
      size: "120 sqm (1300 sq ft)",
      capacity: "6 Guests",
      price: "$1500",
      image: "./assets/presidential-suite.jpg",
      shortDesc: "Ultimate luxury with private butler and gourmet kitchen",
      features: [
        "Multiple bedrooms & living areas",
        "Gourmet kitchen & juice bar",
        "Private butler & concierge",
        "Spa-like bathrooms",
        "Private terrace",
        "Designer artwork & chandeliers"
      ],
      fullDescription: "The ultimate in luxury, privacy, and sophistication. Expansive suite with multiple bedrooms, gourmet kitchen, opulent bathrooms, private terrace, dedicated butler service, and high-end décor featuring marble floors and fine artwork."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Rooms' },
    { id: 'premium', label: 'Premium' },
    { id: 'deluxe', label: 'Deluxe' },
    { id: 'suite', label: 'Suites' },
    { id: 'presidential', label: 'Presidential' }
  ];

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === filter);

  return (
    <div className="rooms-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience unparalleled luxury and comfort in our meticulously designed accommodations
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="rooms-grid">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid"
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  className="room-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="room-image">
                    <img src={room.image} alt={room.name} onError={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #1a2a3a 0%, #2d4456 100%)';
                      e.target.alt = '';
                    }} />
                    <div className="room-overlay">
                      <span className="view-details">View Details</span>
                    </div>
                    <div className="room-price">{room.price}<span>/night</span></div>
                  </div>
                  <div className="room-info">
                    <h3>{room.name}</h3>
                    <p className="room-short-desc">{room.shortDesc}</p>
                    <div className="room-specs">
                      <span className="spec">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <path d="M3 9h18"/>
                        </svg>
                        {room.size}
                      </span>
                      <span className="spec">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        {room.capacity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Room Detail Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedRoom(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              
              <div className="modal-image">
                <img src={selectedRoom.image} alt={selectedRoom.name} onError={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #1a2a3a 0%, #2d4456 100%)';
                  e.target.alt = '';
                }} />
              </div>
              
              <div className="modal-details">
                <div className="modal-header">
                  <h2>{selectedRoom.name}</h2>
                  <div className="modal-price">{selectedRoom.price}<span>/night</span></div>
                </div>
                
                <div className="modal-specs">
                  <span>{selectedRoom.size}</span>
                  <span>•</span>
                  <span>{selectedRoom.capacity}</span>
                </div>
                
                <p className="modal-description">{selectedRoom.fullDescription}</p>
                
                <div className="modal-features">
                  <h3>Room Features</h3>
                  <ul>
                    {selectedRoom.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="book-now-btn">
                  Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .rooms-page {
          min-height: 100vh;
          background-color: #fafafa;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 60vh;
          min-height: 400px;
          background: linear-gradient(135deg, #1a2a3a 0%, #2d4456 50%, #1a2a3a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 80px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('./assets/hotel-exterior.jpg') center/cover;
          opacity: 0.15;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 64px;
          font-weight: 700;
          margin: 0 0 20px 0;
          letter-spacing: 2px;
        }

        .hero-content p {
          font-size: 20px;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Filter Section */
        .filter-section {
          padding: 40px 20px;
          background: white;
          border-bottom: 1px solid #e5e5e5;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .filter-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 12px 28px;
          border: 2px solid #e5e5e5;
          background: white;
          color: #333;
          font-size: 15px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .filter-btn:hover {
          border-color: #b89b5e;
          color: #b89b5e;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: #1a2a3a;
          color: white;
          border-color: #1a2a3a;
        }

        /* Rooms Grid */
        .rooms-grid {
          padding: 60px 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .room-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .room-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .room-image {
          position: relative;
          height: 280px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a2a3a 0%, #2d4456 100%);
        }

        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .room-card:hover .room-image img {
          transform: scale(1.1);
        }

        .room-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 42, 58, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .room-card:hover .room-overlay {
          opacity: 1;
        }

        .view-details {
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px 24px;
          border: 2px solid white;
          border-radius: 4px;
        }

        .room-price {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(184, 155, 94, 0.95);
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 24px;
          font-weight: 700;
        }

        .room-price span {
          font-size: 14px;
          font-weight: 400;
        }

        .room-info {
          padding: 28px;
        }

        .room-info h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px;
          margin: 0 0 12px 0;
          color: #1a2a3a;
        }

        .room-short-desc {
          color: #666;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 20px 0;
        }

        .room-specs {
          display: flex;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid #e5e5e5;
        }

        .spec {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
        }

        .spec svg {
          color: #b89b5e;
          stroke-width: 2;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          overflow-y: auto;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: white;
          transform: rotate(90deg);
        }

        .modal-close svg {
          stroke-width: 2;
        }

        .modal-image {
          height: 400px;
          background: linear-gradient(135deg, #1a2a3a 0%, #2d4456 100%);
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-details {
          padding: 40px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .modal-header h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 36px;
          margin: 0;
          color: #1a2a3a;
          flex: 1;
        }

        .modal-price {
          font-size: 32px;
          font-weight: 700;
          color: #b89b5e;
          white-space: nowrap;
          margin-left: 20px;
        }

        .modal-price span {
          font-size: 16px;
          font-weight: 400;
          color: #666;
        }

        .modal-specs {
          display: flex;
          gap: 12px;
          color: #666;
          font-size: 16px;
          margin-bottom: 24px;
        }

        .modal-description {
          color: #555;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .modal-features h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 24px;
          color: #1a2a3a;
          margin: 0 0 20px 0;
        }

        .modal-features ul {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
        }

        .modal-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #555;
          font-size: 15px;
        }

        .modal-features li svg {
          color: #b89b5e;
          stroke-width: 2.5;
          flex-shrink: 0;
        }

        .book-now-btn {
          width: 100%;
          padding: 16px;
          background: #1a2a3a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .book-now-btn:hover {
          background: #b89b5e;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(184, 155, 94, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 42px;
          }

          .hero-content p {
            font-size: 16px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .modal-header {
            flex-direction: column;
          }

          .modal-price {
            margin: 12px 0 0 0;
          }

          .modal-features ul {
            grid-template-columns: 1fr;
          }

          .modal-details {
            padding: 30px 20px;
          }

          .modal-image {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .filter-btn {
            padding: 10px 20px;
            font-size: 14px;
          }

          .hero-section {
            height: 50vh;
          }

          .hero-content h1 {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}

export default RoomsAndSuites;