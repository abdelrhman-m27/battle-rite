import React, {Component} from 'react'
import {Switch, Route, Redirect} from '../node_modules/react-router-dom/umd/react-router-dom'

import * as firebase from 'firebase'

// Components
import Header from './components/Shared/Header'

import Home from './components/Home/Home'
import News from './components/News/News'
import Guides from './components/Guides/Guides'
import Champions from './components/Guides/Champions'
import Videos from './components/Videos/Videos'
import Staff from './components/Staff/Staff'
import Contact from './components/Contact/Contact'

import Auth from './components/Auth/Auth'
import Signup from './components/Auth/Signup'

// Admin
import AHeader from './components/Admin/Shared/Header'
import Admin from './components/Admin/Admin'
// import Afunctions from './components/Admin/Afunctions'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'dark',
            isAuthenticated: false
        }
    }

    switchTheme = (theme) => {
        this.setState({theme})
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({isAuthenticated: true})
            } else {
                this.setState({isAuthenticated: false})
            }
        })
    }

    render() {
        return (
            <div className={`App h-100 ${this.state.theme}-theme bg-${this.state.theme}`} data-theme={this.state.theme}>
                <Header theme={this.switchTheme}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route exact path='/guides' component={Guides}/>
                    <Route path='/champions/:id' component={Champions}/>
                    <Route path='/videos' component={Videos}/>
                    <Route path='/staff' component={Staff}/>
                    <Route path='/contact' component={Contact}/>

                    <Route path='/signup' component={Signup}/>
                    <Route path='/login' component={Auth}/>

                    {this.state.isAuthenticated ? <Route>
                        <div className="row">
                            <AHeader/>
                            <Route path='/admin/:sectionName' component={Admin}/>
                            {/*<Route path='/admin/:sectionName/:function' component={Afunctions}/>*/}
                        </div>
                        </Route> :
                        <Route>
                            {/*<Redirect to="/"/>*/}
                        </Route>
                    }
                </Switch>
            </div>
        )
    }
}

/*const NoMatch = () => (
    <div>
        <h3>
            404
        </h3>
    </div>
);*/
