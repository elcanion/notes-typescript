import { MdDeleteForever } from "react-icons/md";
import { Note } from "../../types/Note";
import * as S from "./styles"

type Props = {
    note: Note,
    handleDeleteNote: (id: string) => void;
}

const NoteItem = ({note, handleDeleteNote}: Props) => {
    const timestamp = note.createdAt;
    const date = new Date(timestamp.toDate());
    const fullDate = `
        ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `

    return (
        <S.NoteItemContent>
            <span>{note.text}</span>
            <S.NoteFooterContent>
                <small>{fullDate}</small>
                <MdDeleteForever 
                    onClick={() => handleDeleteNote(note.id)}
                    className="delete-icon" 
                    size="1.3em" />
            </S.NoteFooterContent>
        </S.NoteItemContent>
    )
}

export default NoteItem;