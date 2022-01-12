import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const deleteHandler = (event) => {
    // setDeleteText('(Deleted!)');
    props.onDelete(event.target.id);
  };
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={user.id} onClick={deleteHandler}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
