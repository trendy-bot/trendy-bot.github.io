# Performance Review

Evaluate for optimal bundle size, runtime performance, and Core Web Vitals.

## Bundle Optimization

- [ ] New dependencies are necessary and not duplicating existing functionality
- [ ] Dynamic imports used for routes and heavy components
- [ ] Tree-shaking works (no side-effectful imports)
- [ ] Bundle size is reasonable (use webpack-bundle-analyzer or similar)
- [ ] Third-party libs are imported selectively (not full package)

## Rendering Performance

- [ ] Large lists use virtualization (react-window, react-virtual)
- [ ] Images properly sized and lazy-loaded
- [ ] Heavy computations memoized (useMemo, useCallback)
- [ ] Expensive components lazy-loaded
- [ ] Animations use transform/opacity (GPU-accelerated)
- [ ] No forced synchronous layouts (read-then-write pattern)

## Network Efficiency

- [ ] Requests deduplicated (not fetching same data twice)
- [ ] Appropriate caching headers set
- [ ] Pagination/infinite scroll for large datasets
- [ ] Request payloads minimized
- [ ] WebSocket connections properly managed
- [ ] Polling intervals are reasonable

## Core Web Vitals

### LCP (Largest Contentful Paint) < 2.5s
- [ ] Hero images preloaded
- [ ] Critical CSS inlined
- [ ] Fonts preloaded with font-display: swap

### FID (First Input Delay) < 100ms
- [ ] Heavy JS split into chunks
- [ ] Long tasks broken up (scheduler.yield or setTimeout)
- [ ] Event handlers non-blocking

### CLS (Cumulative Layout Shift) < 0.1
- [ ] Images have explicit width/height
- [ ] No late-loading content that shifts layout
- [ ] Ads/embeds have reserved space
- [ ] Font fallbacks close in size to web fonts

## Memory Leaks

- [ ] Event listeners removed on unmount
- [ ] Subscriptions closed (WebSocket, SSE, polling)
- [ ] Timers cleared (setTimeout, setInterval)
- [ ] Large data structures not retained unnecessarily
