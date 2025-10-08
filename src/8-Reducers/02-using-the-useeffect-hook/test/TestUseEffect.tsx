import React, {useState,useEffect} from 'react';

const TestUseEffect = () => {
  const [contatore, setCount] = useState<number>(0);
  const [messaggio,setMessaggio] = useState<string>("Ciao");
  useEffect(() => {
    const testo = setInterval(() => {
      setMessaggio("Hello");
    },3500);
    return() => {
      clearInterval(testo)
    };
  },[]);
  useEffect(() => {
      const invalidId = setInterval(() => {
        setCount(prevContatore => prevContatore + 1);
    },3500);
    return() => {
      clearInterval(invalidId);
    };
  },[]);
  return (
    <>
      <h1 id= "1">
        Messaggio: {messaggio}
      </h1>
      <hr />
      <h2>Contatore:{contatore}</h2>
    </>
  );
}
export default TestUseEffect;