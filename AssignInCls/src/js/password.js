class password extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {customer_pw: ''};

        this.handlePWChange = this.handlePWChange.bind(this);
    }

    handlePWChange(event){
        const customer_pw = event.target.value;
        this.setState( () => {
            return {
                customer_pw
            }
        }
        );
       
    }
    render() {
        return (
            <div className="form-group">
                <input className="form-control" 
                       id="password" 
                       onChange={this.handlePWChange}                       
                       placeholder="password" 
                       type="password"
                       value={this.state.customer_pw}  />
            </div>
        )
    }   
    
    
}
 
export default password;