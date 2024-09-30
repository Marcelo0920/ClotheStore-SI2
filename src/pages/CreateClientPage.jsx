import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/ShoppingCart/BreadCrumbs";
import ClientFormSection from "../components/Clients/ClientFormSection";

const CreateClientPage = () => {
  return (
    <>
      <div className="create-client-page">
        <Header />
        <Breadcrumbs current="Crear Cliente" />
        <ClientFormSection />
        <Footer />
      </div>
    </>
  );
};

export default CreateClientPage;
