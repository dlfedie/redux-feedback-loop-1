import React, { Component } from 'react';
import Header from '../Header/Header'
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: ''
    }

    selectSupport = (event) => {
        this.setState({
            support: Number(event.target.value)
        })
    }

    handleAddSupport = () => {
        this.props.dispatch({
            type: 'NEW_SUPPORT_FEEDBACK',
            payload: this.state
        })
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
                <select onChange={this.selectSupport}>
                    <option selected value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleAddSupport}>Next</button>
            </div>
        )
    }
}

export default connect()(Support);