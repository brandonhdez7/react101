import React, { Component} from 'react';

function BoilingVerdict(props){
    if(props.temperature >= 100){
        return(
            <h1>the water is boiling</h1>
        )
    }else{
        return(
            <h1>the water is not boiling</h1>
        )
    }

}

export default BoilingVerdict;