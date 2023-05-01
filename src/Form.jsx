import React from "react";

export default function Form({handleSubmit, setTemp, temp}){

  

  

  const handleChange = (e)=>{
    const {value,name} = e.target
    setTemp(()=>{return{[name]:value}
  }
    )
   
  }


  return( <>
    <form onSubmit={(e)=>handleSubmit(e)} className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input onChange={(e)=>handleChange(e)} value={temp.note} name="note" type="text" id="item" />
    <button type="submit" className="btn">Add</button>
    </div>
    </form>
    
  </>)
    l 
}