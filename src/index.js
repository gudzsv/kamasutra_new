import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store from "./redux/redux-store";


let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
reRender(store.getState());

store.subscribe(() => {
    reRender(store.getState());
});

serviceWorker.unregister();
