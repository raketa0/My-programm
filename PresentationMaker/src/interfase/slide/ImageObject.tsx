import {Image} from "../../store/TypesPresentation";
import { CSSProperties } from "react";

type SlideImageProps = {
    imageObject: Image,
    scale?: number, //увеличение
}

function ImageObject({imageObject, scale = 1}: SlideImageProps)
{
    const imageObjectStyles: CSSProperties = {
        position: 'absolute',
        top: `${imageObject.pos.y * scale}px`,
        left: `${imageObject.pos.x * scale}px`,
        width: `${imageObject.size.width * scale}px`,
        height: `${imageObject.size.height * scale}px`,
    }
    return ( 
        <img style={imageObjectStyles} src={`${imageObject.src}`}/>
    )
}

export {
    ImageObject,
}