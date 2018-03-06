import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

export default class TodoApp extends React.Component{

    constructor(props){
        super(props);

        // 狀態
        this.state = {
            items: [],
            text: ""
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDelItem = this.handleDelItem.bind(this);
        this.markCompleteItem = this.markCompleteItem.bind(this);
        this.showDelBtn = this.showDelBtn.bind(this);
        this.hideDelBtn = this.hideDelBtn.bind(this);

    }

    // 存取輸入的值
    handleTextChange(e){
        this.setState({text: e.target.value})
    }

    // 新增動作
    handleAddItem(e){
        e.preventDefault();

        // 判斷是否為空值，若為空值則警告提示
        if(this.state.text.match(/^\s*$/) != null){
            this.setState((prevState) => ({
                text: ""
            }))
            alert('Please enter your todo')
            return false
        }

        // 設定新項目的內容
        var newItem = {
            id: Date.now(),
            text: this.state.text,
            done: false,
            show: false
        }

        // 將新項目的東西，用concat串進Array中
        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ""
        }))
    }

    // 刪除動作
    handleDelItem(itemId){

        // 從Array中取出非刪除之項目
        var updateItem = this.state.items.filter(item => {
            return item.id !== itemId;
        })

        // 更新items的Array
        this.setState({
            items: [].concat(updateItem)
        })
    }

    // 標記完成動作
    markCompleteItem(itemId){
        // 尋找已完成項目
        var updatedItems = this.state.items.map(item => {
            // 若找到，換狀態
            if (itemId === item.id){
                item.done = !item.done // !為not的意思
            }
            return item
        })

        this.setState({
            items: [].concat(updatedItems)
        })
    }

    // 刪除鍵浮現
    showDelBtn(itemId){
        var updatedItems = this.state.items.map(item => {
            // 若找到，換狀態
            if (itemId === item.id){
                item.show = true
            }
            return item
        })

        this.setState({
            items: [].concat(updatedItems)
        })
    }

    // 刪除鍵隱藏
    hideDelBtn(itemId){
        var updatedItems = this.state.items.map(item => {
            // 若找到，換狀態
            if (itemId === item.id){
                item.show = false
            }
            return item
        })

        this.setState({
            items: [].concat(updatedItems)
        })
    }

    render(){

        var stateFilter = 'stateFilter ';

        return(
            <div style={{ margin:'0 auto', width:'600px', textAlign:'center' }}>
                <h1>TODOS</h1>
                <form className="App">
                    <input
                        placeholder="What's your todo?"
                        style={{width:'calc(100% - 67.59px)'}}
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        type="text"
                    />
                    <button className="add" onClick={this.handleAddItem}>Add</button>
                    <hr/>
                    <TodoList items={this.state.items}
                              onDelItem={this.handleDelItem}
                              onCompleteItem={this.markCompleteItem}
                              ondelBtnShow={this.showDelBtn}
                              ondelBtnHide={this.hideDelBtn}
                              onfilterCompleted={this.filterCompletedItem}
                    />
                </form>
            </div>
        );

    }
}
