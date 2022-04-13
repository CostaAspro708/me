import './App.css';
import resume_pdf from "./Costa-Resume.pdf";
import { useEffect } from 'react';

import Link from '@material-ui/core/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import Emoji from "./components/Emoji";
import programmerImg from "./img/generic-programmer.jpg";

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
            <li><a>Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
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
  
  useEffect(() => {
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function(e){
      const ul = document.querySelector('nav > ul');
      ul.classList.toggle('menu-slide');
      hamburger.classList.toggle('cross');
      document.body.classList.toggle('fixed-position');
    })
  });
  
  return (
    <div class="App">
      <header className="App-header">
      <div class="logo">
            CA
          </div>
          <NavBar/>
      </header> 
      <body className="App-body">
      <div class="intro">
          <h3>&lt;</h3>
          <div class="hi">
            <h3>Hi, there <Emoji symbol="👋"/> </h3>
            <h2>I'm </h2> <h2 class="name">Costa Aspromourgos</h2>
            <h3>I love to build all types things</h3>
          </div>
          <h3>/&gt;</h3>
          </div>
        <div class="about">
          <h1>About Me</h1>
          <div class="container">
            <p>Hello, I am a third-year university student currently undertaking a Bachelor of Engineering majoring in Software and Computer Systems at the Queensland University of Technology, which I have an immense passion and intrest for. I am currently looking for a developer/software-engineering position so feel free to contact me.</p> <img class="img" src={programmerImg}/>
            
          </div>
        </div>
        <div class="skills">
          <h1>My Skills</h1>
          <div class="container">
            <ul class="frameworks">
              <li>skill 1</li>
              <li>skill 2</li>
              <li>skill 3</li>
            </ul>
          </div>
        </div>
        <div class="Me">
                 </div>
        <div class="sidebar-container">
          <SideBar/> 
          </div>
      </body>
      
    </div>
  );
}

export default App;
