import './App.css';
import resume_pdf from "./Costa-Resume.pdf";

function NavBar(){

  return(
    <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>Work Experience</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
            <li class="Resume"><a href={resume_pdf} target="_blank">Resume</a></li>
          </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="logo">
            Costa Aspromourgos
          </div>
          <NavBar/>
      </header>
      <body className="App-body">
        body
      </body>
    </div>
  );
}

export default App;
