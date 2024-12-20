export const generateImagePaths = (folder, numberOfImages, altTextPrefix) => {
    return Array.from({ length: numberOfImages }, (_, i) => {
      return {
        src: `/images/galleries/${folder}/image-${i + 1}.webp`,
        alt: `${altTextPrefix} ${i + 1}`
      };
    });
  };
  
  export const galleriesList = {
    shootings: generateImagePaths('shooting', 12, 'Sesión de Shooting + Maquillaje y peluqueria en Barcelona'),
    novias: generateImagePaths('novias', 12, 'Maquillaje y peinado para novia en Barcelona'),
    inspiracion: []
  };