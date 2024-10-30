import { Presentation, Slide} from "../store/TypesPresentation"
// изм поз сл
function changeSlidePosition(presentation: Presentation, slideId: string, newIndex: number): Presentation {
    // const currentIndex = presentation.slides.findIndex(slide => slide.id === slideId);

    function findSlideIndex(slides: Slide[], slideId: string): number {
        for (let i = 0; i < slides.length; i++) {
          if (slides[i].id === slideId) {
            return i;
          }
        }
        return -1; // Если слайд не найден
      }
      for (let i = 0; i < presentation.slides.length ; i++) {
        console.log(presentation.slides[i])
      }
      const currentIndex = findSlideIndex(presentation.slides, slideId);

    if (currentIndex === -1 || newIndex < 0 || newIndex >= presentation.slides.length) {
        throw new Error("Неверный индекс или слайд не найден");
    }
    const updatedSlides = [...presentation.slides];
    const [movedSlide] = updatedSlides.splice(currentIndex, 1);
    updatedSlides.splice(newIndex, 0, movedSlide);

    return {
        ...presentation,
        slides: updatedSlides,
    };

}

export{changeSlidePosition}