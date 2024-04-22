import React from "react";


function Links(props) {
    return (
        <>
        <h3>Links</h3>
        <a key={1} href={props.github}>{props.github}</a>
        <a key={2} href={props.linkedin}>{props.linkedin}</a>
        </>
    )
}

export default Links