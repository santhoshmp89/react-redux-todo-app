import React, {Component} from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal : ""
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" className="input-box" value={this.props.inputVal} onChange={this.props.handleInput}/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}