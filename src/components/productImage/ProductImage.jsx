import { useState } from "react";

export default function ProductImages({ imageSrc, titlePage }) {
    // Estado para la imagen principal
    const [mainImage, setMainImage] = useState(imageSrc[0]);

    // Función para cambiar la imagen principal al hacer clic en una miniatura
    const handleThumbnailClick = (src) => {
        setMainImage(src);
    };

    console.log('CLICKED ON THUMBNAIL',);

    return (
        <div className="product-images">
            <div className="main-image">
                <img src={mainImage} alt={titlePage} id="mainImage" />
            </div>
            <div className="thumbnail-images">
                {imageSrc.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Vista adicional ${index + 1}`}
                        className="thumbnail"
                        onClick={() => handleThumbnailClick(src)} // Actualizamos el src de la imagen principal
                    />
                ))}
            </div>
        </div>
    );
}
