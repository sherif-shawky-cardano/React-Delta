import { useState } from 'react';
import { Input, Button } from 'antd';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ fontFamily: 'Comic Sans MS'}}>
      <h1>My Todo List</h1>
      <Input 
        style={{ width: '500px'}}
        value={text}
        onChange={(e) => {setText(e.target.value)}}
      />
      <Button 
        onClick={() => {
          setTodos([...todos, text]);
        }}
      >
        Add Todo
      </Button>
      <ul>
        {
          todos.map(todo => (
              <li>
              {todo}
              {'   '}
              <Button onClick={() => {
                setTodos(todos.filter(t => t !== todo))
              }}>x</Button>
              </li>
          ))
        }
      </ul>
    </div>
  );
}