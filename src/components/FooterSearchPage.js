const FooterSearchPage = () => {
  return (
    <div className="searchPage__footer">
      <p aria-label="Argentina, Libertad, Provincia de Buenos Aires">
        Argentina | Libertad, Provincia de Buenos Aires
      </p>
      <hr />
      <div className="searchPage__footerContainer" aria-label="Pie de paginá">
        <div className="searchPage__footerLeft">
          <p aria-label="Ayuda">Ayuda</p>
          <p aria-label="Enviar Comentarios">Enviar Comentarios</p>
          <p aria-label="Privacidad">Privacidad</p>
          <p aria-label="Condiciones">Condiciones</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSearchPage;
