import { SlideElement } from "../../store/TypesPresentation";
import { CSSProperties } from "react";

type TextObjectProps = {
  textObject: SlideElement; // Объект текста
  scale?: number; // Масштаб
  isSelected: boolean; // Выбран ли объект
};

function TextObject({ textObject, scale = 1, isSelected }: TextObjectProps) {
  const textObjectStyles: CSSProperties = {
    position: 'absolute',
    top: `${textObject.pos.y * scale}px`,
    left: `${textObject.pos.x * scale}px`,
    width: `${textObject.size.width * scale}px`,
    height: `${textObject.size.height * scale}px`,
    fontSize: `${textObject.fontSize * scale}px`,
    zIndex: 3,
  };

  if (isSelected) {
    textObjectStyles.border = '3px solid #0b57d0';
  }

  return <p style={textObjectStyles}>{textObject.value}</p>;
}

export { TextObject };