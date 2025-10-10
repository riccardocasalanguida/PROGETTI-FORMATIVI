import React from "react";
import { IUsers } from "../../model/IUsers";
import classes from "./HttpRequestPostMovie.module.css";

const UsersRequestPostUser: React.FC<IUsers> = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.surname}</h3>
      <p>{props.age}</p>
      <p>{props.nation}</p>
      <p>{props.job}</p>
    </li>
  );
};

export default UsersRequestPostUser;