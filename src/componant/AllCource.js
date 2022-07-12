import React, { useState,useEffect } from "react";
import Cource from "./Cource";


const AllCource = () => {
    useEffect(()=>{
        document.title="All Cource"
    },[]);

    const [ courses, setCourses ] = useState([
        { title: "title 1 ", desc: "discruption1" },
        { title: "title 2 ", desc: "discruption2" }, 
        { title: "title 3 ", desc: "discruption3" },
        { title: "title 4 ", desc: "discruption4" }
    ]);

    return (
        <div>
            <h1> All cources</h1>
            <p> 
                List off cources are follows
            </p>
            {courses.length > 0 ? courses.map((item) =>
                <Cource course={item} />
            ) : "No cources"
            }
        </div>
    );
}
export default AllCource;