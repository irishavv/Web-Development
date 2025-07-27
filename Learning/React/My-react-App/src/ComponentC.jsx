import React, {useContext} from "react";
import { UserContext } from "./ComponentA";

import ComponentD from "./ComponentD";



function ComponentC(){   //(props)

    const user = useContext(UserContext);


    return(
        <div className="c-box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />    {/*  //user={props.user}  */}
        </div>
    );

}

export default ComponentC