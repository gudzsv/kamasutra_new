/*
    My Store
 */

import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: 'This socisl network is a bullshit',
                    likeCount: 55,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19hlt6seYm5CmLduU450zkGbiDo6plZABHyvfmzSWFxAhAIM8'
                },
                {
                    id: 2,
                    message: ':) XoXoXo It is real bullshit!!!!',
                    likeCount: 34,
                    avatar: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg'
                }
            ],
            newPostText: ''

        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Boris'},
                {id: 2, name: 'Nina'},
                {id: 3, name: 'Petka'},
                {id: 4, name: 'Rima'}
            ],

            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is you IT lesson'},
                {id: 3, message: 'Good'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state was changed");
    },
    getState() {
        return (this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель(обсервер - патерн)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;