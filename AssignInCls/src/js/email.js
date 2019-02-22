class email extends React.Component {


    //constructor
    constructor(props){
        super(props);
        this.state = {customer_email: ''};

        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(event){
        const customer_email = event.target.value;
        this.setState( () => {
            return {
                customer_email
            }
        }
        );
       
       }
    render() {
        return (
            <div className="form-group">
                <input className="form-control" 
                       id="email" 
                       onChange={this.handleEmailChange}                       
                       placeholder="email" 
                       type="input"
                       value={this.state.customer_email}  />
            </div>
        )
    }
    
}
 
export default email;