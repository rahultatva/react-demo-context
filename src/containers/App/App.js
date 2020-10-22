import React from 'react';
import UsersList from './../UsersList';
import Header from './../../components/Header';
import './App.css';

/*
 * App Component
 */
const App = ()=> {
    return (
        <div className="App">
            <Header />
            <UsersList />
        </div>
    );
}

export default App;
