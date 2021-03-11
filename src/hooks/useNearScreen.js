import { useState, useRef, useEffect } from 'react';

export const useNearScreen = ({ rootMargin = '0px' } = {}) => {
  const [isNear, setIsNear] = useState(false);
  const el = useRef(null);
  useEffect(
    () => {
      if (typeof el.current === 'undefined') return;

      let observer;
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined' ?
          window.IntersectionObserver :
          import('intersection-observer'),
      ).then(() => {
        const onIntersect = (entries, observer) => {
          const { isIntersecting } = entries[0];

          if (isIntersecting) {
            setIsNear(true);
            observer.disconnect();
          }
        };

        observer = new window.IntersectionObserver(onIntersect, { rootMargin });
        observer.observe(el.current);
      });

      return () => observer && observer.disconnect();
    },
    [el, rootMargin],
  );

  return [isNear, el];
};
