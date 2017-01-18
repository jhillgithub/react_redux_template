import React from 'react'
import { connect } from "react-redux"

import { create_user, update_user, user_input } from '../actions/userActions'

import { Row, Col } from 'react-grid-system'

import UserForm from './UserForm'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


@connect((store) => {
  console.log("store", store)
  return {
    user: store.user.user,
    userVal: store.user.userVal
  };
})
export default class UserPage extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
  }

  handleSubmit() {
    this.props.dispatch(create_user(this.props.userVal))
  }

  handleTextFieldChange(e) {
    console.log("event", e);
    this.props.dispatch(user_input(e.target.value));
  }


  render() {
    return (
      <div>
        {/* <TextField
          hintText="Hint Text"
          value={this.props.userVal}
          onChange={this.handleTextFieldChange}
        /> */}
        <UserForm userVal={this.props.userVal} onChange={this.handleTextFieldChange} />
        <RaisedButton
          label="Submit"
          primary={true}
          onClick={this.handleSubmit}
        />
        <h1>{this.props.userVal}</h1>
      </div>
    );
  }
}
