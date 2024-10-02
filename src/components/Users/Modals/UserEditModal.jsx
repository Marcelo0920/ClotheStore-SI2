import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserModal from "./UserModal";
import { updateUser } from "../../../actions/user";

const UserEditModal = ({ open, onClose, user, roles, updateUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    id_rol: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email,
        username: user.username,
        id_rol: user.id_rol.id.toString(),
      });
    }
  }, [user]);

  const { email, username, id_rol } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formData);
    onClose();
  };

  if (!open) return null;

  return (
    <UserModal open={open} onClose={onClose} title="Editar Usuario">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-input">
          <input
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            type="email"
            required
          />
          <input
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
            required
          />
          <select name="id_rol" value={id_rol} onChange={onChange} required>
            <option value="">Seleccionar Rol</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="create-button">
          Guardar Cambios
        </button>
      </form>
    </UserModal>
  );
};

UserEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  roles: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default connect(null, { updateUser })(UserEditModal);
