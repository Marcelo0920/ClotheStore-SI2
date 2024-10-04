import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import Footer from "../components/Footer";
import ShopServices from "../components/ads/ShopServices";
import CajasAperturaList from "../components/Cajas/CajasAperturaList";
import { getCajas, openCaja, closeCaja, getCajaArqueo } from "../actions/caja";

const AperturarCajaPage = ({
  getCajas,
  openCaja,
  closeCaja,
  getCajaArqueo,
  caja: { cajas, loading },
}) => {
  useEffect(() => {
    getCajas();
  }, [getCajas]);

  const handleAperturar = async (cajaId) => {
    const payload = {
      id_usuario: "1",
      id_caja: cajaId.toString(),
    };
    openCaja(payload);
  };

  const handleCerrar = async (cajaId) => {
    const payload = {
      id: cajaId,
    };
    closeCaja(payload);
  };

  const handleArquear = (cajaId) => {
    const payload = {
      id_caja: cajaId.toString(),
    };
    getCajaArqueo(payload);
  };

  return (
    <>
      <Header />
      <Breadcrumbs current="Aperturar Caja" />
      <CajasAperturaList
        cajas={cajas}
        onAperturar={handleAperturar}
        onCerrar={handleCerrar}
        onArquear={handleArquear}
      />
      <ShopServices />
      <div style={{ margin: "150px 0px" }}></div>
      <Footer />
    </>
  );
};

AperturarCajaPage.propTypes = {
  getCajas: PropTypes.func.isRequired,
  openCaja: PropTypes.func.isRequired,
  closeCaja: PropTypes.func.isRequired,
  getCajaArqueo: PropTypes.func.isRequired,
  caja: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  caja: state.caja,
});

export default connect(mapStateToProps, {
  getCajas,
  openCaja,
  closeCaja,
  getCajaArqueo,
})(AperturarCajaPage);
