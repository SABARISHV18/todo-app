// import logo from './logo.svg';
// import './App.css';
// import Title from './component/Title';
// import Addtotodo from './component/Addtotodo'
// import React from 'react';
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <Title />
//       </div>
//       <div>
//         <Addtotodo />
//       </div>
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from './component/Title';
import Addtotodo from './component/Addtotodo'
import Todo from "./component/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <Addtotodo />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;