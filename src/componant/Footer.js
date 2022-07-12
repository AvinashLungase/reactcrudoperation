import React, { useEffect } from "react";
import { Container } from "reactstrap";


const Footer = () => {
   
    return (
        <div>
            <h1>This is footer</h1>
            <p>Paragraph </p>
            <Container>
                <row>
                    <col md={4}>
                        <p>
                            test conditions 
                        </p>
                    </col>
                    <col md={4}>
                        <h1> Cource</h1>
                    </col>
                    <col md={4}>
                        <H3> contact : 7776963431</H3>
                    </col>
                </row>

            </Container>
            <p> Common paragraph for footer</p>
        </div>
    );
}
export default Footer;