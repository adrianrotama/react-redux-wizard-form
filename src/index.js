import './index.css'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'

import App from './App'
import MainPage from './components/pages/MainPage'
import FormPage from './components/pages/FormPage'
import AcceptedPage from './components/pages/Accepted'
import RejectedPage from './components/pages/Rejected'

const store = configureStore()
injectTapEventPlugin()

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
                <Route path="form" component={FormPage}/>
                <Route path="accepted" component={AcceptedPage}/>
                <Route path="rejected" component={RejectedPage}/>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
