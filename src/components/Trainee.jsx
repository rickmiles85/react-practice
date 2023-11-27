// Compentn names MUST be capitalised
// props is always the tag within the component
function Trainee(props) {

    
    console.log("Trainee:", props);
    console.log("Name:", props.name);
    console.log("Age", props.age);
    console.log("Job Title", props.jobtitle);

    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Job Title: {props.jobtitle}</p>
        </div>
);
}
// lets you import the function into another file
export default Trainee;