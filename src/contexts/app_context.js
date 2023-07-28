// 1. Import createContext
import { useState, createContext } from 'react';
import users from '../models/users';
// 2. create our context - this creates our context
export const AppContext = createContext();

// 3. create context provider - is a function to use context throughout entire app
const AppContextProvider = (props) => {
  // 4. Bring in the states we are making global state
  const [employee, setEmployee] = useState(users);
  const [current, setCurrent] = useState(users[0]);
  return (
    <AppContext.Provider
      value={{
        current,
        setCurrent,
        employee,
        setEmployee
      }}>
      {/* Passes down the value to all children of the provider */}
      {props.children}
    </AppContext.Provider>
  );
};

// 5. export our context provider
export default AppContextProvider;