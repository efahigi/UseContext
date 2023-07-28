import React from 'react'
import EmployeeListItem from "./EmployeeListItem"
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function EmployeeList(props) {
  let {employee} = useContext(AppContext)

  return (
    <div className='employeeList'>

      {employee.map((labor)=>{
      return <EmployeeListItem employee = {props.labor}/>
      })}
    </div>
  )
}

export default EmployeeList

