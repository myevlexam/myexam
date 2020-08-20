import React from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


function Leftside() {

    const value = 0.66;

 return <div>
 
 <CircularProgressbarWithChildren value={66}>

  <p style={{fontWeight:"bold"}}>Accuracy</p>

  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong>75%</strong> 
  </div>
</CircularProgressbarWithChildren>

<div>

<small>Completed </small><br/> 

<span ><h3 style={{display:"inline"}}>100</h3> <span style={{fontSize:"12px"}}>problems</span></span>

</div>
<div>

<small>Correct </small><br/> 

<span ><h3 style={{display:"inline"}}>75</h3> <span style={{fontSize:"12px"}}>problems</span></span>

</div>


  </div>
}

export default Leftside;
