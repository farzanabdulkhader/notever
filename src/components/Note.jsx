import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ note, onDelete, onEdit, setExpand, editId }) {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        className="dlt-btn"
        onClick={() => onDelete(note.key)}
        disabled={editId === note.key}
      >
        <DeleteIcon style={{ fontSize: "medium" }} />
      </button>
      <button
        className="edit-btn"
        onClick={() => {
          onEdit(note.key);
          setExpand(true);
        }}
      >
        <EditIcon style={{ fontSize: "medium" }} />
      </button>
    </div>
  );
}

export default Note;
