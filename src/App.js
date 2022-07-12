import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './componant/Header';
import Home from './componant/Home';
import AllCource from './componant/AllCource';
import AddCource from './componant/AddCource';
import Menus from './componant/Menus';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/home" element={<Home/>} exact ></Route>
                <Route path="/all-course" element={<AllCource/>} exact />
                <Route path="/add-course" element={<AddCource/>} exact />
              
              </Routes>
            </Col>
          </Row>
          <Footer/>
        </Container>
      </Router>
    </div>
  );

}

export default App;
