import {ReactComponent as GithubIcon} from '../../assets/img/github01.svg'
import './styles.css'

function Navbar(){
    return(
        <header>
        <nav className='container' >
          <div className='dsmovie-nav-content' >
            <h1>DSMovie</h1>
   
            <a className='dsmovie-contact-link' href="https://github.com/Leonardo0908">  </a>
            <div className='dsmovie-contact-container' >
              <GithubIcon />
              <p>/devSuperior</p>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;