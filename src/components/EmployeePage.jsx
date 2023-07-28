import React,{useContext} from 'react'
import Employee from './Employee'
import { AppContext } from '../contexts/app_context'

function EmployeePage() {
    let {employee} = useContext(AppContext)
  return (
    <div>
      <div className='employeePage'></div>
      <h2 className='header'>{employee}</h2>
      <employee employee ={ employee}></employee>
    </div>
  )
}

export default EmployeePage
