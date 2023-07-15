import logo from './assets/Dark.svg';
import arrow from './assets/Vector.svg';
import './global.css';




export function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="Workflow" />
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
       <a href="">Mot de passe oublié ?</a>
       <button className="button">Se connecter <img src={arrow}/></button>
       <div className="footer">
        <p>Vous n’avez pas de compte ? <a href="">Créer un compte</a></p>
       </div>
      </form>
    </div>
  )
}