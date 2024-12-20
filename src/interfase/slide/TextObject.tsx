import { SlideElement } from "../../store/TypesPresentation";
import { CSSProperties } from "react";

type TextObjectProps = {
  textObject: SlideElement; 
  scale?: number; 
  isSelected: boolean;
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
    border: isSelected ? '3px solid #0b57d0' : 'none',
    margin: 0
  };

  return <p style={textObjectStyles}>{textObject.value}</p>;
}

export { TextObject };