import React, {Component} from 'react';
import Header from '../Header/Header'

class Comments extends Component {
    goToNext = () => {
        this.props.history.push('/review');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
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

export default Comments;