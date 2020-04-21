import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
    console.log(props);
    return (
        <h1>Home Page</h1>
    );
}

export default withRouter(Home);