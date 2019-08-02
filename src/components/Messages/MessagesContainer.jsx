import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return ({
        messageData: state.messagePage.messageData,
        dialogsData: state.messagePage.dialogsData,
        newMessageBody: state.messagePage.newMessageBody
    });
};
let mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: () => {
            dispatch(sendMessageCreator());
        },
        onChangeMessText: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    });
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;