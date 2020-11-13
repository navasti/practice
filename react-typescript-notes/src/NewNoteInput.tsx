import React, { useState, ChangeEvent } from "react";

interface Props {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<Props> = ({ addNote }) => {
  const [note, setNote] = useState("");
  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  const onAddNoteClick = () => {
    if (note !== "") {
      addNote(note);
      setNote("");
    }
  };
  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
