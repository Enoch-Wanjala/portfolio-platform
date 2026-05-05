//this is our search component 
//searches for the projects using
// onSearxh has been passed as a prop
function SearchBar({ onSearch }) {
    return (
        //tracks the changes (onChange) as it filters(onSearch) through the projects
        <input 
        className="search"
        placeholder="Search Project"  
        onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchBar;