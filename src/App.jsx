import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import List from './components/List';


export default function App(){
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
 
  const handleChange = (e) =>{
    const {value} = e.target; 
    setItem(value);
  }

  function handleClick() {
    if (item.trim() === "") return;
    setList(prevValue => [...prevValue, { text: item, done: false }]);
    setItem("");
  }

  
  function deleteItem(i){
    const nValues = list.filter((e, index) => i !== index);
    setList(nValues);
  }
  const toggleDone = (i) => {
    setList(prev =>
      prev.map((task, index) =>
        index === i ? { ...task, done: !task.done } : task
      )
    );
  };
 
  const doneCount = list.filter(item => item.done).length;
  const todoCount = list.length - doneCount;


  return(
    <div className="holder d-flex flex-direction flex-column mx-5" style={{width: "30%"}}>
      <h1 className="text-center">Todo List</h1>
      <FloatingLabel
        controlId="floatingInput"
        label="Todo"
      >
        <Form.Control   className='todoInput' type="text" placeholder='add todo' onChange={handleChange}  value={item}/>
      </FloatingLabel>
      <Button className='addItem btn-outline-light' onClick={handleClick}>Add Item</Button>
            <List list={list} deleteItem={deleteItem} toggleDone={toggleDone} />
 

       <div className='counter d-flex justify-content-around py-2'>
        <span>Total Items: {list.length}</span>
        <span>Todo: {todoCount}</span>
        <span>Done: {doneCount} </span>
      </div>
    </div>
  )
}

  