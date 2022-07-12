

import React, { useEffect } from "react";

const Home = () => {

    useEffect(()=>{
        document.title="Home"
        alert("test use effect alert ")
},[]);
    return (
        <div>
             <h1> Home componant</h1>
        </div>
    )
}
export default Home;