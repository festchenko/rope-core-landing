import { gsap } from 'gsap';

/**
 * Magnetic Button Effect
 * Makes buttons follow the cursor with spring physics
 */
export const initMagneticButtons = (buttons, options = {}) => {
  const {
    intensity = 0.3,
    spring = 0.3,
    disabled = false
  } = options;

  if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const cleanupFunctions = [];

  buttons.forEach(button => {
    if (!button) return;

    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    };

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX = e.clientX;
      mouseY = e.clientY;

      targetX = (mouseX - centerX) * intensity;
      targetY = (mouseY - centerY) * intensity;
    };

    const animate = () => {
      if (isHovered) {
        currentX += (targetX - currentX) * spring;
        currentY += (targetY - currentY) * spring;
      } else {
        currentX += (0 - currentX) * spring;
        currentY += (0 - currentY) * spring;
      }

      gsap.set(button, {
        x: currentX,
        y: currentY,
        force3D: true
      });

      requestAnimationFrame(animate);
    };

    // Add event listeners
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    // Store cleanup function
    cleanupFunctions.push(() => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
      gsap.set(button, { x: 0, y: 0 });
    });
  });

  // Return combined cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

/**
 * Magnetic Text Effect
 * Makes text elements subtly follow the cursor
 */
export const initMagneticText = (textElements, options = {}) => {
  const {
    intensity = 0.1,
    spring = 0.2,
    disabled = false
  } = options;

  if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const cleanupFunctions = [];

  textElements.forEach(element => {
    if (!element) return;

    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
    };

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseX = e.clientX;
      mouseY = e.clientY;

      targetX = (mouseX - centerX) * intensity;
      targetY = (mouseY - centerY) * intensity;
    };

    const animate = () => {
      if (isHovered) {
        currentX += (targetX - currentX) * spring;
        currentY += (targetY - currentY) * spring;
      } else {
        currentX += (0 - currentX) * spring;
        currentY += (0 - currentY) * spring;
      }

      gsap.set(element, {
        x: currentX,
        y: currentY,
        force3D: true
      });

      requestAnimationFrame(animate);
    };

    // Add event listeners
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    // Store cleanup function
    cleanupFunctions.push(() => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      gsap.set(element, { x: 0, y: 0 });
    });
  });

  // Return combined cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

/**
 * Glow Effect
 * Adds a subtle glow animation to elements
 */
export const initGlowEffect = (elements, options = {}) => {
  const {
    color = 'rgba(6, 182, 212, 0.3)',
    intensity = 1,
    duration = 2,
    disabled = false
  } = options;

  if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const animations = [];

  elements.forEach(element => {
    if (!element) return;

    const glowAnimation = gsap.to(element, {
      boxShadow: `0 0 ${20 * intensity}px ${color}`,
      duration: duration,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    animations.push(glowAnimation);
  });

  return () => {
    animations.forEach(animation => animation.kill());
  };
};
