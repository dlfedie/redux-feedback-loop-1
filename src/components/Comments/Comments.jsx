import React, {Component} from 'react';
import Header from '../Header/Header'

class Comments extends Component {
    goToNext = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <Header />
                <h2>Any comments you want to leave?</h2>
                <button onClick={this.goToNext}>Next</button>
            </div>
        )
    }
}

export default Comments;