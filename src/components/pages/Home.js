import React, {Component} from "react";
import { FormGroup, Form, FormControl, Col, Button, ControlLabel, Checkbox } from 'react-bootstrap';
import '../../styles/login.css';
import axios from 'axios';

class Home extends Component {
  state = {
    users: []
  }
  componentWillMount(){
  //   axios.get('localhost:3306');
  //   state.users = mem;
  //  this.setState({users : mem})
  }
  render(){
    return(
      <div class="LoginForm">

      <Form horizontal>        
      <FormGroup controlId="formHorizontalFname">
          <Col componentClass={ControlLabel} sm={2}>
            First Name
            {this.state.users}
          </Col>
          <Col sm={10}>
            <FormControl type="fname" placeholder="First Name" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalLname">
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
            {this.state.users}
          </Col>
          <Col sm={10}>
            <FormControl type="lname" placeholder="Last Name" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
            {this.state.users}
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>
  
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
  
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>
  
        <FormGroup>
          <Col smOffset={3} sm={10}>
            <Button type="submit">Sign in</Button>
            <Button type="submit">Register</Button>
          </Col>
        </FormGroup>
      </Form>
  
    </div>
    )
  }
}

export default Home;
