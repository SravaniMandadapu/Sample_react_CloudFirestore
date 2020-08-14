import React, { Component } from 'react'
import firestore from "../config"
import { Container } from 'react-bootstrap'

class Userdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userslist:""
            
        }
    }
    componentDidMount (){
        const ref=firestore.collection('users')
          ref.get()
          .then(snap=>{
            const some=snap.docs.map(doc=>doc.data())
            const someid=snap.docs.map(doc=>doc.id)
               this.setState({
                userslist:some
                  
               })
            

          })
              
        .catch(err=> console.log(err))
            // 
         
        
    }
        
    
    
    render() {
         const users=this.state.userslist
          console.log(users)
          
        return (
        <React.Fragment>
        <Container>
        
        <table border="1">
            
        <tr>
          <th>Username</th>
          <th>Email</th>
        </tr>
         {Object.keys(users).map(id=>
         // Display data in list format
        //  <ol>
        //     <li>{users[id].username}  {users[id].email}</li> 
        //  </ol>
         
              
              <tr>
                  
                  <td >{users[id].username}</td>
                  <td >{users[id].email}</td>
              </tr>
             
        
           
         )}  
        </table>
        

         
        
        </Container>
        </React.Fragment>
            
        )}     
       
}

export default Userdata
