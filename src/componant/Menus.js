import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem} from "reactstrap";

const Menus = () => {
    return (
        <div>
            <ListGroup>
                <Link tag="a" to="/home" action>
                    Home
                </Link>
                <Link tag="a" to="/add-course" action>
                    Add course
                </Link>
                <Link tag="a" to="/all-course" action>
                    AllCource
                </Link>
                <Link tag="a" to="/.." action>
                    About
                </Link>
                <Link tag="a" to="/..." action>
                    AddCource
                </Link>
            </ListGroup>
        </div>
    );
}
export default Menus;