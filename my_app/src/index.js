import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Counter from './components/Counter';
import Dashboard from './components/Dashboard';
import TodoParent from './components/Todos/TodoParent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <TodoParent />
    
    </>
    
);
