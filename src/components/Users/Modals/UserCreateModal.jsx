import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserModal from "./UserModal";
import { createUser } from "../../../actions/user";

const UserCreateModal = ({ open, onClose, roles, createUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    id_rol: "",
  });

  const { email, username, password, id_rol } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
    setFormData({ email: "", username: "", password: "", id_rol: "" });
    onClose();
  };

  return (
    <UserModal open={open} onClose={onClose} title="Crear Usuario">
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
          <input
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            type="password"
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
          Crear
        </button>
      </form>
    </UserModal>
  );
};

UserCreateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired,
  createUser: PropTypes.func.isRequired,
};

export default connect(null, { createUser })(UserCreateModal);
