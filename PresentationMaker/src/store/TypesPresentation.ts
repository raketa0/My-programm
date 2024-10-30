export type Presentation = {
    title: string;
    slides: Slide[];
  };

export  type Image = SlideObj & {
    id: string
    src: string
    pos: {
      x: number,
      y: number
    }, 
    size: {
      width: number,
      height: number
  },
   type: "SlideImage",  
 }
  
export type Texts =  SlideObj &{
    id: string,
    type: "SlideText",
    size: {
      width: number,
      height: number
  },
    pos: {
      x: number,
      y: number
    },
    fontSize: number,
    fontFamily: string,
    value: string,
   
   
  }


export type SlideElement = Texts | Image;

export type SlideObj = { // базовый тип
  id: string,
  pos: {
      x: number,
      y: number,
  },
  size: {
      width: number,
      height: number,
  }
  fontSize: number;
  value:string;
}

export type Slide = {
    id: string;
    elements: Array<SlideElement>,
    background: string | undefined;
    fontSize: number | string;
  };
  
export type SlidesCollection = Slide[]

export  type Select = {
    element: Text | Image;
    start: number;
    end: number;
  };