import React from 'react';
import TextField from 'material-ui/TextField';


const UserForm = (props) => (
  <TextField
    hintText="Hint Text"
    value={props.userVal}
    onChange={props.onChange}
  />
);

export default UserForm;
