import React from "react";
import "./loader.css";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading" color="primary">
      <Spinner children={true}>
        {""}
      </Spinner>
    </div>
  </div>
);
export default Loader;
