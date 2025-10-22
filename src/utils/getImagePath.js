// Utility function to get correct image paths for GitHub Pages
export const getImagePath = (imagePath) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Use the base path from vite config - this will be replaced at build time
  const basePath = import.meta.env.BASE_URL;
  
  // Construct the full path
  return `${basePath}${cleanPath}`;
};

export default getImagePath;
