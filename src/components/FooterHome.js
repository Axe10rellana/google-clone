const FooterHome = () => {
  return (
    <div className="footer">
      <p>Argentina</p>
      <hr />
      <div className="home__footer" aria-label="Pie de paginá">
        <div className="home__footerLeft">
          <p aria-label="Sobre Google">Sobre Google</p>
          <p aria-label="Publicidad">Publicidad</p>
          <p aria-label="Negocios">Negocios</p>
        </div>
        <div className="home__footerRight">
          <p aria-label="Privacidad">Privacidad</p>
          <p aria-label="Condiciones">Condiciones</p>
          <p aria-label="Preferencias">Preferencias</p>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
