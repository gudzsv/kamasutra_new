import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store, {addMess} from "./redux/state";

let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addMess = {addMess}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
reRender(store.getState());

store.subscribe(reRender);

serviceWorker.unregister();
