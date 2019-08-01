import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Messages from "./components/Messages/Messages"
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile   store={props.store}/>}/>
                <Route path='/messages' render={() => <Messages messagePage={props.state.messagePage}
                                                                dispatch={props.dispatch}
                                                                newMessageBody={props.state.messagePage.newMessageBody}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
    );
}
export default App;
