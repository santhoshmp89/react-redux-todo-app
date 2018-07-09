import React, {Component} from 'react';
import AddForm from '../components/AddForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodo, completedTodoLists, deleteTodo} from '../actions/todoActions';

class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }
    
    handleInput = (e) => {        
        this.setState({
            inputVal: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.inputVal);
    }

    handleComplete = (e) => {
        const value = e.target.innerText;
        this.props.completedTodoLists(value);
        this.props.deleteTodo(value);
        // this.setState(function(state, props) {
        //     return {
        //         completedLists: state.completedLists.concat(value)
        //     }
        // });
        // this.setState(function(state, props) {
        //     return {
        //         todoLists: indexOf
        //     }
        // })
    }

    render() {
        console.log(this.state);
        return(
            <div>
            <AddForm inputVal={this.state.inputVal}
                handleSubmit={this.handleSubmit} 
                handleInput={this.handleInput} 
                todoLists={this.state.todoLists}/>
            <h3> Todo Lists</h3>
            <ul>
                {this.props.todoLists.map(val => {
                    return <li key={val} onClick={this.handleComplete}>{val}</li>
                })}
            </ul>
            <h4>Completed Todo Lists</h4>
            <ul>
                {this.props.completedLists && this.props.completedLists.map(val => {
                    return <li><s>{val}</s></li>
                })}
            </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoLists: state.todoList,
        completedLists: state.completedLists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTodo: addTodo, completedTodoLists: completedTodoLists, deleteTodo: deleteTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList);
