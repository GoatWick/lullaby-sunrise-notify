
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  animationDelay: string;
}

const StarBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    const numberOfStars = 50;
    const newStars: Star[] = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      });
    }
    
    setStars(newStars);
  }, []);
  
  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
