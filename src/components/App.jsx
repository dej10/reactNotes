import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {

	const [items, setItems] = useState([]);



	function addNotes(noteItems) {
    setItems(prevItems => {
      return [...prevItems, noteItems];
    });
  }


 function deleteItems(id){
  setItems(prevItems => {
    return prevItems.filter((item, index)=>{
      return index !== id;
    })})};




  return (
    <div>
      <Header />
      <CreateArea

      	add={addNotes}

       />
       {items.map((noteContent , index) => (

		       	<Note
		       key={index}
		       id = {index}
		       title={noteContent.title} 
		       content={noteContent.content}
           delete  = {deleteItems}
  	       />
         
          ))
          }
      
      <Footer />
    </div>
  );
}

export default App;
