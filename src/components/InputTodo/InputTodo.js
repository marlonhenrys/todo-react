import React, { useState } from 'react';
import './styles.css';

const InputTodo = ({ inserted }) => {

    const [title, setTitle] = useState('');

    const enviar = event => {

        event.preventDefault();

        if (title.length > 0) {
            inserted(title);
            setTitle('');
        }
    }

    return (
        <>
            <h4>Nova Tarefa </h4>
            <form onSubmit={enviar}>
                <input
                    name='novaTarefa'
                    placeholder='Digite uma nova tarefa...'
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <input
                    type='submit'
                    value='Inserir' />
            </form>
        </>
    )
}

export default InputTodo;
