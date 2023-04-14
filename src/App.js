import React from 'react';
import { Navbar, Header, About, Skills, Education } from './components';

import './App.scss'

// ! rafce (React functional components)
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Education />
        </div>
    )
}

export default App

