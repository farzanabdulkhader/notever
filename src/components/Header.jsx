import React from "react";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";

function Header() {
  return (
    <header>
      <h1>
        <EditNoteTwoToneIcon
          style={{ marginRight: "10px", fontSize: "28px" }}
        />
        Notever
      </h1>
    </header>
  );
}

export default Header;
