import React, { Component } from 'react'
import {Form,Button,FormGroup,FormControl, Container} from "react-bootstrap"
import firestore from "../config"

 
class postdata extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             username: ""
        }
        this.usernameChangeHandler=this.usernameChangeHandler.bind(this)
        this.emailChangeHandler=this.emailChangeHandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }
    
    //value change handlers
    emailChangeHandler=e=>{
        this.setState({
            email:e.target.value
        })
    }
    usernameChangeHandler=e=>{
        this.setState({
            username:e.target.value
        })
    }

    submitHandler=e=>{
    e.preventDefault()
    if(!(this.state.email===undefined && this.state.username===undefined)){
     var userdata={
         email:this.state.email,
         username:this.state.username
      }
     firestore.collection("users").add(userdata)
     .then(userdata=> {return console.log("data saved successfully")})
     .catch(err=>{return console.log(err)
         
    })
      
    }
    else{
      console.log("enter valid details")
    }
}


    render() {
        return (
        <Container>
            <Form onSubmit={this.submitHandler.bind(this)} >
                <FormGroup>
                    <FormControl 
                    id="email"
                    type= "text"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.emailChangeHandler}
                    required 
                    
                    />

                </FormGroup>
                <FormGroup>
                    <FormControl 
                    id="username"
                    type= "text"
                    name="username"
                    placeholder="Enter username"
                    onChange={this.usernameChangeHandler}
                    required 
                    
                    />
                    
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Post</Button>
                </FormGroup>
            </Form>
            </Container>
        )
    }
}

export default postdata

