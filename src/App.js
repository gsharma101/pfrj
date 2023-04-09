import React from 'react';
import { Navbar, Header } from './components';

import './App.scss'

// ! rafce (React functional components)
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
        </div>
    )
}

export default App

