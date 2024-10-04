import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProduct } from "../../../actions/product";
import { getCategories } from "../../../actions/category";
import ProviderModal from "../../Providers/Modals/ProviderModal";

const ProductEditModal = ({
  open,
  onClose,
  product,
  updateProduct,
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

  useEffect(() => {
    getCategories();
    if (product) {
      setFormData({
        nombre: product.nombre || "",
        descripcion: product.descripcion || "",
        precio: product.precio || "",
        talla: product.talla || "",
        color: product.color || "",
        id_categoria: product.id_categoria || "",
      });
    }
  }, [getCategories, product]);

  const { nombre, descripcion, precio, talla, color, id_categoria } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = (e) =>
    setFormData({ ...formData, foto: e.target.files[0] });

  const onSubmit = (e) => {
    e.preventDefault();
    const productData = new FormData();
    for (let key in formData) {
      if (formData[key] !== null) {
        productData.append(key, formData[key]);
      }
    }
    updateProduct(product.id, productData);
    onClose();
  };

  return (
    <ProviderModal open={open} onClose={onClose} title="Editar Producto">
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
          <button type="submit" className="update-button">
            Update
          </button>
        </div>
      </form>
    </ProviderModal>
  );
};

ProductEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.object,
  updateProduct: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.category.categories,
});

export default connect(mapStateToProps, { updateProduct, getCategories })(
  ProductEditModal
);
