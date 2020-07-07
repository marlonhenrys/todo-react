import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header style={style}>
            <h3 style={{ margin: 0 }} >Minha Lista de Tarefas</h3>
            <Link style={linkStyle} to='/'>Tarefas</Link> | <Link style={linkStyle} to='/about'>Sobre</Link>
        </header >
    );
}

const style = {
    backgroundColor: '#7a297a',
    color: 'white',
    padding: '20px 0',
    position: 'relative',
    top: 0,
    width: '100%'
}

const linkStyle = {
    textDecoration: 'none',
    marginLeft: '20px',
    marginRight: '20px',
    fontSize: '18px',
    color: 'white'
}

export default Header;
