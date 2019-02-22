import zipCodeInput from "./zipCodeInput";

var root = document.getElementById('root');
var zipcode = React.createElement(zipCodeInput, null, null);
ReactDOM.render(zipcode, root);