import {useState} from 'react';
import './App.css';

function App() {
  const [list, setList] = useState('');
  const [item, setItem] = useState([]);

  const listItem = (e) => {
    setList(e.target.value);
  };

  const addItem = () =>{
    setItem((prev) =>{
      return [...prev, list];
    });
    setList("");
  };

  const deleteItem = (id) =>{
    setItem((prev) =>{
      return prev.filter((e,index)=> index !==id);
      });
      setList("");
  };

  return (
    <>
    <div className ="todo">
      <h2>ToDo List</h2>
    </div>
    <div className="App">
        <div>
          <input type = "text" placeholder = "Enter something"
            value ={list}
            onChange = {listItem}/>      
          <button onClick = {addItem} id ="btn">Add</button>    
        </div>
        
          <div className = "list_div">
            <ul id= "#box">
              {item.map((items,id) =>{
                return <li key = {id}>
                  {items}
                  <button id="btn_div" onClick = {() => deleteItem(id)} > Delete </button>
                </li> 
                })            
              }
          </ul>
          </div>
        </div>
        </>
  );
}
export default App;