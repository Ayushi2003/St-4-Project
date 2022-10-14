import React from 'react';
import myGif from './404.gif';
const PageNotFound= () =>{
	return (
        <div style={{background: "#5da5da"}}>
         <h1 style={{textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF"}}>Page Not Found</h1>
          <img src={myGif} alt="my-gif" style={{height: "590px", display: 'block', alignItems: 'center', justifyContent: 'center', margin: "0 auto"}}/>
          
        </div>
      );
}
export default PageNotFound;