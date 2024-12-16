import "./App.css";
import { useState ,useRef} from "react";

function App() {
const [todo,setTodo] = useState([]);
const inputRef = useRef()
function addItem(){
  const textInput = inputRef.current.value;
     const newItem = {isCompleted:false,textInput}
   textInput !== ""
     ? setTodo([...todo,newItem])
     : (inputRef.current.value = "");
     inputRef.current.value = "";
}
const deldel = (index)=>{
 const newtodos = [...todo];
 newtodos[index].isCompleted = !newtodos[index].isCompleted;

setTodo(newtodos);
}
const removeItem = (index)=>{
   const newTodos = [...todo]
   newTodos.splice(index, 1)
   setTodo(newTodos);
  
}

return (
  <div className="container">
    <h1>Todo List</h1>
    <h2>Theris {todo.length} Tasks</h2>
    {todo.map((item, index) => (
      <div className="test" key={index}>
        <li className={item.isCompleted?"done":""} onClick={() => deldel(index)}>{item.textInput}</li>
        <span onClick={() => removeItem(index)}>✖︎</span>
      </div>
    ))}

    <input
      ref={inputRef}
      type="text"
      className="todo"
      placeholder="Enter Item"
    />
    <button onClick={addItem}>Add Item</button>
  </div>
);
}
export default App;



// import "./App.css";
// import Items from "./components/items";
// import { useState, useRef } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const ref = useRef();

//   function addTodo() {
//     let infoInput = document.getElementById("info");
//     let text = infoInput.value;
//     console.log(text);
//     const newItem = { isCompleted: false, text };
//     text !== ""
//       ? setTodos(
//           //يمكن استخدام spread
//           //[...todos,newItem]
//           todos.concat(newItem)
//         )
//       : (infoInput.value = "");
//     infoInput.value = "";
//   }
//   const handelItemDone = (index) => {
//     const newtodos = [...todos];
//     newtodos[index].isCompleted = !newtodos[index].isCompleted;

//     setTodos(newtodos);
//   };

//   return (
//     <div className="App">
//       <h1>To do List</h1>
//       <ul>
//         {todos.map(({ text, isCompleted }, index) => {
//           return (
//             <li
//               className={isCompleted ? "done" : ""}
//               onClick={() => handelItemDone(index)}
//               key={index}>
//               {text}
//             </li>
//           );
//         })}
//       </ul>
//       <input id="info" ref={ref} placeholder="Enter todo..." />
//       <button onClick={addTodo}>add</button>
//     </div>
//   );
// }
// export default App;
