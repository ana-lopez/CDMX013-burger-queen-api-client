import '../style.css';
import logo from '../images/bqlogo.png'

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div id='contenedor-logo'>
          <img src={logo} alt='logo' className='Logo'/>
        </div>
      </header>
    </div>
  );
}

export default Header;