import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import UserCreateModal from "../components/Users/Modals/UserCreateModal";
import UserEditModal from "../components/Users/Modals/UserEditModal";
import UserDeleteModal from "../components/Users/Modals/UserDeleteModal";
import UserList from "../components/Users/UserList";

import { getRoles } from "../actions/role";
import { getUsers } from "../actions/user";

const UserEditListPage = ({
  getUsers,
  user: { users, loading },
  getRoles,
  role: { roles },
}) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getRoles();
  }, [getRoles]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShowEditModal = (user) => {
    setCurrentUser(user);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setCurrentUser(null);
  };

  const handleShowDeleteModal = (user) => {
    setCurrentUser(user);
    setShowDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCurrentUser(null);
  };

  return (
    <>
      <UserCreateModal
        open={showCreateModal}
        onClose={handleCloseCreateModal}
        roles={roles}
      />
      <UserEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        user={currentUser}
        roles={roles}
      />
      <UserDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        user={currentUser}
      />
      <Header />
      <Breadcrumbs current="User List" />
      <div
        className="container"
        style={{ marginTop: "50px", textAlign: "right" }}
      >
        <button
          onClick={handleShowCreateModal}
          className="btn"
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "10px",
          }}
        >
          Crear Usuario
        </button>
      </div>
      <UserList
        users={users}
        onEdit={handleShowEditModal}
        onDelete={handleShowDeleteModal}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

UserEditListPage.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getRoles: PropTypes.func.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  role: state.role,
});

export default connect(mapStateToProps, { getUsers, getRoles })(
  UserEditListPage
);
