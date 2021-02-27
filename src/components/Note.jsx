import React, { useState } from "react";
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function Note(props) {

  function handleClick() {
    props.delete(props.id);
  }

	
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      	<DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default Note;