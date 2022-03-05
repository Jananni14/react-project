import React from "react";
import { VscBriefcase } from "react-icons/vsc";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";

function BreadCrumb() {
  return (
    <div className="row shadow-sm breadcrumb-bar">
      <div className="container-fluid">
        <nav className="custom-bc row" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <div>
                <VscBriefcase className="mx-2" color={"black"} />
                Jobs
              </div>
            </li>
            <li className="breadcrumb-item"> L3 - UX Designer</li>
          </ol>
          <div className="mx-3">
            <button className="view-job-btn">View Job Details</button>
          </div>
        </nav>
        <Row className="col-6">
          {" "}
          <button >Hi</button>
        </Row>
      </div>
    </div>
  );
}

export default BreadCrumb;
