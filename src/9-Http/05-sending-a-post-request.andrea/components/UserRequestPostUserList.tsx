import React from "react";
import { IUsers } from "../../model/IUsers";
import UserRequestPostUser from "./UserRequestPostUser";
import classes from "./HttpRequestPostMoviesList.module.css";

const UserRequestPostUserList: React.FC<IUsers> = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.users?.map((user: IUsers) => (
        <UserRequestPostUser
          key={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
          nation={user.nation}
          job={user.job}
        />
      ))}
    </ul>
  );
};

export default UserRequestPostUserList;