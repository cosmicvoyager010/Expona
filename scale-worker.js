self.addEventListener('message', (e) => {
  const { type, payload } = e.data;

  if (type === 'CALCULATE_SCALE') {
    const { scrollY, totalHeight, minLog, maxLog } = payload;
    const progress = Math.max(0, Math.min(1, Math.abs(scrollY) / totalHeight));
    const currentExponent = minLog + progress * (maxLog - minLog);
    const valueInMeters = Math.pow(10, currentExponent);

    self.postMessage({
      type: 'SCALE_RESULT',
      payload: { progress, currentExponent: currentExponent.toFixed(2), valueInMeters }
    });
  }
});
