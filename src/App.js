import './App.css';
import resume_pdf from "./Costa-Resume.pdf";
import { useEffect } from 'react';

function NavBar(){

  return(
    <nav>
        <a href="#" class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <ul>
            <li><a>About</a></li>
            <li><a>Work Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
            <li class="Resume"><a href={resume_pdf} target="_blank">Resume</a></li>
          </ul>
    </nav>
  );
}

function App() {
  
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function(e){
      const ul = document.querySelector('nav > ul');
      ul.classList.toggle('menu-slide');
      hamburger.classList.toggle('cross');
    })
  });
  
  return (
    <div className="App">
      <header className="App-header">
      <div class="logo">
            CA
          </div>
          <NavBar/>
      </header> 
      <body className="App-body">
        <div class="Me">
          <h3>Hi my name is</h3>
          <h2>Costa Aspromourgos</h2>
          <h2>I make things for the web</h2>
          <p>I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.</p>
        </div>
      </body> 
    </div>
  );
}

export default App;
