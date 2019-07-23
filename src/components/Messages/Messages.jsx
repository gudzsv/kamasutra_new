import React from 'react';
import s from './Messages.module.css'
import {sendMessageCreator, updateNewMessageBodyCreator,} from "../../redux/state";
import Message from "./Mesage/Message";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {
    let messElement = props.messagePage.messageData.map(p => <Message message={p.message}
                                                                      id={p.id}/>)
    let usersElement = props.messagePage.dialogsData.map(p => <DialogItem name = {p.name}
                                                                          id={p.id}
    />)

    let newMessElement = React.createRef();
    let addMessage = () => {
        props.dispatch(sendMessageCreator());
    }
    let onChangeMessText = () => {
        let body = newMessElement.current.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div>
            <div className={s.messages}>
                <div className={s.dialogsName}>USERS:
                    <div>{usersElement}</div>
                </div>
                <div className={s.messagesName}>MESSAGES:
                    <div>{messElement}</div>
                    <div>
                        <textarea onChange={onChangeMessText}
                                  ref={newMessElement}
                                  title='input text here please'
                                  value={props.newMessageBody}/>
                        <div>
                            <button onClick={addMessage}>Press</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Messages;