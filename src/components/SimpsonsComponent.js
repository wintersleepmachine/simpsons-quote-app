import React from 'react'

const SimpsonsComponent = (props) => {
    return (
        <div>
            <img src={props.image} alt="" style = {{height: '80vh'}}/>
            <h2>"{props.quote}"</h2>
            <p style = {{fontSize: '30px'}}> - {props.character}</p>
        </div>
    )
}

export default SimpsonsComponent 
