import React from "react";
import NavBar from "./NavBar";
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";

function Contacts() {
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
                        //   onSubmit={(event) => this.handleSubmit(event)}
                        size="large"
                        >
                        <Segment stacked>
                        <Form.Input
                            fluid
                            placeholder="Name"
                            type="text"
                            name="name"
                            //   value={this.state.name}
                            //   onChange={this.handleChange}
                        />
                        <br />

                        <Form.Input
                            fluid
                            placeholder="Phone Number"
                            type="integer"
                            name="phone"
                            //   value={this.state.phone}
                            //   onChange={this.handleChange}
                        />
                        <br />

                        <Form.Input
                            fluid
                            placeholder="Email"
                            type="text"
                            name="email"
                            //   value={this.state.email}
                            //   onChange={this.handleChange}
                        />
                        <br />

                        <Form.TextArea
                            fluid
                            cols="20"
                            placeholder="Message"
                            type="text"
                            name="message"
                            //   value={this.state.message}
                            //   onChange={this.handleChange}
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
        </div>
    )
}

export default Contacts;