import './App.css';
import resume_pdf from "./Costa-Resume.pdf";
import { useEffect } from 'react';

import Link from '@material-ui/core/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import Emoji from "./components/Emoji";
import programmerImg from "./img/generic-programmer.jpg";

import Projects from "./components/Projects";

import $ from "jquery";
function NavBar(){

  return(
    <nav>
        <a href="#" class="hamburger" id="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <ul>
            <li><a class="about_link">About</a></li>
            <li><a class="skills_link">Skills</a></li>
            <li><a class="projects_link">Projects</a></li>
            <li><a class="contact_link">Contact</a></li>
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

    $(".about_link").click(function() {
      $('html,body').animate({
          scrollTop: $(".about").offset().top},
          'slow');
    });

    $(".skills_link").click(function() {
      $('html,body').animate({
          scrollTop: $(".skills").offset().top},
          'slow');
    });

    $(".projects_link").click(function() {
      $('html,body').animate({
          scrollTop: $(".projects").offset().top},
          'slow');
    });

    $(".contact_link").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact").offset().top},
          'slow');
    });

    

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
            <h3>I love to build all types of things</h3>
          </div>
          <h3>/&gt;</h3>
          <div class="my_resume"> <a href={resume_pdf} target="_blank">Resume</a> </div>
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
            <div class="languages">
              <h5 class="skill_heading">Languages</h5>
              <ul>
                <li>Javascript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Java</li>
                <li>C</li>
                <li>C#</li>
                <li>SQL</li>
              </ul>
            </div>
            <div class="frameworks">
              <h5 class="skill_heading">Frameworks</h5>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div class="other">
              <h5 class="skill_heading">Other</h5>
              <ul>
                <li>AWS</li>
                <li>Git</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="projects">
          <h1>Noteworthy Projects</h1>
          <Projects/>
        </div>
        <div class="sidebar-container">
         
          </div>
        <div class="contact">
          <h1>Contact Me!</h1>
          <p>I would love to hear from you feel free to contact me through my email or mobile.</p>
          <ul>
            <li> <h1> <a href="mailto: cgaspro@gmail.com">cgaspro@gmail.com</a> </h1></li>
            <li> <h1> 0447 364 567 </h1></li>
          </ul>
        </div>
        <SideBar/> 
      </body>
      
    </div>
  );
}

export default App;
