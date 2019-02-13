 /* ReactDOM.createElement(
                1. what hmtl element do you want to make?,
                2. Are there any attribute/properties you need to pass so that I can configure this new element?
                3. What content shall i place in this element OR
                4. (only if you have children) children (for nesting other elements) 
                )
*/
/* Notes
            //const is static and can let it be reused
            //let is what they are using to create variables
            //called a function based component, const/let are new ways to describe variables                

*/

/*examples:
   
            // var content = React.createElement('p', {}, "Our content here");
            // var content2 = React.createElement('ul', {},
            //     React.createElement('li', {}, "First thing"),
            //     React.createElement('li', {}, "Second thing"),);


            var root = document.getElementById('root'); 
            var Car ={
              make: "Ford", //these are properties
              motor: {
                cylinders: "4-cylinder",
                displacement: "38-liter",
                horsepower: 350
            }


*/

import React from "react";
var root = document.getElementById('root');
var thingy = React.createElement('div', null, React.createElement('ToDoList', {}, ));
ReactDOM.render(thingy, root);   
