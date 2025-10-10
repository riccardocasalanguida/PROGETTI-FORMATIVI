import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import UserRequestPostUserList from "./components/UserRequestPostUserList";
import UserRequestPostAddUser from "./components/UserRequestPostAddUser";
import { IUsers } from "../model/IUsers";
import "./HttpRequestPost.css";
import "../../index.css";

const UserRequestPost: React.FC<IUsers> = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://corso-react-ebd63-default-rtdb.firebaseio.com/users.json"
      );
      if (!response.data) {
        throw new Error("Something went wrong!");
      }
      const data = response.data;
      if (!data) {
        setUsers([]);
        setIsLoading(false);
        return;
      }
      const loadedUsers = [];
      for (const key in data) {
        const userData = data[key];
        let userToProcess;
        if (userData.body) {
          userToProcess = JSON.parse(userData.body);
        } else {
          userToProcess = userData;
        }
        loadedUsers.push({
          id: key,
          name: userToProcess.name,
          surname: userToProcess.surname,
          age: userToProcess.age,
          nation: userToProcess.nation,
          job: userToProcess.job,
        });
      }
      setUsers(loadedUsers);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred.");
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);
  const addUserHandler = async (user: IUsers) => {
    try {
        const response = await axios.post(
          "https://corso-react-ebd63-default-rtdb.firebaseio.com/users.json", user);
        console.log("User added with ID:", response.data.name);
        fetchUsersHandler();
        return true;
    } catch (error) {
        console.error("Error adding user:", error);
        return false;
    }
  };
  let content = <p>Found no users.</p>;
  if (users.length > 0) {
    content = <UserRequestPostUserList users={users} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <UserRequestPostAddUser onAddUser={addUserHandler} />
      </section>
      <section>
        <button onClick={fetchUsersHandler}>Fetch Users</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
    );
};
export default UserRequestPost;