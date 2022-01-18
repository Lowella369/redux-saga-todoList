import React from 'react';

function ToDo({todo}) {
    return(
        <div className='ToDo'>
            <h5>Item {todo.id}</h5>
            <p>Task Name: {todo.title}</p>
            <p>Status: {todo.completed? "Done" : "Not Done"}</p>
        </div>
    );
}

export default ToDo;