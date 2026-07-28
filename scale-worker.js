// Background Web Worker for logarithmic coordinate computations
self.addEventListener('message', (e) => {
  const { scrollY, stageHeight } = e.data;
  
  // Perform non-blocking exponential scale calculations
  const normalizedProgress = Math.max(0, Math.min(1, Math.abs(scrollY) / stageHeight));
  const logarithmicScaleExponent = -18 + (normalizedProgress * 39); // Ranges from 10^-18m to 10^+21m
  
  self.postMessage({
    progress: normalizedProgress,
    exponent: Math.round(logarithmicScaleExponent)
  });
});
