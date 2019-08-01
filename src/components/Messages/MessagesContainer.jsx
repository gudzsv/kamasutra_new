import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState();
    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onChangeMessText = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Messages messageData={state.messagePage.messageData}
                  dialogsData={state.messagePage.dialogsData}
                  newMessageBody={state.messagePage.newMessageBody}
                  addMessage={addMessage}
                  onChangeMessText={onChangeMessText}/>
    );
}
export default MessagesContainer;