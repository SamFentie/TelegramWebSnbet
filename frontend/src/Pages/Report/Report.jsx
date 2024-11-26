import React, { useState } from 'react'
import './Report.css'


const Report = () => {
  const [personAttendanceInfo,setPersonAttendaceInfo]=useState([
    {month:'መጋቢት',day:[
    'attended'
    ,'attended'
    ,'attended'
    ,'attended'
    ,'absent'
    ,'absent'
    ,'attended'
    ,'attended'
    ,'attended'
      ,'attended'
      ,'attended'
      ,'attended'
      ,'permission'
      ,'attended'
      ,'attended'
      ,'attended'
      ,'permission'
      ,'attended'
      ,'attended'
      ,'attended'
      ,'attended'
      ,'attended'
      ,''
      ,''
      ,''
      ,''
      ,''
      ,''
      ,''
      ,''
      
  ]}
  ])
  return (
    <div className='report-div'>
       <div className={`courses`}>
          <div className='course yellow' >
              <span>ፍቃድ: 4</span> 
          </div>
          <div  className='course green'>
              <span>የመጣ: 6</span> 
          </div>
          <div  className='course red'>
              <span>ቀሪ: 3</span> 
          </div> 
      </div>
      <div className="atendance-content">
        {personAttendanceInfo.map((item,index)=>(
          <>
          <span key={index}>{item.month}</span>
          <div key={index} className="attendance">
            {item.day.map((day,index)=>(
              <div key={index} className={`day ${day}`}>
              {index}
            </div>
            ))}
          </div>
          </>
        ))}
        
        
      </div>
      
    </div>
  )
}

export default Report