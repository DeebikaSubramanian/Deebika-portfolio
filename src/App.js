import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skill from './components/skill/Skill'
import Project from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './App.css'
import Resume from './components/resume/Resume';

function App() {
  return (
    <div>

    <Header/>
    <Home/>
    <Skill/>
    <Project/>
    {/* <Resume/> */}
    <Contact/>
    </div>
    

  )
}

export default App