import React, { Component, useEffect, useState } from "react";
import {
  Form,
  Grid,
  Button,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import "../App.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, emailupdate] = useState('')
  const [password, passwordupdate] = useState('')

  const usenavigate = useNavigate()

  useEffect(()=>{
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validate()){
      // console.log('proceed')
      fetch("https://fastlane.onrender.com/users/").then((res)=>{
        return res.json();
      }).then((resp)=>{
        // console.log(resp)
        if (Object.keys(resp).length === 0) {
          toast.error("Please enter valid email")
        }else {
          if (resp.password !== null) {
            toast.success('Success');
            sessionStorage.setItem('email', email)
            usenavigate('/')
          } else {
            toast.error("Please enter valid credentials")
          }
        }
      }).catch((err)=>{
        toast.error('Login Failed due to :'+err.message);
      })
    }
  }

  const validate=()=>{
    let result=true;
    if(email==='' || email===null){
      result=false;
      toast.warning('Please enter your Email')
    }
    if(password==='' || password===null){
      result=false;
      toast.warning('Please enter your Password')
    }
    return result;
  }

    return (
      <div className="login">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center">
              Log-in to your account
            </Header>
            <Form
              className="login-form"
              size="large"
              onSubmit={ProceedLogin}
            >
              <Segment stacked>
                <Form.Input
                  fluid
                  value={email}
                  onChange={e=>emailupdate(e.target.value)}
                  // icon="user"
                  // iconPosition="left"
                  type="text"
                  name="email"
                  placeholder="E-mail address"
                />
                <br />

                <Form.Input
                  fluid
                  value={password}
                  onChange={e=>passwordupdate(e.target.value)}
                  // icon="lock"
                  // iconPosition="left"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <br />

                {/* <input type='submit'/>  */}
                <Button className="login-button-page" color="olive" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="/signup">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

export default Login;