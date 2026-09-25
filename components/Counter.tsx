import { useState, useEffect, useRef } from 'react';
import { ICounter } from '@/types/types';

export default function Counter({ number, text, animationTime }: ICounter) {
  // State variables
  const [total, setTotal] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Incrementally numer to simulate animation
    if (number && isVisible && !animated) {
      setAnimated(true);

      let counter = 0;
      const i = setInterval(() => {
        setTotal(counter);
        counter++;
        if (counter > number) {
          clearInterval(i);
        }
      }, animationTime / number);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex justify-center items-center text-3xl xs:text-5xl size-20 xs:size-26 mb-2 shadow-md rounded-full font-normal">{total.toString()}</div>
      <p className="text-center text-xs lg:text-sm max-w-38 mx-1 font-semibold">{text}</p>
    </div>
  );
}
