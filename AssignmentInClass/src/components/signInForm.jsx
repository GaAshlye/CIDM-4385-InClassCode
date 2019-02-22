import React, { Component } from "react";
import Email from "./email";
import Password from "./password";
import Login from "./login";

class signInForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="signIn">
            <section className="py-5 background">
              <div className="container background">
                   <form action="">
                   <Email />
                   <Password />
                   <Login />    
                    </form>
               
              </div>
            </section>
            </div>
         );
    }
}
 
export default signInForm;