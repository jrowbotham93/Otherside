import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './Components/About'

export default (
    <Switch>
        <Route path='/About'component={About}/>
    </Switch>
)