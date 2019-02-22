import password from "src/js/password";

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {customer_email: '', customer_pw: ''};
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEmailChange = this.handlePWChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleEmailChange(event) {
        this.setState({customer_email: event.target.customer_email});
      }
      handlePWChange(event) {
          this.setState({customer_pw: event.target.customer_pw})
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit} className="form-group">
            <email />
            <password />
            <submit />
          </form>
        );
      }
    // state = {  
    //     email: '',
    //     password: ''
    // }
    // render() { 
    //     return ( 
    //         <div className="form-group">
    //         <email />
    //         <password />
    //         <submit />
    //         </div>
    //      );
    // }
}
 
export default form;