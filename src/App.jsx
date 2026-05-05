import { useState } from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import AddProjectForm from './components/AddProjectForm'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

// this wiil be the root component where structure and state management will take place

function App() {

  // we are using state in the app component to manage the projects on different components
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
  return saved ? JSON.parse(saved) : [];
  });
  
  // stores the searchTerm 
  const [searchTerm, setSearchTerm] = useState('');

  //to add new project to the existing list 
  const addProject = (project) => {
    setProjects(prev => [...prev, project]);
  };

  //searches through the projects
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    //brings about the structure of our app, all the components are brought together here
    <>
      <ErrorBoundary>
        <div className='container' >
          <Header />
          <AddProjectForm onAddProject={addProject} />
          <ProjectList
            projects={filteredProjects}
            onSearch={setSearchTerm} />
        </div>
      </ErrorBoundary>
    </>
  )
}

export default App;
