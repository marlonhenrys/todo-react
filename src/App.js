import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todo/Todo';
import InputTodo from './components/InputTodo/InputTodo';
import Header from './components/layout/Header/Header';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

const App = () => {

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => {
        setTarefas([...response.data]);
      })
  }, []);

  const check = id => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id)
        tarefa.completed = !tarefa.completed;

      return tarefa;
    }))
  }

  const deletar = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => {
        setTarefas([...tarefas.filter(tarefa => tarefa.id !== id)])
      })
  }

  const inserir = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title })
      .then(response => {
        const { title, completed } = response.data;
        const id = tarefas[tarefas.length - 1].id + 1;
        setTarefas([...tarefas, { id, title, completed }]);
      })
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <>
            <InputTodo
              inserted={inserir} />
            <Todo
              tarefas={tarefas}
              completed={check}
              deleted={deletar} />
          </>
        )} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
