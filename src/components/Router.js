import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import RecipeDetails from '../components/RecipeDetails';


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={RecipeDetails} />
        </Switch>
    </BrowserRouter>
);

export default Router;