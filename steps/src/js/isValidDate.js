export function isValidDate(dateString) {

  const regex = /^\d{2}.\d{2}.\d{2}$/gm;
  return regex.test(dateString);
}


