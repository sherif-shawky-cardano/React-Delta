import { useState } from "react";
import { Button } from "antd";

export default function MyButton({ text }) {
  const [value, setValue] = useState(0);

  function onIncrementClickHandler() {
    setValue(value+1);
  }
  function onDecrementClickHandler() {
    setValue(value-1);
  }
  return (
   <> 
    <h3>{text}</h3>
      <Button type='primary' onClick={onIncrementClickHandler}>
        Increment
      </Button>
      <Button type='primary' onClick={onDecrementClickHandler} danger>
        Decrement
      </Button>
      <p>{value}</p>
    </>
  );
}
