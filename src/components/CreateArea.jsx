import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
 
	const [noteItems, setNote] = useState({
		title: "",
		content: ""
	});

	const [isExpanded, setIsExpanded] = useState(false);

	
function handleChange(event){

		const {name, value} = event.target;

		setNote(prevValue =>{
			return{
				...prevValue,
				[name]:  value
			};

		});

			}

function submitNote(event){
	props.add(noteItems);
	event.preventDefault();
	setNote({
		title: "",
		content: ""
	});

}		

function expand(){
	setIsExpanded(true)
}	



 
  return (
    <div>
      <form className="create-note" autocomplete="off">
      	{
      		isExpanded && (
      		      	<input 
      		      	onChange={handleChange}
      		      	 value={noteItems.title} 
      		      	 name="title"
      		      	  placeholder="Title" />
      	) }  
        

        <textarea 
        onClick={expand}
         onChange={handleChange}
          value={noteItems.content}
          name="content"
           placeholder="Take a note..." 
           rows={isExpanded ? 3 : 1} />
           
           <Zoom in={isExpanded}>
             <Fab onClick={submitNote}aria-label="add">
        <AddIcon />
      </Fab>
	</Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
