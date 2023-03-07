import List from './List';

export default function App() {
  const roundThings = [
    {
      id: 1,
      name: 'Apple',
    }, 
    {
      id: 2,
      name: 'Potato',
    }, 
    {
      id: 1,
      name: 'Rock',
    }, 
    {
      id: 1,
      name: 'Ball',
    }
  ]
  
  return (
    <div className="App">
      <List items={roundThings} />
    </div>
  );
}
