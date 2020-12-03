import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {UserTable} from '../containers';


const Router = ({...props}) => (
    <Switch>
        <Route path='*'><UserTable {...props}/></Route>
    </Switch>
);


export default withRouter(Router);
