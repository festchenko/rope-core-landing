import { gsap } from 'gsap';

/**
 * Pointer Parallax Effect
 * Creates subtle parallax movement based on mouse position
 */
export const initPointerParallax = (elements, options = {}) => {
  const {
    intensity = 0.5,
    disabled = false
  } = options;

  if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}; // Return cleanup function
  }

  let isThrottled = false;
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const handleMouseMove = (e) => {
    if (isThrottled) return;
    
    isThrottled = true;
    requestAnimationFrame(() => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isThrottled = false;
    });
  };

  const updateParallax = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    targetX = (mouseX - centerX) * intensity;
    targetY = (mouseY - centerY) * intensity;

    elements.forEach((element, index) => {
      if (!element) return;
      
      const speed = element.dataset.speed ? parseFloat(element.dataset.speed) : 1;
      const x = targetX * speed;
      const y = targetY * speed;
      
      gsap.set(element, {
        x: x,
        y: y,
        force3D: true
      });
    });

    requestAnimationFrame(updateParallax);
  };

  // Start the animation loop
  updateParallax();
  
  // Add event listener
  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  // Return cleanup function
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    elements.forEach(element => {
      if (element) {
        gsap.set(element, { x: 0, y: 0 });
      }
    });
  };
};

/**
 * Cursor Tilt Effect
 * Tilts elements based on cursor position
 */
export const initCursorTilt = (elements, options = {}) => {
  const {
    maxTilt = 2, // degrees
    disabled = false
  } = options;

  if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  let isThrottled = false;
  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (e) => {
    if (isThrottled) return;
    
    isThrottled = true;
    requestAnimationFrame(() => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isThrottled = false;
    });
  };

  const updateTilt = () => {
    elements.forEach(element => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (mouseX - centerX) / rect.width;
      const deltaY = (mouseY - centerY) / rect.height;
      
      const tiltX = deltaY * maxTilt;
      const tiltY = deltaX * -maxTilt;
      
      gsap.set(element, {
        rotationX: tiltX,
        rotationY: tiltY,
        transformOrigin: 'center center',
        force3D: true
      });
    });

    requestAnimationFrame(updateTilt);
  };

  updateTilt();
  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    elements.forEach(element => {
      if (element) {
        gsap.set(element, { rotationX: 0, rotationY: 0 });
      }
    });
  };
};
