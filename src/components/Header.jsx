import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from './Button';




// CSS in JS

// const headerStyling ={
//     color: 'white',
//      backgroundColor: '#2b3463',
//       margin: 0
// }

const Header = (/* props */ { title ,onAdd}) => {
  // const {title} = props;

  let [counts,setCounter] = useState(0);

  const click = () =>{
    // console.log('in click method',counts);
    counts = counts + 1;
    setCounter(counts);
    // console.log("count changed",counts);
}

  return (
    // console.log("After Count:",counts),
    <header className="header">
      {/* This title is received from parent using props */}
      {/* <h1 className="container"> {title} </h1> */}


      <h1 > {title} </h1>
     <Button color="green" text="Add" onClick={onAdd}/>
    </header>
  );
};

//if value comes from parent then default props is overridden else it will be used
Header.defaultProps = {
  title: "This is default props",
};

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Header;
