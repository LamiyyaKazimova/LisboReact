import logo from '../../assets/images/logo.png'
import arrow from '../../assets/images/new-tab-arrow.png'
import './Header.scss'

export const Header=()=>{
return(
    <header>
    <div class="container">
    <div class="row">
     <div class="col-2">
      <div class="header">
        <img src={logo} alt="Logo" />
      </div>
      </div>

      <div class="col-8">
        <ul class="navbar">
          <li><a href="#demos">Demos</a></li>
          <li><a href="#demo-logins">Demo Logins</a></li>
          <li><a href="#installation">Installation</a></li>
          <li><a href="#features">Features</a></li>
          <li>
            <a href="#"
              >Support
              <img
                src={arrow} alt="new-tab-arrow"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="col-2">
        <div class="all-button">
          <button>Buy Now!</button>
        </div>
      </div>
    </div>
  </div>
  </header>
)
}