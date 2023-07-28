import React,{useContext} from 'react'
import { AppContext } from '../contexts/app_context'


function EmployeeListItem(props) {


  return (
   <div className='employeeListItem' >
   {/* onClick = {()=>{
   setCurrent(props.employee)
   }} */}
  <img src={props.employee.img} className = "employeeImg" />
        
        <div className='employeeInfo'>
          <h2> {props.employee.name} </h2>
          <h5> {props.employee.title} </h5>
        </div>
    </div>
  )
}

export default EmployeeListItem
