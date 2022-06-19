import { Note } from "../../types/Note";
import AddNote from "../AddNote/AddNote";
import NoteItem from "../NoteItem/NoteItem";
import * as S from "./styles"

type Props = {
    notes: Note[],
    handleAddNote: (text: string) => void;
    handleDeleteNote: (id: number) => void;
}

const NotesList = ({ notes, handleAddNote, handleDeleteNote }: Props) => {
    return (
        <S.NotesListContent>
            {notes.map((item, index) => (
                <NoteItem key={index} note={item} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </S.NotesListContent>
    )
}

export default NotesList;