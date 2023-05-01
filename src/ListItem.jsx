import React from "react";

export default function ListItem ({setNote, note, id}){

    const handleDelete = (id)=>{
        setNote((pri)=>{
          return pri.filter((note)=> note.id !== id )
        })
        
      }

      const handleClicked = (id,c) =>{
        setNote((pri)=>{
          return pri.map((note)=>note.id===id ? {...note,c}  : note)
        }) 
      }
    return(
        <>
            <li >
            <label>
                <input onChange={(e)=>handleClicked(id,e.target.checked)} type="checkbox" checked={note.completed} />
                {note}
            </label>
            <button onClick={()=>handleDelete(id)} className="btn btn-danger">Delete</button>
        </li>
        </>
    )
}