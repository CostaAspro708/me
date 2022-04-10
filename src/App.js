import './App.css';
import resume_pdf from "./Costa-Resume.pdf";
import { useEffect } from 'react';

function NavBar(){
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function(e){
      const ul = document.querySelector('nav > ul');
      ul.classList.toggle('menu-slide');
      hamburger.classList.toggle('cross');
      document.body.classList.toggle('fixed-position');

    })
  });
  return(
    <nav>
        <a href="#" class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <ul>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Work Experience</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
            <li class="Resume"><a href={resume_pdf} target="_blank">Resume</a></li>
          </ul>
    </nav>
  );
}

function SideBar(){

  return(
    <div class="sidebar">
      <ul>
      <li>github</li>
      <li>linked in</li>
      </ul>
    </div>
  );
}

function App() {
  
  
  
  return (
    <div className="App">
      <header className="App-header">
      <div class="logo">
            CA
          </div>
          <NavBar/>
      </header> 
      <body className="App-body">
        <SideBar/>
        <div class="Me">
          <h3>Hi my name is</h3>
          <h2>Costa Aspromourgos</h2>
          <h2>I'm a Software Engineering student looking for an internship</h2>
          <p class="para"> A I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passI am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.ion for.</p>
        </div>
      </body> 
    </div>
  );
}

export default App;
