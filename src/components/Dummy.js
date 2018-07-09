import React from 'react';

export default class Dummy extends React.Component {
    
    render() {
        console.log('rerender dummy component');
        return (
            <p>{this.props.selectedBook !== null && this.props.selectedBook.title}</p>
        )
    }
}

Dummy.defaultProps = {
    selectedBook: {
        title: "a"
    }
}