import React, { useRef } from "react";
import classes from "./HttpRequestPostAddMovie.module.css";
import {IUsers} from '../../model/IUsers';

const UserRequestPostAddUser: React.FC<{
  onAddUser: (user:IUsers) => Promise<void | boolean>;
}> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const nationRef = useRef<HTMLInputElement>(null);
  const jobRef = useRef<HTMLInputElement>(null);
  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!nameRef.current || !surnameRef.current || !ageRef.current || !nationRef.current || !jobRef.current) {
      return; 
    }
    const user = {
        name: nameRef.current!.value,
        surname: surnameRef.current!.value,
        age: ageRef.current!.value,
        nation: nationRef.current!.value,
        job: jobRef.current!.value,
    };
    const success = await props.onAddUser(user as IUsers);
    if (success) { 
        nameRef.current.value = '';
        surnameRef.current.value = '';
        ageRef.current.value = '';
        nationRef.current.value = '';
        jobRef.current.value = '';
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="surname">Surname</label>
        <input type="text" id="surname" ref={surnameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" ref={ageRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="nation">Nation</label>
        <input type="text" id="nation" ref={nationRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="job">Job</label>
        <input type="text" id="job" ref={jobRef} />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserRequestPostAddUser;