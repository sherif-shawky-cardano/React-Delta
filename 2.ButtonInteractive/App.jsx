import MyButton from './Button';

export default function App() {
  function firstButtonClickHandler () {
    alert('you clicked the first button!');
  }

  function secondButtonClickHandler () {
    alert('you clicked the second button!');
  }

  function thirdButtonClickHandler () {
    alert('you clicked the third button!');
  }
  return (
    <div className="App">
      <MyButton text='first button' type='primary' onClick={firstButtonClickHandler}/>
      <MyButton text='second button' type='dashed' onClick={secondButtonClickHandler}/>
      <MyButton text='third button' type='text' onClick={thirdButtonClickHandler}/>
    </div>
  );
}
