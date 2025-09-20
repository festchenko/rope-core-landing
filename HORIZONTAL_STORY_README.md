# Rope.core Horizontal Story Experience

## Overview

The horizontal story is a flagship, award-level experience that transforms the rope.core landing page into an immersive, Tesla-like horizontal parallax journey. It features 6 narrative panels with advanced interactions, 3D effects, and responsive behavior.

## Features

### 🎯 **Core Experience**
- **6 Narrative Panels**: Overview, Digital Twin, Sensors & Kit, AI & Prognosis, Open Platform, For Fleet
- **Horizontal Scroll**: GSAP ScrollTrigger-powered smooth horizontal navigation
- **Multi-depth Parallax**: Background, midground, and foreground layers with different scroll speeds
- **Fixed Viewport**: Pinned horizontal track with vertical scroll control

### 🎨 **Visual Design**
- **Tesla/Apple Aesthetic**: Minimalistic, premium, futuristic design
- **Color Palette**: Black/charcoal base with subtle cyan/azure accents
- **Typography**: Space Grotesk font with fluid sizing using clamp()
- **Glassmorphism**: Backdrop blur effects and translucent elements

### ⚡ **Micro-interactions**
- **Magnetic CTAs**: Buttons that follow cursor with spring physics
- **Cursor Parallax**: Subtle 1-2° tilt on headlines based on mouse position
- **Pointer Depth**: Background elements react to mouse movement
- **Smooth Transitions**: 400-700ms timing with power2.out easing

### 📱 **Responsive Behavior**
- **Desktop (≥769px)**: Full horizontal story with all effects
- **Mobile Portrait**: Rotate overlay with animated phone glyph
- **Mobile Landscape**: Toned-down horizontal story (50-60% parallax intensity)
- **Reduced Motion**: Automatic vertical stack fallback

### 🎭 **3D Effects (Optional)**
- **Caustics Scene**: Three.js plane with shader-based water caustics
- **Performance Guards**: WebGL detection, device memory checks, reduced motion respect
- **Lazy Loading**: Only loads when in view and capabilities allow

## Architecture

### Components

```
src/
├── components/
│   ├── HorizontalStory/
│   │   ├── HorizontalStory.js    # Main wrapper with GSAP setup
│   │   ├── Panel.js             # Individual panel component
│   │   └── horizontal.css       # Core horizontal story styles
│   ├── SideNav/
│   │   ├── SideNav.js           # Fixed left navigation
│   │   └── SideNav.css          # Navigation styles
│   ├── RotateGate/
│   │   ├── RotateGate.js        # Mobile orientation gate
│   │   └── RotateGate.css       # Rotate overlay styles
│   └── FX/
│       └── CausticsScene.js     # Three.js 3D effects
└── lib/
    └── effects/
        ├── pointerParallax.js   # Cursor-based parallax
        └── magnetic.js          # Magnetic button effects
```

### Key Technologies

- **GSAP 3**: ScrollTrigger, ScrollToPlugin for smooth animations
- **Three.js**: Optional 3D caustics scene with performance guards
- **React**: Component-based architecture with hooks
- **CSS**: Modern features (backdrop-filter, clamp, custom properties)

## Usage

### Feature Flags

Control the experience via URL parameters or environment variables:

```javascript
// URL Parameters
?horizontal=true          // Enable horizontal mode
?3d=true                 // Enable 3D effects
?reduced-motion=true     // Force reduced motion

// Environment Variables
HORIZONTAL_MODE=true
ENABLE_3D_WATER=true
REDUCED_MOTION_FORCE=false
```

### Adding New Panels

1. **Add panel data** to `HorizontalStory.js`:
```javascript
{
  id: 'new-panel',
  title: 'New Panel',
  content: {
    headline: 'Panel Headline',
    subline: 'Panel Subline',
    description: 'Panel description...'
  }
}
```

2. **Create panel content** in `Panel.js`:
```javascript
case 'new-panel':
  return (
    <div className="panel-content new-panel">
      {/* Your panel content */}
    </div>
  );
```

3. **Add panel styles** to `horizontal.css`:
```css
.new-panel {
  background: linear-gradient(135deg, #000 0%, #0a0a0a 100%);
}
```

### Performance Optimization

#### Automatic Optimizations
- **Lazy Loading**: 3D effects only load when needed
- **Reduced Motion**: Respects user preferences
- **Device Detection**: Disables effects on low-end devices
- **WebGL Guards**: Graceful fallback for unsupported browsers

#### Manual Optimizations
- **Image Optimization**: Use modern formats (WebP, AVIF)
- **Code Splitting**: Lazy load heavy components
- **Bundle Analysis**: Monitor bundle size with webpack-bundle-analyzer

## Performance Budget

### Target Metrics
- **Lighthouse Performance**: ≥85
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Total Blocking Time**: <200ms

### Optimization Strategies
1. **Critical Path**: Inline critical CSS
2. **Resource Hints**: Preload key resources
3. **Image Optimization**: Responsive images with srcset
4. **Code Splitting**: Route-based and component-based splitting
5. **Caching**: Service worker for offline support

## Accessibility

### WCAG Compliance
- **Keyboard Navigation**: Full keyboard support for navigation
- **Screen Readers**: Proper ARIA labels and landmarks
- **Color Contrast**: Meets WCAG AA standards
- **Focus Management**: Visible focus indicators

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .horizontal-story {
    /* Disable animations */
  }
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  .horizontal-story {
    /* High contrast overrides */
  }
}
```

## Browser Support

### Modern Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Fallbacks
- **No WebGL**: Static background images
- **No GSAP**: CSS-only animations
- **No CSS Grid**: Flexbox fallbacks
- **No Backdrop Filter**: Solid backgrounds

## Development

### Local Development
```bash
npm start
# Opens http://localhost:3000
```

### Testing
```bash
npm test
# Run test suite
```

### Building
```bash
npm run build
# Production build
```

### Deployment
```bash
npm run deploy
# Deploy to Vercel
```

## Troubleshooting

### Common Issues

1. **GSAP Not Loading**
   - Check if GSAP is properly installed
   - Verify ScrollTrigger plugin registration

2. **3D Effects Not Working**
   - Check WebGL support
   - Verify Three.js installation
   - Check device memory constraints

3. **Mobile Orientation Issues**
   - Test on actual devices
   - Check viewport meta tag
   - Verify orientation change events

4. **Performance Issues**
   - Use browser dev tools
   - Check for memory leaks
   - Optimize images and animations

### Debug Mode
Enable debug mode by adding `?debug=true` to the URL for additional logging and performance metrics.

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Test on multiple devices
5. Check accessibility compliance

## License

This project is part of the rope.core landing page and follows the same licensing terms.
