import React, { useState } from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Permission.css'


const Permission = () => {
  const[courseSelected,setCourseSelected]=useState()
  const [selected, setSelected] = useState();
  const [submit,setOnSubmit]=useState(false)
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <div className='permission-div'>
      <div className={`courses`}>
          <div className={`course ${courseSelected==='መዝሙር'?'active':''}`} onClick={()=>{setCourseSelected((prev)=>prev==='መዝሙር'?'':'መዝሙር');}}>
              <span>መዝሙር</span> 
          </div>
          <div className={`course ${courseSelected==='ኮርስ'?'active':''}`} onClick={()=>{setCourseSelected((prev)=>prev==='ኮርስ'?'':'ኮርስ');}}>
              <span>ኮርስ</span> 
          </div>
          <div className={`course ${courseSelected==='ጉባኤ'?'active':''}`} onClick={()=>{setCourseSelected((prev)=>prev==='ጉባኤ'?'':'ጉባኤ');}}>
              <span>ጉባኤ</span> 
          </div> 
      </div>
      
      <div className='calendar'>
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      
    />
    {submit&&<div className="popup">
      <div className="popup-content">
        <div className="title-for-popup">
          <h3>Write your reason</h3>
          <p onClick={()=>setOnSubmit(false)}>X</p>
        </div>
        <textarea name="" id="" placeholder='Reason...'></textarea>
        <button onClick={()=>setOnSubmit(false)}>Submit</button>
      </div>
    </div>}
    </div>
      <div className="inform-permission">
       <span>Type {courseSelected} Date {selected?format(selected, 'PP'):''}</span> 
      </div>
      <button className='send-permission' onClick={()=>setOnSubmit((prev)=>prev?false:true)}>Add</button>
    </div>
  )
}

export default Permission