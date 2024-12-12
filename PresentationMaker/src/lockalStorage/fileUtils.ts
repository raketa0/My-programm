import { EditorType } from "../store/editorType";
import { validateEditor } from "./validationSchema";

export const exportPresentation = (editor: EditorType) => {
    const dataStr = JSON.stringify(editor, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'presentation.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
};

export const importPresentation = (file: File): Promise<EditorType> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target?.result as string;
                const parsedContent = JSON.parse(content) as EditorType;
                if (!validateEditor(parsedContent)) {
                    throw new Error('Invalid presentation format');
                }

                resolve(parsedContent);
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = (err) => reject(err);
        reader.readAsText(file);
    });
};