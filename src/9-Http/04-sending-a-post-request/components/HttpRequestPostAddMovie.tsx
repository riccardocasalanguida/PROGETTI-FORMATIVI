/*import React, { useRef } from "react";

import classes from "./HttpRequestPostAddMovie.module.css";
import {IHttp} from '../../model/IHttp'

const HttpRequestPostAddMovie: React.FC<{
  onAddMovie: (movie:IHttp) => void;
}> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const movie = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default HttpRequestPostAddMovie;*/





import React, { useRef } from "react";

import classes from "./HttpRequestPostAddMovie.module.css";
import {IHttp} from '../../model/IHttp'

const HttpRequestPostAddMovie: React.FC<{
  onAddMovie: (movie:IHttp) => Promise<void | boolean>;
}> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!titleRef.current || !openingTextRef.current || !releaseDateRef.current) {
      return; 
    }
    const movie = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    const success = await props.onAddMovie(movie as IHttp);
    if (success) { 
        titleRef.current.value = '';
        openingTextRef.current.value = '';
        releaseDateRef.current.value = '';
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default HttpRequestPostAddMovie;



