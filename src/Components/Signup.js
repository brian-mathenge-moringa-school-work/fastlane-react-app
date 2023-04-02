// import React from "react";


// function Signup() {
//     return(
//         <div className="signup">Signup</div>
//     )
// }

// export default Signup;

import React, { Component, useState } from "react";
import "../App.css";
import { toast } from 'react-toastify';
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  // const [id, idchange] = useState("");
  const [email, emailchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [confirmpassword, confirmpasswordchange] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit=(e) => {
    e.preventDefault();
    const regobj={email,name,password,confirmpassword};
    // console.log(regobj);

    fetch("https://fastlane.onrender.com/users",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res) => {
      toast.success('Registered successfully.')
      navigate('/login')
    }).catch((err) => {
      toast.error('Failed :'+err.message);
    });
  }

  return (
    <div className="signup">
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Create Your Account
        </Header>
        <Form
          className="signup-form"
          size="large"
          onSubmit={handleSubmit}
        >
          <Segment stacked>
            <Form.Input
              fluid
              value={email}
              onChange={e=>emailchange(e.target.value)}
              placeholder="E-mail address"
              type="text"
              name="email"
            />
            <br />

            <Form.Input
              fluid
              value={name}
              onChange={e=>namechange(e.target.value)}
              placeholder="Name"
              type="text"
              name="name"
            />
            <br />

            <Form.Input
              fluid
              value={password}
              onChange={e=>passwordchange(e.target.value)}
              placeholder="Password"
              type="password"
              name="password"
            />
            <br />

            <Form.Input
              fluid
              value={confirmpassword}
              onChange={e=>confirmpasswordchange(e.target.value)}
              placeholder="Confirm Password"
              type="password"
              name="password_confirmation"
            />
            <br />
            <Button className="signup-page-button">
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
);
};

export default Signup