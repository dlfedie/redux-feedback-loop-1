import React, { Component } from 'react';
import Header from '../Header/Header'

class Understanding extends Component {
    goToNext = () => {
        this.props.history.push('/support');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>How well are you understanding the content?</h2>
                <button onClick={this.goToNext}>Next</button>
            </div>
        )
    }
}

export default Understanding;