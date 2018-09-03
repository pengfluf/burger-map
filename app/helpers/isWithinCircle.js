function isWithinCircle(lat, lng, centerLat, centerLng, meters) {
  const ky = 40000 / 360;
  const kx = Math.cos((Math.PI * centerLat) / 180.0) * ky;
  const dx = Math.abs(centerLng - lng) * kx;
  const dy = Math.abs(centerLat - lat) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= meters / 1000;
}

export default isWithinCircle;
