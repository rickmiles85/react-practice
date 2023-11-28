//Imports the prop-types library from the node modules folders
import PropTypes from 'prop-types';
import React from "react";
// Compentn names MUST be capitalised
// props is always the tag within the component
function King(props) {

    console.log("King:", props);
    console.log("Name:", props.name);
    console.log("City:", props.city);
    console.log("House", props.house);
    console.log("Years", props.years);

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>City: {props.city}</p>
            <p>House: {props.house}</p>
            <p>House: {props.years}</p>
        </div>
    );
}

King.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    house: PropTypes.string,
    years: PropTypes.number,

}

// lets you import the function into another file
export default King;