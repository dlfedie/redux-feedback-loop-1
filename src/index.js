import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feelingFeedback = (state = feedback, action) => {
    switch (action.type) {
        case 'NEW_FEELING_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const understandingFeedback = (state = feedback, action) => {
    switch (action.type) {
        case 'NEW_UNDERSTANDING_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const supportFeedback = (state = feedback, action) => {
    switch (action.type) {
        case 'NEW_SUPPORT_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const commentsFeedback = (state = feedback, action) => {
    switch (action.type) {
        case 'NEW_COMMENTS_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const reviewFeedback = (state = [], action) => {
    switch(action.type) {
        case 'NEW_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        feelingFeedback,
        understandingFeedback,
        supportFeedback,
        commentsFeedback,
        reviewFeedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
