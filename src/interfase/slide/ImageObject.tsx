import { Image } from "../../store/TypesPresentation";
import { CSSProperties } from "react";

type SlideImageProps = {
  imageObject: Image; // Объект изображения
  scale?: number; // Увеличение
  isSelected: boolean; // Выбран ли объект
};

function ImageObject({ imageObject, scale = 1, isSelected }: SlideImageProps) {
  const imageObjectStyles: CSSProperties = {
    position: 'absolute',
    top: `${imageObject.pos.y * scale}px`,
    left: `${imageObject.pos.x * scale}px`,
    width: `${imageObject.size.width * scale}px`,
    height: `${imageObject.size.height * scale}px`,
    zIndex: 3,
    border: isSelected ? '3px solid #0b57d0' : 'none', // Добавляем обводку, если объект выбран
  };

  return <img style={imageObjectStyles} src={`${imageObject.src}`} />;
}

export { ImageObject };