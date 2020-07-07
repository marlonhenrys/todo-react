import React from 'react'
import PropTypes from 'prop-types';
import './styles.css';

const ItemTodo = ({ tarefa, completed, deleted }) => {

    const markCompleted = {
        textDecoration: tarefa.completed ? 'line-through' : 'none',
        color: tarefa.completed ? 'black' : 'white'
    }

    return (
        <div className='ItemTodo'>
            <input
                type='checkbox'
                checked={tarefa.completed}
                onChange={() => completed(tarefa.id)}
            />
            <h6
                style={markCompleted}>
                {tarefa.title}
            </h6>
            <button
                disabled={tarefa.completed}
                className='btn-excluir'
                onClick={() => deleted(tarefa.id)}>
                &times;
            </button>
        </div>
    )
}

ItemTodo.propTypes = {
    tarefa: PropTypes.object.isRequired
}

export default ItemTodo;