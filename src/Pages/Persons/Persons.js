import React from 'react';
import { withRouter } from 'react-router-dom';

const Persons = (props) => {
    const personsArray = [
        { id: 0, name: "Person 1" },
        { id: 1, name: "Person 2" },
        { id: 2, name: "Person 3" },
    ];

    const clickedPerson = (id) => {
        console.log("Clicked Person : ", id);
        // PaymentResponse.histroy
        props.history.push("/person/" + id);
    }

    return personsArray.map(person => <div onClick={() => clickedPerson(person.id)} key={person.id}>{person.name}</div>);
}

export default withRouter(Persons);