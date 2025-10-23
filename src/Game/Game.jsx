import React, { useState, useEffect } from "react";
import { FaTrophy, FaStar, FaUmbrellaBeach, FaCocktail, FaShip, FaSun, FaMoon, FaHeart, FaGem } from "react-icons/fa";

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const beachItems = [
    { icon: <FaUmbrellaBeach />, name: "Beach", color: "#667eea" },
    { icon: <FaCocktail />, name: "Cocktail", color: "#f093fb" },
    { icon: <FaShip />, name: "Ship", color: "#4facfe" },
    { icon: <FaSun />, name: "Sun", color: "#fee140" },
    { icon: <FaMoon />, name: "Moon", color: "#764ba2" },
    { icon: <FaHeart />, name: "Love", color: "#f5576c" },
    { icon: <FaGem />, name: "Gem", color: "#43e97b" },
    { icon: <FaStar />, name: "Star", color: "#fa709a" },
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isPlaying) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isPlaying]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      checkMatch();
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0 && isPlaying) {
      winGame();
    }
  }, [matchedCards]);

  const initializeGame = () => {
    const gameCards = [...beachItems, ...beachItems]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        ...item,
        id: index,
        isFlipped: false,
      }));
    setCards(gameCards);
  };

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(30);
    setMatchedCards([]);
    setFlippedCards([]);
    initializeGame();
  };

  const handleCardClick = (cardId) => {
    if (!isPlaying || flippedCards.length >= 2 || matchedCards.includes(cardId)) return;
    
    if (!flippedCards.includes(cardId)) {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  const checkMatch = () => {
    const [firstId, secondId] = flippedCards;
    const firstCard = cards.find(c => c.id === firstId);
    const secondCard = cards.find(c => c.id === secondId);

    if (firstCard.name === secondCard.name) {
      setMatchedCards([...matchedCards, firstId, secondId]);
      setScore(score + 100);
      setFlippedCards([]);
    } else {
      setTimeout(() => {
        setFlippedCards([]);
        setScore(Math.max(0, score - 10));
      }, 800);
    }
  };

  const winGame = () => {
    const bonus = timeLeft * 10;
    const finalScore = score + bonus;
    setScore(finalScore);
    if (finalScore > highScore) {
      setHighScore(finalScore);
    }
    setShowConfetti(true);
    setTimeout(() => {
      setIsPlaying(false);
      setShowConfetti(false);
    }, 3000);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
  };

  return (
    <section style={styles.gameSection}>
      {/* Animated Background */}
      <div style={styles.animatedBg}>
        <div style={styles.wave1}></div>
        <div style={styles.wave2}></div>
        <div style={styles.wave3}></div>
      </div>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            <FaTrophy style={styles.trophyIcon} />
            Ocean Memory Challenge
          </h2>
          <p style={styles.subtitle}>
            Match the beach paradise icons and boost your score! Test your memory while exploring Ocean Bliss amenities.
          </p>
        </div>

        {/* Stats Bar */}
        <div style={styles.statsBar}>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>Score</span>
            <span style={styles.statValue}>{score}</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>Time</span>
            <span style={{
              ...styles.statValue,
              color: timeLeft < 10 ? '#f5576c' : '#43e97b'
            }}>{timeLeft}s</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>High Score</span>
            <span style={styles.statValue}>{highScore}</span>
          </div>
        </div>

        {/* Game Board */}
        <div style={styles.gameBoard}>
          {!isPlaying && matchedCards.length === 0 ? (
            <div style={styles.startScreen}>
              <div style={styles.startIcon}>🏖️</div>
              <h3 style={styles.startTitle}>Ready for the Challenge?</h3>
              <p style={styles.startText}>
                Flip cards to find matching pairs of Ocean Bliss amenities. Complete all matches before time runs out!
              </p>
              <button style={styles.startButton} onClick={startGame}>
                <span>Start Game</span>
                <FaStar style={styles.buttonIcon} />
              </button>
            </div>
          ) : (
            <div style={styles.cardGrid}>
              {cards.map((card) => {
                const isFlipped = flippedCards.includes(card.id) || matchedCards.includes(card.id);
                const isMatched = matchedCards.includes(card.id);
                
                return (
                  <div
                    key={card.id}
                    style={{
                      ...styles.card,
                      ...(isFlipped ? styles.cardFlipped : {}),
                      ...(isMatched ? styles.cardMatched : {}),
                    }}
                    onClick={() => handleCardClick(card.id)}
                  >
                    <div style={styles.cardInner}>
                      {/* Card Back */}
                      <div style={{
                        ...styles.cardFace,
                        ...styles.cardBack,
                        opacity: isFlipped ? 0 : 1,
                      }}>
                        <div style={styles.cardPattern}>🌊</div>
                      </div>
                      
                      {/* Card Front */}
                      <div style={{
                        ...styles.cardFace,
                        ...styles.cardFront,
                        opacity: isFlipped ? 1 : 0,
                        background: card.color,
                      }}>
                        <div style={styles.cardIcon}>
                          {card.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Game Over / Win Screen */}
          {!isPlaying && matchedCards.length > 0 && (
            <div style={styles.endScreen}>
              <div style={styles.endContent}>
                {matchedCards.length === cards.length ? (
                  <>
                    <div style={styles.winIcon}>🎉</div>
                    <h3 style={styles.endTitle}>Congratulations!</h3>
                    <p style={styles.endText}>
                      You've mastered the Ocean Bliss Memory Challenge!
                    </p>
                    <div style={styles.finalScore}>
                      Final Score: <span style={styles.scoreHighlight}>{score}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={styles.endIcon}>⏰</div>
                    <h3 style={styles.endTitle}>Time's Up!</h3>
                    <p style={styles.endText}>
                      Great effort! Try again to beat your high score.
                    </p>
                    <div style={styles.finalScore}>
                      Score: <span style={styles.scoreHighlight}>{score}</span>
                    </div>
                  </>
                )}
                <button style={styles.playAgainButton} onClick={startGame}>
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div style={styles.confettiContainer}>
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                style={{
                  ...styles.confetti,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  background: beachItems[i % beachItems.length].color,
                }}
              />
            ))}
          </div>
        )}

     
      </div>
    </section>
  );
};

const styles = {
  gameSection: {
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #e9ecef 0%, #f8f9fa 100%)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  animatedBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    pointerEvents: 'none',
  },
  wave1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '200%',
    height: '100px',
    background: 'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent)',
    animation: 'wave 15s linear infinite',
  },
  wave2: {
    position: 'absolute',
    bottom: '20px',
    left: 0,
    width: '200%',
    height: '80px',
    background: 'linear-gradient(90deg, transparent, rgba(118, 75, 162, 0.1), transparent)',
    animation: 'wave 20s linear infinite',
  },
  wave3: {
    position: 'absolute',
    bottom: '40px',
    left: 0,
    width: '200%',
    height: '60px',
    background: 'linear-gradient(90deg, transparent, rgba(67, 233, 123, 0.1), transparent)',
    animation: 'wave 25s linear infinite',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  },
  trophyIcon: {
    color: '#ffd700',
    filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.4))',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#6c757d',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  statsBar: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  statCard: {
    background: 'white',
    padding: '20px 30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '120px',
    transition: 'transform 0.3s ease',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#6c757d',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  gameBoard: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  startScreen: {
    textAlign: 'center',
    maxWidth: '500px',
  },
  startIcon: {
    fontSize: '5rem',
    marginBottom: '20px',
    animation: 'bounce 2s ease-in-out infinite',
  },
  startTitle: {
    fontSize: '2rem',
    color: '#212529',
    marginBottom: '15px',
    fontWeight: '700',
  },
  startText: {
    fontSize: '1.1rem',
    color: '#6c757d',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  startButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
  },
  buttonIcon: {
    fontSize: '1.2rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '15px',
    width: '100%',
    maxWidth: '700px',
  },
  card: {
    aspectRatio: '1',
    cursor: 'pointer',
    perspective: '1000px',
    transition: 'transform 0.3s ease',
  },
  cardFlipped: {
    transform: 'scale(1.05)',
  },
  cardMatched: {
    opacity: 0.7,
    pointerEvents: 'none',
  },
  cardInner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    transition: 'opacity 0.3s ease',
  },
  cardBack: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  },
  cardFront: {
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  cardPattern: {
    fontSize: '2rem',
    opacity: 0.3,
  },
  cardIcon: {
    fontSize: '3rem',
    color: 'white',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
  },
  endScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 0.5s ease',
  },
  endContent: {
    textAlign: 'center',
    maxWidth: '400px',
  },
  winIcon: {
    fontSize: '5rem',
    marginBottom: '20px',
    animation: 'bounce 1s ease-in-out infinite',
  },
  endIcon: {
    fontSize: '5rem',
    marginBottom: '20px',
  },
  endTitle: {
    fontSize: '2rem',
    color: '#212529',
    marginBottom: '15px',
    fontWeight: '700',
  },
  endText: {
    fontSize: '1.1rem',
    color: '#6c757d',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  finalScore: {
    fontSize: '1.3rem',
    color: '#212529',
    marginBottom: '30px',
    fontWeight: '600',
  },
  scoreHighlight: {
    fontSize: '2rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  playAgainButton: {
    background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 35px',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(67, 233, 123, 0.4)',
    transition: 'all 0.3s ease',
  },
  confettiContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1000,
  },
  confetti: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    top: '-10px',
    borderRadius: '50%',
    animation: 'confettiFall 3s linear forwards',
  },
  
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes wave {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }

  li {
    padding: 10px 0;
    color: #6c757d;
    font-size: 1rem;
    line-height: 1.6;
    position: relative;
    padding-left: 30px;
  }



  @media (hover: hover) {
    .statCard:hover {
      transform: translateY(-5px);
    }

    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
    }

    .card:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    .cardGrid {
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 10px !important;
    }
    
    .gameBoard {
      padding: 20px !important;
    }
  }
`;

if (!document.head.querySelector('style[data-game-animations]')) {
  styleSheet.setAttribute('data-game-animations', 'true');
  document.head.appendChild(styleSheet);
}

export default Game;