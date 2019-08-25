import React, { Component } from 'react';
import Header from '../Header/Header'

class Support extends Component {
    goToNext = () => {
        this.props.history.push('/comments');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
                <button onClick={this.goToNext}>Next</button>
            </div>
        )
    }
}

export default Support;