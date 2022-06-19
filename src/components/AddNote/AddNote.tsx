import { SetStateAction, useState } from "react";
import * as S from "./styles";

type Props = {
    handleAddNote: (text: string) => void
}

const AddNote = ({handleAddNote}: Props) => {

    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        if (characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <S.AddNoteContent>
            <S.AddNoteTextArea
                rows={8}
                cols={10}
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
                ></S.AddNoteTextArea>
                <S.AddNoteFooterContent>
                    <small>{characterLimit - noteText.length} Remaining</small>
                    <S.AddNoteSaveButton onClick={handleSaveClick}>Save</S.AddNoteSaveButton>
                </S.AddNoteFooterContent>
        </S.AddNoteContent>
    )
}

export default AddNote;