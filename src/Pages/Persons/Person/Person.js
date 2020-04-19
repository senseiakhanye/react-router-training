import React from 'react';
import { withRouter } from 'react-router-dom';

const Person = (props) => {
    console.log(props);
    const id = props.id || props.match.params.id;
    if (id == null || !Number.isInteger(id)) {
        return <h1>Error</h1>;
    }
    const personsArray = [
        { id: 0, name: "Person 1", surname: "This 1" },
        { id: 1, name: "Person 2", surname: "This 2" },
        { id: 2, name: "Person 3", surname: "This 3" },
    ];
    const onePerson = (+id > personsArray.length) ? <h1>Error</h1> :
        <div>
            <span>{personsArray[id].name}</span> <span>{personsArray[id].surname}</span>
        </div>;
    return (
        onePerson
    );

}

export default withRouter(Person);