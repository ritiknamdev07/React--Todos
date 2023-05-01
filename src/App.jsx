import React, { useEffect, useState } from "react";
import "./style.css"
import Form from "./Form";
import ListItem from "./ListItem";
export default function App (){


  const [note, setNote] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  })
  const [temp,setTemp] = useState({note:""})

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(note))
  }, [note])

  const handleSubmit = (e)=>{
    let id = note.length? note[note.length-1].id+1 : 1 ;
    const listItem = {id,...temp, completed:false}
    setNote((pri)=>{
      return [...pri,listItem]
    })
   setTemp({note:""})

  //  console.log(crypto.randomUUID());
  e.preventDefault()
  }
  


  

   return(<>
       <Form
       temp={temp}
       setTemp={setTemp}
       handleSubmit={handleSubmit}
        />
       <h1 className="header">Todo List</h1>
     <ul>
     {note.length === 0 && "No Todos"}
     {
      note.map((n)=><ListItem
      setNote={setNote}
       note={n.note}
        id={n.id}
        key={n.id}
       />)
     }
        
     </ul>
  </>)
}