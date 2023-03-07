import { Button } from 'antd';


export default function MyButton({ text, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  )
}