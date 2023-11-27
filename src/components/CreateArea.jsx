import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

function CreateArea({
  onAddNote,
  setTitle,
  setContent,
  setEditId,
  title,
  content,
  editId,
  onUpdateNote,
  isExpand,
  setExpand,
}) {
  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setNote((prevNote) => {
  //     return {
  //       ...prevNote,
  //       [name]: value,
  //     };
  //   });
  // }

  function updateNote(key) {
    const updatedNote = { key: key, title, content };
    if (content || title) onUpdateNote(updatedNote);
    setTitle("");
    setContent("");
    setEditId(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = { key: crypto.randomUUID(), title, content };
    if (content || title) onAddNote(newNote);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: isExpand ? "block" : "none" }}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        />
        <textarea
          onClick={() => setExpand(true)}
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
          <Fab
            type="submit"
            onClick={
              !editId
                ? handleSubmit
                : (e) => {
                    e.preventDefault();
                    updateNote(editId);
                  }
            }
          >
            {editId ? <BookmarkAddedIcon /> : <AddIcon />}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
