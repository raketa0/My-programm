
import React from 'react';
import styles from './OperationPanel.module.css';


import { importPresentation, exportPresentation} from '../..//lockalStorage/fileUtils'

import addSlideIcon from '../../assets/zeleniyPlusik.png';
import removeSlideIcon from '../../assets/krasniyKrestik.png';
import addTextIcon from '../../assets/bukvaText.svg';
import removeElementIcon from '../../assets/musorka.svg';
import addImageIcon from '../../assets/izobrazhenie.svg';
import IconExxport from '../../assets/IconExport.png';
import IconImport from '../../assets/ImportIcon.png';
import { getEditor } from '../../store/editor';
import { useAppActions } from '../Hooks/useAppAction';
import { useState } from 'react';



export function OperatPanel() {
    
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // State for color picker

  const {
    addSlide,
    removeSlide,
    setText,
    setImage,
    deleteObject,
    changeSlideBackgroud, 
    changeSlideBgrImage, 
  } = useAppActions();

  function onExportPresentachion() {
    const editor = getEditor();
    exportPresentation(editor);
  }
  const handleImportPresentation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImportPresentachion(file) 
        .catch((err) => {
          console.error('Error importing presentation:', err);
          alert('Error importing presentation. Please check the file format.');
        });
    }
  };

  const OnSlideBackgroundChange = (color: string) => {
    changeSlideBackgroud({ type: 'solid', color });
    setBackgroundColor(color); // Update color picker state
  };

  const OnSlideBgrImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        changeSlideBgrImage({ type: 'image', src: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.OperationPanel}>
      {/* ... Buttons for addSlide, removeSlide, setText, setImage, deleteObject ... */}
        <button className={styles.button} onClick={addSlide}>
            <img className={styles.imageButton} src={addSlideIcon} alt="Добавить слайд" />
            Добавить слайд
        </button>

        <button className={styles.button} onClick={removeSlide}>
            <img className={styles.imageButton} src={removeSlideIcon} alt="Удалить слайд" />
            Удалить слайд
        </button>

        <button className={styles.button} onClick={setText}>
            <img className={styles.imageButton} src={addTextIcon} alt="Добавить текст" />
            Добавить текст
        </button>

        <button className={styles.button} onClick={setImage}>
            <img className={styles.imageButton} src={addImageIcon} alt="Добавить изображение" />
            Добавить изображение
        </button>

        <button className={styles.button} onClick={deleteObject}>
            <img className={styles.imageButton} src={removeElementIcon} alt="Удалить объект" />
            Удалить объект
        </button>
      <button className={styles.button} onClick={onExportPresentachion}>
        <img className={styles.imageButton} src={IconExxport} alt="Экспорт документа" />
        Экспорт
      </button>

      <div className={styles.importButton}>
        <input
          type="file"
          id="importFile"
          accept=".json"
          onChange={handleImportPresentation}
          className={styles.fileInput}
        />
        <label htmlFor="importFile" className={`${styles.button} ${styles.fileLabel}`}>
          <img className={styles.imageButton} src={IconImport} alt="Импорт документа" />
          Импорт
        </label>
      </div>

      <div className={styles.changeSlideColor}>
        <button className={styles.button} >
          Цвет фона
          <input
            className={styles.colorpicker}
            type="color" 
            value={backgroundColor} 
            onChange={(e) => OnSlideBackgroundChange(e.target.value)}
          />
        </button>
      </div>

      <div className={styles.changeSlideBgrImage}>
        <input
          type="file"
          id="imageUploader"
          accept="image/*"
          onChange={OnSlideBgrImageChange} 
          className={styles.imageUploader}
        />
        <label htmlFor="imageUploader" className={`${styles.button} ${styles.fileLabel}`}>
          Выберите изображение
        </label>
      </div>
    </div>
  );
}