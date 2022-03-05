import React from "react";
import { Form } from "react-bootstrap";
import "./styles.scss";

function TableHeader(props) {
  const { count } = props;
  return (
    <div className="row ml-2 mt-2 table-header d-flex flex-nowrap">
      <div className="col-6 filter">
        {" "}
        All candidates -{" "}
        <Form.Select
          style={{ width: "auto" }}
          className="border-0"
          aria-label="Default select example"
        >
          <option selected>Active(11)</option>
          <option>Open</option>
        </Form.Select>{" "}
      </div>
      <div className="col-6 filter">
        Sort By
        <Form.Select
          style={{ width: "auto" }}
          className="border-0"
          aria-label="Default select example"
        >
          <option selected>Latest Updated</option>
          <option>By name</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default TableHeader;
