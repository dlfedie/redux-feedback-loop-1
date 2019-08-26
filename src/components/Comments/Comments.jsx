import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    }

    selectComments = (event) => {
        this.setState({
             comments: event.target.value
        })
    }

    handleAddComments = () => {
        this.props.dispatch({
            type: 'NEW_COMMENTS_FEEDBACK',
            payload: this.state
        })
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
                <input onChange={this.selectComments}/>
                <button onClick={this.handleAddComments}>Next</button>
            </div>
        )
    }
}

export default connect()(Comments);