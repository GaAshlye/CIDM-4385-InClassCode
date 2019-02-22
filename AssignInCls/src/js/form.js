import password from "./password";

class form extends Component {
    state = {  
        email: '',
        password: ''
    }
    render() { 
        return ( 
            <div className="form-group">
            <email />
            <password />
            <submit />
            </div>
         );
    }
}
 
export default form;