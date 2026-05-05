//This is the ProjectCard component
// it represents the single project
// receives project as a prop
//it is reposonsible for displaying details 
function ProjectCard({ project }) {
    return (
        <div className="project">
            <div className="image-placeholder">X</div>
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;