import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";

import RoleCreateModal from "../components/Roles/Modals/RoleCreateModal";
import RoleEditModal from "../components/Roles/Modals/RoleEditModal";
import RoleDeleteModal from "../components/Roles/Modals/RoleDeleteModal";

import RoleList from "../components/Roles/RoleList";

import { getRoles } from "../actions/role";

const RolesEditListPage = ({ getRoles, role: { roles, loading } }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  useEffect(() => {
    getRoles();
  }, [getRoles]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (role) => {
    setCurrentRole(role);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentRole(null);
  };

  const handleShowDeleteModal = (role) => {
    setCurrentRole(role);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentRole(null);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Lista de Roles" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Crear Rol
        </button>
      </div>
      <RoleList
        roles={roles}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />

      <RoleCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
      />
      <RoleEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        role={currentRole}
      />
      <RoleDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        role={currentRole}
      />
    </>
  );
};

RolesEditListPage.propTypes = {
  getRoles: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  role: state.role,
});

export default connect(mapStateToProps, {
  getRoles,
})(RolesEditListPage);
