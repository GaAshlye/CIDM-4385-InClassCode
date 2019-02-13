// const toDoList = (props) => {
//     React.createElement('ul', {}, [
//           React.createElement('li', {}, "first thing"),
//           React.createElement('li', {}, "second thing")
//         ]
//     );
//   }   

/*
  function Welcome(props) {
      return <h1>Hello, {props.name}</h1> //this is jsx
  }
*/
  class toDoList extends React.Component{
      render()
      {
        React.createElement('ul', {}, [
            React.createElement('li', {}, "first thing"),
            React.createElement('li', {}, "second thing")
          ]
      );
      }
  }
  export default toDoList; 

   //  var jsxcontent = (
          //    <ul>
          //     <li className="text-danger"> first thing</li>
          //     <li className="text-warning"> second thing</li>
          //    </ul>
          //  );