import React, { Fragment } from "react";
import { Container, Form, FormGroup,Button , Input} from "reactstrap";

const AddCource = () => {
    return <Fragment>
        <h1 className="text-center"> Fill cource details</h1>
        <Form>
            <FormGroup>
                <label for="userId"> Name </label>
                <Input type="text" placeholder="Enter name " name="name" id="userId" />
            </FormGroup>
            <FormGroup>
                <label for="emilId"> Email </label>
                <Input type="text" placeholder="Enter email " name="email" id="emailId" />
            </FormGroup>
            <FormGroup>
                <label for="mobileId"> Mobile No </label>
                <Input type="text" placeholder="Enter mobile no " name="mobile_no" id="mobileId" />
            </FormGroup>
            <FormGroup>
                <label for ="messageId"> Message </label>
                <Input type="textarea" placeholder="Enter Password " name="password" id="messageId" />
            </FormGroup>
            <Container className="text-center">
                <Button color="success"> Save</Button> <Button color="danger"> Cancle</Button>
            </Container>
        </Form>
    </Fragment>
}
export default AddCource;