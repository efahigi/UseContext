import users from "./models/users";
import "./App.css";
import Employee from "./components/Employee";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
//import { useState } from "react";

function App() {

  return (
    <div className="App">
       <HomePage />
       <EmployeePage />
    </div>
  );
}

export default App;