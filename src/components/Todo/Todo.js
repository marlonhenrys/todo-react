import React from 'react'
import ItemTodo from '../ItemTodo/ItemTodo';

const Todo = ({ tarefas, completed, deleted }) => {

    return (
        <>
            <h4>Lista de Tarefas</h4>
            {tarefas.map(tarefa => (
                <ItemTodo
                    key={tarefa.id}
                    tarefa={tarefa}
                    completed={completed}
                    deleted={deleted}
                />
            ))}
        </>
    )
}

export default Todo;
