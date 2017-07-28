import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldLogin = () => (
  <div>
    <TextField
      hintText="Username or email address"
      floatingLabelText="Username or email address"
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
  </div>
);

export default TextFieldLogin;
