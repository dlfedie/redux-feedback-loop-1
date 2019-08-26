import React, {Component} from 'react';
import Header from '../Header/Header'
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        axios.post('/api/feedback', this.props.feedback)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Review Your Feedback</h2>
           <ul>
            <li>Feelings: {this.props.reduxStore.feelingFeedback.feeling} </li>
            <li>Understanding: {this.props.reduxStore.understandingFeedback.understanding} </li>
            <li>Support: {this.props.reduxStore.supportFeedback.support} </li>
            <li>Comments: {this.props.reduxStore.commentsFeedback.comments} </li>
           </ul>

                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

const mapToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapToProps)(Review);