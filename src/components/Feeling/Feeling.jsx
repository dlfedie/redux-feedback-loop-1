import React, { Component } from 'react';
import Header from '../Header/Header'

class Feeling extends Component {
    goToNext = () => {
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                <Header />
                <h2>How are you feeling today?</h2>
                <button onClick={this.goToNext}>Next</button>
            </div>
        )
    }
}

export default Feeling;