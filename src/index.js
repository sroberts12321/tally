import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import GameScreen from './components/game-screen'
import Home from './components/home'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<BrowserRouter>
    <Provider store = {store}>
        <App>
            <Switch>
                <Route path = '/' component={Home}/>
            </Switch>
        </App>
    </Provider>
</BrowserRouter>

, document.getElementById('root'));