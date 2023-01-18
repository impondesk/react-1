import logo from './logo.svg';
// import './App.css';

import './index.css'

import { BrowserRouter, Routes, Route, HashRouter, NavLink } from 'react-router-dom';

import P1 from './p1';
import P2 from './p2';
import Contact from './contact';
import Services from './services';
import About from './about';
import Nav from './nav';
import Page from './Page';
import TodoApp from './todoApp'
import PostsApp from './postsApp';
import React from 'react';
import Counter from './counter';


export const UserContext = React.createContext();


function App() {

  return (

    <UserContext.Provider user="impondesk">

    <HashRouter>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}


      <Nav />

      <div className='bg-gray-200 h-[92vh]'>
        <main className="px-2 sm:px-4 py-2.5 w-full top-0 left-0 container flex flex-wrap items-center justify-between mx-auto">
          <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/p1" element={<P1 />} />
            <Route path="/p2" element={<P2 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/context" element={<Context />} /> */}
            <Route path="/page" element={<Page />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/posts" element={<PostsApp />} />
          </Routes>

        </main>
      </div>

    </HashRouter>

    </UserContext.Provider>
  );
}

export default App;
