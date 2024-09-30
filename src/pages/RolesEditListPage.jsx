import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import RoleCreateModal from "../components/Roles/Modals/RoleCreateModal";
import RoleEditModal from "../components/Roles/Modals/RoleEditModal";
import RoleDeleteModal from "../components/Roles/Modals/RoleDeleteModal";
import RoleList from "../components/Roles/RoleList";

const RolesEditListPage = () => {
  const [roles, setRoles] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  useEffect(() => {
    // Fetch roles from your API here
    // For now, we'll use mock data
    setRoles([
      { id: 1, nombre: "administrador", rol_permiso_id: [] },
      { id: 2, nombre: "usuario", rol_permiso_id: [] },
    ]);
  }, []);

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

  const handleSaveRole = (roleData) => {
    // Here you would typically send a POST or PUT request to your API
    if (roleData.id) {
      setRoles(
        roles.map((r) =>
          r.id === roleData.id ? { ...r, nombre: roleData.nombre } : r
        )
      );
    } else {
      const newRole = {
        id: Date.now(), // This should be generated by the backend in a real scenario
        nombre: roleData.nombre,
        rol_permiso_id: [],
      };
      setRoles([...roles, newRole]);
    }
    handleCloseCreateModal();
    handleCloseEditModal();
  };

  const handleDeleteRole = () => {
    // Here you would typically send a DELETE request to your API
    setRoles(roles.filter((r) => r.id !== currentRole.id));
    handleCloseDeleteModal();
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
        onSave={handleSaveRole}
      />
      <RoleEditModal
        open={showEditModal}
        onClose={handleCloseEditModal}
        onSave={handleSaveRole}
        role={currentRole}
      />
      <RoleDeleteModal
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteRole}
        roleName={currentRole?.nombre}
      />
    </>
  );
};

export default RolesEditListPage;
