import React from 'react';
import s from './Messages.module.css';
import Message from "./Mesage/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator} from "../../redux/store";


const Messages_old = (props) => {
    let dialogsElements = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messages.messageData.map(message => <Message message={message.message}
                                                                                 id={message.id}
                                                                                 dispatch={props.dispatch}
                                                                                 newMessageBody={props.newMessageBody}/>);
/*    let newMessageBody = props.newMessageBody;
    let messageElement = React.createRef();*/
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }/*
    let onNewMessageChange = () => {
        let body = messageElement.current.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }*/
    let add =()=>{
        alert("eee");
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div
                    className={s.dialogsName}>DIALOGS:
                </div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesName}>MESSAGES:</div>
                <div className={s.message}>
                    <div>{props.messagePage.messageData}</div>
                   <div className={s.answer}>
                       {messageElements}
                        <div>
                            <button onClick={add}>AddMessage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Messages_old;