import React, { Component } from "react";
class password extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
         );
    }
}
 
export default password;