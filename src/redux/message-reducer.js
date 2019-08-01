const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {
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
};

const messageReducer = (state = initState, action) => {

    let updateNewMessageBody = (newMessText) => {
        state.newMessageBody = newMessText;
    }
    let updateMessage = () => {
        let newBody = {
            id: 5,
            message: state.newMessageBody
        };
        state.messageData.push(newBody);
        state.newMessageBody = '';
    }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            updateNewMessageBody(action.body);
            return (state);
        case SEND_MESSAGE:
            updateMessage();
            return (state);
        default:
            return (state);
    }

}

export const sendMessageCreator = () => ({
    type: 'SEND_MESSAGE'
});
export const updateNewMessageBodyCreator = (body) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    body: body
});

export default messageReducer;