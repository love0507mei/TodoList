import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item => (
                    <TodoItem key = {item.id}
                              id = {item.id}
                              text = {item.text}
                              completed = {item.done}
                              delBtn = {item.show}
                              onDelItem = {this.props.onDelItem}
                              onCompleteItem = {this.props.onCompleteItem}
                              ondelBtnShow = {this.props.ondelBtnShow}
                              ondelBtnHide = {this.props.ondelBtnHide}
                    />
                ))}
            </ul>
        )
    }
}