import { useEffect, useState } from 'react';

const StickyComponent = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1); // Adjust scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="sticky" className={isSticky ? 'stick' : ''}>
      
    </div>
  );
};

export default StickyComponent;
