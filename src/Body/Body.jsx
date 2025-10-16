import React from "react";
import styles from "./Body.module.css";
import { FaBed, FaUtensils, FaSpa, FaUmbrellaBeach, FaGlassCheers, FaHotel } from "react-icons/fa";

const Body = () => {
  const sections = [
    {
      icon: <FaHotel />,
      title: "Luxurious Stay",
      description: "Experience comfort and elegance in every corner. Our rooms are crafted for serenity, overlooking the Kuakata horizon.",
    },
    {
      icon: <FaUtensils />,
      title: "Fine Dining",
      description: "Indulge in world-class cuisine prepared by expert chefs, offering both local flavors and international delights.",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Beachfront Serenity",
      description: "Wake up to golden sunrises and unwind with soothing sunsets — all from the shores of the Bay of Bengal.",
    },
    {
      icon: <FaSpa />,
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind with our curated wellness experiences, spa therapies, and meditation sessions.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Celebration & Events",
      description: "From romantic dinners to grand weddings — celebrate life’s best moments in timeless style and comfort.",
    },
    {
      icon: <FaBed />,
      title: "Modern Comfort",
      description: "Equipped with smart amenities, infinity pools, and premium facilities to make every stay unforgettable.",
    },
  ];

  return (
    <section className={styles.bodySection}>
      <div className={styles.intro}>
        <h2 className={styles.title}>Your Journey Begins Here</h2>
        <p className={styles.subtitle}>
          Discover a destination where nature meets luxury — and every detail is designed to inspire peace, comfort, and timeless elegance.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {sections.map((sec, index) => (
          <div
            className={`${styles.card} ${styles[`delay${index}`]}`}
            key={index}
          >
            <div className={styles.icon}>{sec.icon}</div>
            <h3>{sec.title}</h3>
            <p>{sec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
