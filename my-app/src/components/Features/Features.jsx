import './Features.scss'
import react from '../../assets/images/react.png'
import mailchimp from '../../assets/images/mailchimp.png'
import map from '../../assets/images/map.png'
import mysql from '../../assets/images/mysql.jpg'
import next from '../../assets/images/next.png'
import npm from '../../assets/images/npm.png'
import redux from '../../assets/images/redux.png'
import sass from '../../assets/images/sass.png'
import speed from '../../assets/images/speed.png'
import stripe from '../../assets/images/stripe.png'
import swiper from '../../assets/images/swiper.png'
import fonts from '../../assets/images/fonts.png'
import es6 from '../../assets/images/es6.png'

export const Features=()=>{
    return(
        <section className='features'>
          <h2>Features</h2>
                 <p>Awesome Features</p>
                 
                 <div class="container">
                   <div class="row">
                     <div class="col-3">
                       <div class="card">
                        <img src={react} alt="function-logo" />
                        <p>React</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={mailchimp} alt="function-logo" />
                        <p>Mailchimp</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={map} alt="function-logo" />
                        <p>Map</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={mysql} alt="function-logo" />
                        <p>Mysql</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={next} alt="function-logo" />
                        <p>Next</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={npm} alt="function-logo" />
                        <p>Npm</p>
                       </div>
                     </div>
         
         
                     <div class="col-3">
                       <div class="card">
                        <img src={redux} alt="function-logo" />
                        <p>Redux</p>
                       </div>
                     </div>
         
         
                     <div class="col-3">
                       <div class="card">
                        <img src={sass} alt="function-logo" />
                        <p>Sass</p>
                       </div>
                     </div>
         
         
                     <div class="col-3">
                       <div class="card">
                        <img src={stripe} alt="function-logo" />
                        <p>Stripe</p>
                       </div>
                     </div>
         
         
                     <div class="col-3">
                       <div class="card">
                        <img src={fonts} alt="function-logo" />
                        <p>Fonts</p>
                       </div>
                     </div>
         
         
                     <div class="col-3">
                       <div class="card">
                        <img src={es6} alt="function-logo" />
                        <p>Es6</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={speed} alt="function-logo" />
                        <p>Speed</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={swiper} alt="function-logo" />
                        <p>Swiper</p>
                       </div>
                     </div>

                     <div class="col-3">
                       <div class="card">
                        <img src={mailchimp} alt="function-logo" />
                        <p>Malchimp</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={map} alt="function-logo" />
                        <p>Map</p>
                       </div>
                     </div>
         
                     <div class="col-3">
                       <div class="card">
                        <img src={mysql} alt="function-logo" />
                        <p>Mysql</p>
                       </div>
                     </div>
                   </div>
                 </div>
        </section>
    )
}