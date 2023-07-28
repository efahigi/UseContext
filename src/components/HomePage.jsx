import React, { useContext } from "react";
import EmployeeList from "./EmployeeList";
import Employee from "./Employee";
import { AppContext } from "../contexts/app_context";


function HomePage() {
  let count = 0;
  let {employee} = useContext(AppContext)

  return (
    <div className="home-page">

      <div className="Hp">Employee Directory</div>
      <div className="Wrapper Sb">
        <input className="Sb" type="text" />
      </div>
      {employee.map((list) =>{
      count++;
      return(
      <EmployeeList key={count} employee={list}/>
          )
      })}
    </div>
  );
}
export default HomePage;
