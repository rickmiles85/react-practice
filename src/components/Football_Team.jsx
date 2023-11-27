// Compentn names MUST be capitalised
function Football_Team(props) {
    // component return html

    console.log("Football_Team:", props);
    console.log("Team Name", props.teamName);
    console.log("Founded", props.Founded);
    console.log("League", props.League);

    return (
        <div>
        <p>Name: {props.teamName}</p>
        <p>Founded: {props.Founded}</p>
        <p>League: {props.League}</p>
        </div>
);
}
// lets you import the function into another file
export default Football_Team;