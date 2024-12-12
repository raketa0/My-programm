
import React from 'react';
import styles from './OperationPanel.module.css';
import { dispatch } from '../../store/editor';
import { addSlide } from '../../store/addSlide';
import { removeSlide } from '../../store/removeSlide'; 
import { setText } from '../../store/setText'; 
import { setImage } from '../../store/setImage'; 
import { deleteObject } from '../../store/deleteObj'; 
import { changeSlideBackroud } from '../../store/changeSlideBackgroud'; 
import { changeSlideBgrImage } from '../../store/changeBackground';
import { importPresentation, exportPresentation} from '../..//lockalStorage/fileUtils'

import addSlideIcon from '../../assets/zeleniyPlusik.png';
import removeSlideIcon from '../../assets/krasniyKrestik.png';
import addTextIcon from '../../assets/bukvaText.svg';
import removeElementIcon from '../../assets/musorka.svg';
import addImageIcon from '../../assets/izobrazhenie.svg';
import IconExxport from '../../assets/IconExport.png';
import IconImport from '../../assets/ImportIcon.png';
import { getEditor } from '../../store/editor';

export function OperatPanel() {
    function onAddSlide() {
        dispatch(addSlide);
    }

    function onRemoveSlide() {
        dispatch(removeSlide);
    }

    function onAddText() {
        dispatch(setText);
    }

    function onRemoveElement() {
        dispatch(deleteObject);
    }

    function onAddImage() {
        dispatch(setImage);
    }

    function onChangeSlideColor() {
        dispatch(changeSlideBackroud, {
            type: 'solid',
            color: '#FF0000',
        });
    }

    function onExportPresentachion() {
        const editor = getEditor();
        exportPresentation(editor);
    }

    function onImportPresentachion(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            importPresentation(file)
                .then((parsedContent) => {
                    dispatch(() => parsedContent);
                })
                .catch((err) => {
                    console.error('Error importing presentation:', err);
                    alert('Error importing presentation. Please check the file format.');
                });
        }
    }

    const onChangeBgrImage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => { 
                dispatch(changeSlideBgrImage, { type: 'image', src: reader.result }); 
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.OperationPanel}>
            <button className={styles.button} onClick={onAddSlide}>
                <img className={styles.imageButton} src={addSlideIcon} alt="Добавить слайд" />
                Добавить слайд
            </button>

            <button className={styles.button} onClick={onRemoveSlide}>
                <img className={styles.imageButton} src={removeSlideIcon} alt="Удалить слайд" />
                Удалить слайд
            </button>

            <button className={styles.button} onClick={onAddText}>
                <img className={styles.imageButton} src={addTextIcon} alt="Добавить текст" />
                Добавить текст
            </button>

            <button className={styles.button} onClick={onAddImage}>
                <img className={styles.imageButton} src={addImageIcon} alt="Добавить изображение" />
                Добавить изображение
            </button>

            <button className={styles.button} onClick={onRemoveElement}>
                <img className={styles.imageButton} src={removeElementIcon} alt="Удалить объект" />
                Удалить объект
            </button>

            <button className={styles.button} onClick={onExportPresentachion}>
                <img className={styles.imageButton} src={IconExxport} alt="Экспорт документа" />
                Экспорт
            </button>

            <div className={styles.importButton}>
                <input type="file" id="importFile" accept='.json' onChange={onImportPresentachion} className={styles.fileInput} />
                <label htmlFor="importFile" className={`${styles.button} ${styles.fileLabel}`}>
                    <img className={styles.imageButton} src={IconImport} alt="Импорт документа" />
                    Импорт
                </label>
            </div>

            <div className={styles.changeSlideColor}>
                <button className={styles.button} onClick={onChangeSlideColor}>
                    Цвет фона
                    <input
                        className={styles.colorpicker} 
                        type={'color'} 
                        value={'#'}
                        onInput={() => {}}
                        onChange={(value) => {
                            dispatch(changeSlideBackroud, {
                                type: 'solid',
                                color: value.target.value
                            });
                        }}
                    />
                </button>
            </div>
                            
            <div className={styles.changeSlideBgrImage}>
                <button className={styles.button}>
                    <input type="file" id="imageUploder" accept='image/*' onChange={onChangeBgrImage} className={styles.imageUploader} />
                    <label htmlFor="imageUploder" className={`${styles.button} ${styles.fileLabel}`}>Выберите изображение</label>
                </button>        
            </div>
        </div>
    );
}