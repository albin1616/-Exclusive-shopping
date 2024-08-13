export const getImageUrl = (imageName: string) => {
  return `${process.env.PUBLIC_URL}/assets/${imageName}`;
};
