import React, { Component } from 'react';
import Header from '../Header/Header'
import {connect} from 'react-redux';


class Feeling extends Component {
    // goToNext = () => {
    //     this.props.history.push('/understanding');
    // }

    state = {
        feeling: ''
    }

    // // handleChange(event) {
    // //     this.setState({
    // //         feeling: event.target.value
    // //     });
    // // }
    // state = {
    //     feeling: []
    // }
    // handleAddFeeling = (id) => {
    //     console.log(this.state.feeling);
    //     this.props.feedback.map(feeling => {
    //         if (id = feeling.id) {
    //             return (this.setState({
    //                 ...this.state.feeling,
    //                 feeling: { feeling }
    //             }))
    //         }
    //     })
    //     let action = {
    //         type: 'NEW_FEELING_FEEDBACK',
    //         payload: this.state.feeling
    //     }
    //     this.props.dispatch(action)
    //     // this.goToNext
    // }

    selectFeeling = (event) => {
        this.setState({
            feeling: Number(event.target.value)
        })
    }


    handleAddFeeling = () => {
        this.props.dispatch({
            type: 'NEW_FEELING_FEEDBACK',
            payload: this.state
        })
        this.props.history.push('/understanding');
    }



    render() {

        // console.log(this.state);
  
        return (
            <div>
                <Header />
                <h2>How are you feeling today?</h2>
                <select onChange={this.selectFeeling}>
                    <option selected value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>       
                </select>
                <button onClick={this.handleAddFeeling}>Next</button>
            </div>
        )
    }
}


export default connect()(Feeling);

{/* <lable><input 
                    type="radio" 
                    value="0"
                    checked={this.state.feeling === "0"}
                    onChange={this.handleChange}
                />0</lable>
                <lable><input
                    type="radio"
                    value="1"
                    checked={this.state.feeling === "1"}
                    onChange={this.handleChange}
                />1</lable>
                <lable><input
                    type="radio"
                    value="2"
                    checked={this.state.feeling === "2"}
                    onChange={this.handleChange}
                />2</lable>
                <lable><input
                    type="radio"
                    value="3"
                    checked={this.state.feeling === "3"}
                    onChange={this.handleChange}
                />3</lable>
                <lable><input
                    type="radio"
                    value="4"
                    checked={this.state.feeling === "4"}
                    onChange={this.handleChange}
                />4</lable>
                <lable><input
                    type="radio"
                    value="5"
                    checked={this.state.feeling === "5"}
                    onChange={this.handleChange}
                />5</lable> */}