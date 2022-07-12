import React from "react";
import { Card, CardBody,  CardSubtitle,  Col, Collapse, Container, Button } from "reactstrap";

const Cource = ({course}) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardSubtitle className="font-waigth-bold text-center">
                        <h1>{course.title}</h1>
                        <p>{course.desc}</p>
                    </CardSubtitle>

                    <Container className="text-center">
                        <Button color="danger">Delete</Button>
                        <Button color="warning ml-3">Update</Button>
                    </Container>

                </CardBody>
            </Card>


        </div>
    );
}
export default Cource;