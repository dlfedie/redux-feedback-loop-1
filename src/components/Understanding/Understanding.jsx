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
                <select>
                    <option selected value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.goToNext}>Next</button>
            </div>
        )
    }
}

export default Understanding;