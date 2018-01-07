import React from 'react';

const AboutPage = (props) => {
    console.log(props);
    return (
        <div>
            <div>About Page</div>
            <p>Param id is : {props.match.params.id || 1 }</p>
        </div>
    )
}

export default AboutPage

