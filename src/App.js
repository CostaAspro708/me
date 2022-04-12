import './App.css';
import resume_pdf from "./Costa-Resume.pdf";
import { useEffect } from 'react';

import Link from '@material-ui/core/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import Emoji from "./components/Emoji";

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
            <li><a href='#'>Experience</a></li>
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
        <li> 
            <Link href="https://github.com/CostaAspro708" class='link' target="_blank"> <GitHubIcon sx={{ fontSize: 35 }}/> </Link>
          </li>
          <li> 
            <Link href="https://github.com/CostaAspro708" class='link' target="_blank"> <LinkedInIcon sx={{ fontSize: 35 }}/> </Link>
          </li>
          <li> 
            <Link href="https://github.com/CostaAspro708" class='link' target="_blank"> <FacebookIcon sx={{ fontSize: 35 }}/> </Link>
          </li>
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
      
      <body className="App-body" class="app-body">
        <div class="intro">
          <h3>&lt;</h3>
          <div class="hi">
            <h3>Hi, there <Emoji symbol="👋"/> </h3>
            <h2>I'm </h2> <h2 class="name">Costa Aspromourgos</h2>
            <h3>I love to build all types things</h3>
          </div>
          <h3>/&gt;</h3>
          </div>
          <div class="contact">
            Contact Me
          </div>
          <div class="about">
            <p class="para"> A I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passI am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion for.ion for.</p>
          </div>
      </body> 
      <SideBar/>
    </div>
  );
}

export default App;
