export function validateDistance(distance) {
  const regex = /^\d+[.]?\d*$/gm;
  return regex.test(distance);
}