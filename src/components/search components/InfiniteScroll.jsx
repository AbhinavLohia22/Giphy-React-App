import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({ next, hasMore, children }) => {
  const observerRef = useRef();//create ref to empty div -> target for the Intersection Observer.

  //when target element intersects the viewport and hasMore data = true
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore) {
      next();
    }
  };

  useEffect(() => {
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();//prevent any memory leaks
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, next]);

  return (
    <div>
      {children}
      <div ref={observerRef} style={{ height: '1px', margin: '1px'}}></div>
    </div>
  );
};

export default InfiniteScroll;
