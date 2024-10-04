import React from "react";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TopBar = ({ isAuthenticated, logout }) => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="top-left">
              <ul className="list-main">
                <li>
                  <i className="ti-headphone-alt"></i> +060 (800) 801-582
                </li>
                <li>
                  <i className="ti-email"></i> support@shophub.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="right-content">
              <ul className="list-main">
                <li>
                  <i className="ti-power-off"></i>
                  {isAuthenticated ? (
                    <Link onClick={logout}>Cerrar Sesion</Link>
                  ) : (
                    <Link to="/login">Iniciar Sesion</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

TopBar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { logout })(TopBar);
