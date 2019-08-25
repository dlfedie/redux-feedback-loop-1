import React, {Component} from 'react';
import Header from '../Header/Header'

class Review extends Component {
    goToNext = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>Review</h2>
                <button onClick={this.goToNext}>Submit</button>
            </div>
        )
    }
}

export default Review;