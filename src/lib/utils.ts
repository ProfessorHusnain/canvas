export const isValidUrl = (url: string): boolean => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
};
