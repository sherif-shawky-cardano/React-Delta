import ListItem from './ListItem';

export default function List({ items }) {
  return (
    <div>
      <h2>My Super Important List</h2>
      <ul>
        {items.map(item => <ListItem key={item.key} name={item.name} />)}
      </ul>
    </div>
  )
}