import React from "react";
import { SpinnerClass } from './spinnerStyles';

const Spinner = () =>{
    return(
        <>
        <SpinnerClass>
            <div className="loader"></div>
        </SpinnerClass>
        </>
    )
}

export default Spinner;