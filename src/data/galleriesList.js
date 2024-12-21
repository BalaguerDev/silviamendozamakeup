export const generateImagePaths = (basePath, folder, numberOfImages, altTextPrefix) => {
  const folderPath = folder ? `/${folder}` : '';
  return Array.from({ length: numberOfImages }, (_, i) => {
    return {
      src: `${basePath}${folderPath}/image-${i + 1}.webp`,
      alt: `${altTextPrefix} ${i + 1}`
    };
  });
};

export const galleriesList = {
  shootings: generateImagePaths('/images/galleries', 'shooting', 12, 'Sesión de Shooting + Maquillaje y peluqueria en Barcelona'),
  novias: generateImagePaths('/images/galleries', 'novias', 12, 'Maquillaje y peinado para novia en Barcelona'),
  inspiracion: [],
  colaboradores: generateImagePaths('/images/sobremi/colaboradores', '', 4, 'Colaboradores destacados de Sílvia Mendoza')
};