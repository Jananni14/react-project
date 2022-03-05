import React from "react";
import Header from "./Components/Header";
import Breadcrumb from "./Components/Breadcrumb";
import Table2 from "./Components/Table2";
import TableHeader from "./Components/TableHeader";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SideNavBar from "./Components/SideNavBar";
import "./styles.scss";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="col-l" id="sidebar-wrapper">
          {/* <SideNavBar /> */}
        </Col>
        <Col xs={10} className="col-r" id="page-content-wrapper">
          <Header />
          <Breadcrumb />
          <Row className="table-container">
            <TableHeader />
            <Table2 />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
