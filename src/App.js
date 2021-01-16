import React from "react";
import Home from './components/home';
import Projects from './components/projects';
import Education from './components/education';

function App() {

  return (
      <div> 
        <Home />
        <Projects />
        <Education />
        <div style={copyRightSection}>
            <p style={{ color: '#ffffff', fontSize: '1vw'}}>Copyright © 2021 Giovanni Sylvestre. All Rights Reserved</p>
        </div>

      </div>
      

  );
}

const copyRightSection = {
    display: 'flex',
    height: '5vh',
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center'
}

export default App;
