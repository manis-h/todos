import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {TiTickOutline} from 'react-icons/ti'
export default function Todos() {
const [taskarray,setTaskArray]=useState([])
    const [task,setTask]=useState({
        task:'',
        stat:false
    })
const HandleTask=(e)=>{
e.preventDefault()
setTaskArray([...taskarray,task])
setTask()
}
  return (
    <div>
    <div className='container'>
    <form onSubmit={HandleTask}>
    <div className='row'>
    <input value={task?.task||''} onChange={(e)=>setTask({task:e.target.value,stat:false})} placeholder='Your Todos Task' className='float-start'/> <button role='submit' className='float-end'>ADD</button>
    </div> 
    </form>
    {taskarray?.map((i,index)=>(
        
    <div key={index} className='row'>
   <p className={`${i.stat&&`text-decoration-line-through`} float-start`}>
   {i?.task}
   <span
   onClick={()=>{
    const list =[...taskarray]
    list[index].stat=true
    setTaskArray(list)
   }}
   >
   <TiTickOutline/>   
   </span>
   <span onClick={()=>{
    const list=[...taskarray]
list?.splice(index,1)
setTaskArray(list)
   }}  className=' text-danger'>
   
   <AiFillDelete />
   </span> 
   </p>

    </div>

    ))}
    </div>
    </div>
  )
}
