//this is the AddProject component
import { useState } from "react";


//our component receives onAddProject as a prop
// to prevent errors we have used an empty function
function AddProjectForm({ onAddProject = () => { } }) {

    console.log(onAddProject)

    //we are using state to store the title, and description 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    //prevents the defaulft page reload on submission
    const handleSubmit = (e) => {
        e.preventDefault();


        //create a new object while genearating a unique id 
        const newProject = {
            id: Date.now(),
            title,
            description
        };

        // passes newly created project
        onAddProject(newProject);
        //clear input for both the title and description
        setTitle("");
        setDescription("")

    };

    return (
        //with the form we collect data for the title and  the description of the new projects 
        // handleSubmit will process the form when the button is clicked
        <div>
            <form className="card" onSubmit={handleSubmit} >
                <h2>Add Project</h2>

                <input placeholder="Title" value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                < textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddProjectForm;