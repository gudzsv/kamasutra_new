const addpost = 'ADD_POST';
const updatenewposttext = 'UPDATE_NEW_POST_TEXT';
/*const updateNewMessageBody = 'UPDATE_NEW_MESSAGE_BODY';
const sendMessage = 'SEND_MESSAGE';*/
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
            newPostText: '123'

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
        }
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
    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
            avatar: " "
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageBody(newMessText) {
        this._state.messagePage.newMessageBody = newMessText;
        this._callSubscriber(this._state);
    },
    updateMessage() {
        let newBody={
            id:5,
            message: this._state.messagePage.newMessageBody
        };
        this._state.messagePage.messageData.push(newBody);
        this._state.messagePage.newMessageBody = '';
        this._callSubscriber(this._state);

    },
    dispatch(action) {
        if (action.type === addpost) {
            this.addPost();
        } else if (action.type === updatenewposttext) {
            this.updateNewPostText(action.newText);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this.updateNewMessageBody(action.body);
        } else if (action.type === 'SEND_MESSAGE') {
            this.updateMessage();
        }

    }


}
//test
export let addMess = (messageText) => {
    debugger;
    let newMess = {
        id: 5,
        message: messageText
    };
    store._state.messagePage.messageData.push(newMess);
    store._callSubscriber(store._state);

}
//
export const addPostActionCreator = () => ({type: 'ADD_POST'});
export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE_NEW_POST_TEXT',
    newText: text
});
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'});

export const updateNewMessageBodyCreator = (body) => (
    {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    });


export default store;