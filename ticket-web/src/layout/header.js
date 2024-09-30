import React from "react";

const header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 d-flex flex-wrap">
            <p classNameName="d-flex me-4 mb-0">
              <i className="fa fa-user-o me-2" style={{ color: "red" }}></i>
              <strong className="text-dark">
                Welcome to Music Festival 2025
              </strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
