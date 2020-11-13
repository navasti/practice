import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./actions";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from "./notesReducer";

const App = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    state => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <div className="App">
      <NewNoteInput addNote={onAddNote} />
      <ul>
        {notes.map(note => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
