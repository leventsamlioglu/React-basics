import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteItemHandler = (goalId) => {
    setUsersList((prevUsersList) => {
      const newList = prevUsersList.filter((user) => user.id !== goalId);
      return newList;
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDelete={deleteItemHandler} />
    </Fragment>
  );
}

export default App;
