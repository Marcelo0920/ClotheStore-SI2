import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProduct } from "../../../actions/product";
import { getCategories } from "../../../actions/category";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const ProductCreateModal = ({
  open,
  onClose,
  createProduct,
  getCategories,
  categories,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    foto: null,
    talla: "",
    color: "",
    id_categoria: "",
  });

  const { nombre, descripcion, precio, talla, color, id_categoria } = formData;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (e) =>
    setFormData({ ...formData, foto: e.target.files[0] });

  const onSubmit = (e) => {
    e.preventDefault();
    const productData = new FormData();
    for (let key in formData) {
      productData.append(key, formData[key]);
    }
    createProduct(productData);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Crear Producto">
      <form className="modal-form" onSubmit={onSubmit}>
        <div className="modal-input">
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={onChange}
            placeholder="Descripción"
            required
          />
          <input
            type="number"
            name="precio"
            value={precio}
            onChange={onChange}
            placeholder="Precio"
            required
          />
          <input
            type="file"
            name="foto"
            onChange={onFileChange}
            accept="image/*"
            required
          />
          <input
            type="text"
            name="talla"
            value={talla}
            onChange={onChange}
            placeholder="Talla"
            required
          />
          <input
            type="text"
            name="color"
            value={color}
            onChange={onChange}
            placeholder="Color"
            required
          />
          <select
            name="id_categoria"
            value={id_categoria}
            onChange={onChange}
            required
          >
            <option value="">Seleccionar Categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nombre}
              </option>
            ))}
          </select>
          <button type="submit" className="create-button">
            Create
          </button>
        </div>
      </form>
    </ProviderModal>
  );
};

ProductCreateModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  createProduct: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { createProduct, getCategories })(
  ProductCreateModal
);
