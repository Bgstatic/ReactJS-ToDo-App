import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './styles/App.css';
import Todo from './components/Todo';
import db from './firebase/firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  useEffect(() => {
    
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     
    setTodos(snapshot.docs.map(doc => doc.data().todo))
      
    });

  }, [])

  const addTodo = (event) => {

    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    setInput('');

  }
  return (
    <div className="App">
      <h1>React ToDo App</h1>
      <form>
        <FormControl>
          <InputLabel>Add Items</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)} placeholder="Add Item..." />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} color="primary" variant="contained">Add</Button>
      </form>

      <ul>
        {todos.map(todo => (

          <Todo todo={todo} />

        ))}
      </ul>
    </div>
  );
}

export default App;
