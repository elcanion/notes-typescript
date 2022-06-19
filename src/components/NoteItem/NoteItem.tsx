import { MdDeleteForever } from "react-icons/md";
import { Note } from "../../types/Note";
import * as S from "./styles"

type Props = {
    note: Note,
    handleDeleteNote: (id: number) => void;
}

const NoteItem = ({note, handleDeleteNote}: Props) => {
    return (
        <S.NoteItemContent>
            <span>{note.text}</span>
            <S.NoteFooterContent>
                <small>{note.date}</small>
                <MdDeleteForever 
                    onClick={() => handleDeleteNote(note.id)}
                    className="delete-icon" 
                    size="1.3em" />
            </S.NoteFooterContent>
        </S.NoteItemContent>
    )
}

export default NoteItem;