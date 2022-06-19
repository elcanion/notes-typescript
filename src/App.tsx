import { useEffect, useState } from "react";
import { Note } from "./types/Note";
import NotesList from "./components/NotesList/NotesList";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import * as S from "./App.styles"

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: 2,
      text: "ahusdhaushduahsduahsudhausdhaushduashduahsduahsudh!",
      date: "15/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data') || "{}");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: notes.length,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id: number) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
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