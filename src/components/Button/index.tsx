import { useState } from 'react';


type ButtonProps = {
  children: string;
}

export function Button(props: ButtonProps) {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <button onClick={increase}>
      {props.children} - Contador {counter}
    </button>
  )
}
