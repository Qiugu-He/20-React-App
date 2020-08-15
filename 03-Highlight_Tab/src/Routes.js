import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';

export default function Routes (){
    return (
        //Switch looks through its children <Route> and render the first one that matches the current url
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/features">
                <Features />
            </Route>
            <Route path="/" exact={true}>
                <Home />
            </Route>
        </ Switch>
    );
}
