import React from 'react';
import s from './Messages.module.css'
import Message from "./Mesage/Message";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {
    let messElement = props.messageData.map(m => <Message key={m.id}
                                                          message={m.message}
                                                          id={m.id}/>)
    let usersElement = props.dialogsData.map(d => <DialogItem key={d.id}
                                                              name={d.name}
                                                              id={d.id}/>)

    let onAddMessage = () => {
        props.addMessage();
    }
    let onChangeMessText = (e) => {
        let body = e.target.value;
        props.onChangeMessText(body);
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
                                  title='input text here please'
                                  value={props.newMessageBody}/>
                        <div>
                            <button onClick={onAddMessage}>Press</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Messages;