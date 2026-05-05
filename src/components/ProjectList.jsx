//this  is our Projectlist component
import ProjectCard from "./ProjectCard";
import SearchBar from './SearchBar'


// its function is displayes the lists of the projects 
function ProjectList({ projects, onSearch}) {

    //the conditions are checked here, and if meet the projects are diplayed.
    //if not you are asked to add one
    if (projects.length === 0){
        return <div className="card">No Projects yet. Add one!</div>;
    }

    return (
        // on search the projects are displayed because of the searchBar. 
        // a list is diplayed because of the loop(map) that goes through the projects array
        <div className="card">
            <SearchBar onSearch={onSearch} />

            {projects.length === 0 ?(
                <div className="empty">
                    <h3>No project found</h3>
                    <p> Add your project</p>
                </div>
            ):(
            projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))
    )}
    </div>
    );
}

export default ProjectList;