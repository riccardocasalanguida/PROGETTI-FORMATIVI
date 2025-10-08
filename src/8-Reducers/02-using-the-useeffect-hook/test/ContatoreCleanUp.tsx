import React, { useEffect, useState } from "react";

const ContatoreCleanUp = () => {
  const [contatore, setContatore] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContatore(contatore == 10 ? 0 : contatore + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [contatore]);

  return <div>ContatoreCleanUp: {contatore}</div>;
};

export default ContatoreCleanUp;