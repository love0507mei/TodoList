import React from 'react';
import ReactDOM from 'react-dom';


export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.delItem = this.delItem.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.delBtnShow = this.delBtnShow.bind(this);
        this.delBtnHide = this.delBtnHide.bind(this);

    }

    delItem(e){
        this.props.onDelItem(this.props.id);
    }

    markCompleted(e){
        this.props.onCompleteItem(this.props.id);
    }

    delBtnShow(e){
        this.props.ondelBtnShow(this.props.id);
    }

    delBtnHide(e){
        this.props.ondelBtnHide(this.props.id);
    }

    render(){
        var completeState = this.props.completed ? 'done' : 'undone',
            delBtnState = 'del ' + (this.props.delBtn ? 'on' : 'leave');
        return(
            <li className={completeState} onMouseOver={this.delBtnShow} onMouseLeave={this.delBtnHide}>
                <label>
                    <input type="checkbox" onChange={this.markCompleted}/>&nbsp;
                    {this.props.text}
                </label>
                <button className={delBtnState} onClick={this.delItem}>&#215;</button>
            </li>
        )
    }

}