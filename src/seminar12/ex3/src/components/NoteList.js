import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useState } from "react";

import { addNote } from "../actions/actions";

const noteListSelector = (state) => state.list.notes;

function NoteList(props) {
  const notes = useSelector(noteListSelector, shallowEqual);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h3>List of notes</h3>
        {notes.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </div>
      <div>
        <h3>Add a note</h3>
        <input
          type="text"
          placeholder="content"
          onChange={(evt) => setContent(evt.target.value)}
        />
        <input
          type="button"
          value="add"
          onClick={() => dispatch(addNote(content))}
        />
      </div>
    </div>
  );
}

export default NoteList;
