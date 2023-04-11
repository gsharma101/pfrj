import React from 'react';
import { Navbar, Header, About } from './components';

import './App.scss'

// ! rafce (React functional components)
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
        </div>
    )
}

export default App

