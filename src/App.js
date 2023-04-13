import React from 'react';
import { Navbar, Header, About, Skills } from './components';

import './App.scss'

// ! rafce (React functional components)
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Skills />
        </div>
    )
}

export default App

