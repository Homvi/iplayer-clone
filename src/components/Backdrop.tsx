import { useEffect, useState } from 'react';

const Backdrop = ({ isOpen }: { isOpen: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Small timeout to trigger the CSS transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      id="backdrop"
      className={`
        absolute bg-black/90 z-40 w-full h-full left-0 top-0 
        transition-opacity duration-500 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    />
  );
};

export default Backdrop;
