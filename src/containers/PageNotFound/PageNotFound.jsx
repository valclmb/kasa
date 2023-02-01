import "./PageNotFound.css"
export const PageNotFound = () => (
  <div className="page-not-found">
      <div className="page-not-found__404">404</div>
      <div className="page-not-found__text">Oups! La page que vous demandez n'existe pas.</div>
      <a href='/home'>Retourner sur la page d'accueil</a>
  </div>
)