import { useEffect, useState } from "react";
import { Note } from "./types/Note";
import NotesList from "./components/NotesList/NotesList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import * as S from "./App.styles"
import { app } from "./firebase.config";
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDocs, getFirestore, Timestamp } from "firebase/firestore";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
  ]);

  const [searchText, setSearchText] = useState("");

  const db = getFirestore(app);

  useEffect(() => {
    query();
  }, [])


  async function query() {
    var newNotes : Note[] = [];
    const querySnapshot = await getDocs(collection(db, "notes"));
    querySnapshot.forEach((doc) => {
      newNotes.push({
        id: doc.id,
        text: doc.data().text,
        createdAt: doc.data().createdAt,
      });
      setNotes(newNotes);
    });
  }

  const addNote = async (text: string) => {
    const timestamp = Timestamp.now();
    try {
      const docRef = await addDoc(collection(db, "notes"), {
        text: text,
        createdAt: timestamp,
      })

      const newNote = {
        id: docRef.id,
        text: text,
        createdAt: timestamp
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    } catch (e) {
      console.log("Error adding document: ", e);
    }

  }

  const deleteNote = async (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await deleteDoc(doc(db, "notes", id));
  }

  return (
    <S.AppContainer>
      <Header />
      <SearchBar handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} 
      />
    </S.AppContainer>
  )
}

export default App;