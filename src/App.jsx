export function App() {

  /* YARN DEV */

  return (
    <div className="container">
      <header>
        <img src="" alt="" />
        <span>Merci d'entrer vos informations de connexion</span>
      </header>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="joao@mail.com"/>
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" placeholder="**************"/>
        </div>
        <div></div>
      </form>
    </div>
  )
}