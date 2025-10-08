import React from "react";
import { useEffect, useState } from 'react';

   const UseEffectCleanUp= ()=> {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div style={{textAlign: "center",
                    fontSize: "20px"
                    }}>
    
    CONTATORE: {count}</div>;
}
export default UseEffectCleanUp;