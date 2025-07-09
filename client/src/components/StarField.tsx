import { useEffect, useRef } from 'react';

const StarField = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;

    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      starsContainer.appendChild(star);
    }

    return () => {
      if (starsContainer) {
        starsContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={starsRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default StarField;
