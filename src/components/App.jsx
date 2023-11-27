import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import initialNotes from "../notes";

function App() {
  const [notes, setNotes] = useState(initialNotes ? initialNotes : "");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [isExpand, setExpand] = useState(false);

  function deleteNote(key) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem) => noteItem.key !== key)
    );
  }

  function editNote(key) {
    setTitle(notes.filter((note) => note.key === key)[0].title);
    setContent(notes.filter((note) => note.key === key)[0].content);
    setEditId(key);
  }

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
  }

  function handleUpdatedNote(updatedNote) {
    setNotes(
      notes.map((note) => (note.key === updatedNote.key ? updatedNote : note))
    );
  }

  return (
    <>
      <div className="main">
        <Header />
        <CreateArea
          setTitle={setTitle}
          setContent={setContent}
          setEditId={setEditId}
          title={title}
          content={content}
          onAddNote={handleAddNote}
          editId={editId}
          onUpdateNote={handleUpdatedNote}
          isExpand={isExpand}
          setExpand={setExpand}
        />
        <div className="notes">
          {notes.map((note) => {
            return (
              <Note
                onDelete={deleteNote}
                note={note}
                key={note.key}
                onEdit={editNote}
                isExpand={isExpand}
                setExpand={setExpand}
                editId={editId}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
