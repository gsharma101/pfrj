import React from 'react';
import { Navbar, Header, About, Skills, Education, Footer, Experience, Learning } from './components';

import './App.scss'

// ! rafce (React functional components)
const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Learning />
            <Footer />
        </div>
    )
}

export default App

