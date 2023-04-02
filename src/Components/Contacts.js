import React, { useState } from "react";
import NavBar from "./NavBar";
import { toast } from 'react-toastify';
import { Form, Button, Grid, Header, Segment, Divider, Container, Embed } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Contacts() {

    const [name, namechange] = useState("");
    const [phone, phonechange] = useState("");
    const [email, emailchange] = useState("");
    const [message, messagechange] = useState("");

    const usenavigate = useNavigate();

    const isValidate=()=>{
        let isproceed=true;
        let errormessage="Please enter the value in "
        if(name==null || name==''){
          isproceed=false;
          errormessage += 'Name';
        }
        if(phone==null || phone==''){
          isproceed=false;
          errormessage += 'Phone';
        }
        if(email==null || email==''){
          isproceed=false;
          errormessage += 'Email';
        }
        if(!isproceed){
          toast.warning(errormessage)
        }else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
    
          }else{
              isproceed = false;
              toast.warning('Please enter the valid email')
          }
      }
      return isproceed;
    } 

    const sendMessage=(e) => {
        e.preventDefault();
            toast.success("Our team will contact you shortly")
            usenavigate('/')
    }


    return(
        <div>
            <NavBar />
            <div className="contact">
                <Grid textAlign="center" verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" textAlign="center">
                        Get in Touch
                    </Header>
                    <Form
                        className="contact-form"
                        size="large"
                        onSubmit={sendMessage}
                        >
                        <Segment stacked>
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
                            value={phone}
                            onChange={e=>phonechange(e.target.value)}
                            placeholder="Phone Number"
                            type="integer"
                            name="phone"
                        />
                        <br />

                        <Form.Input
                            fluid
                            value={email}
                            onChange={e=>emailchange(e.target.value)}
                            placeholder="Email"
                            type="text"
                            name="email"
                        />
                        <br />

                        <Form.TextArea
                            fluid
                            value={message}
                            onChange={e=>messagechange(e.target.value)}
                            cols="20"
                            placeholder="Message"
                            type="text"
                            name="message"
                        />
                        <br />
                        <Button className="contact-page-button">
                            Send Message
                        </Button>
                        </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>
            <Divider
                as="h4"
                className="map-header"
                horizontal
                style={{ margin: "1em 0em", textTransform: "uppercase" }}
                >
                -----How to find us-----
            </Divider>

            <Segment style={{ padding: "8m 0em" }} vertical>
                <Container textAlign="center">
                    <Header className="map-container-header" as="h4" style={{ fontSize: "1.5em" }}>
                        FASTLANE LUXURY MOTORS
                    </Header>
                        <p className="map-container-desc" style={{ fontSize: "0.87em" }}>
                            We are located in Diamond Plaza II, the heart of Parklands, Nairobi. Swing by our showroom to
                            ride your dream!
                            <br />
                                4th Parklands Road, Nairobi
                            <br />
                                Tel: +2123-456-788 / +2123-456-789
                        </p>
                        <iframe className="map" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8562308432856!2d36.81685221486018!3d-1.258280699082233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171b810e0cd1%3A0x60b1192466ae1597!2sDiamond%20Plaza%202!5e0!3m2!1sen!2ske!4v1680356061563!5m2!1sen!2ske" 
                            width="1200" 
                            height="650"
                            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                </Container>
            </Segment>
        </div>
    )
}

export default Contacts;