import './Section.scss'
import logo from '../../assets/images/logo.png'
import img1 from '../../assets/images/img1.jpg'
import img6 from '../../assets/images/img6.jpg'
import img3 from '../../assets/images/img3.jpg'
import img5 from '../../assets/images/img5.jpg'
import img4 from '../../assets/images/img4.jpg'

export const Section=()=>{
    return(
<section id="online-language">
      <div class="content">
        <div class="middle">
          <img class="logo" src={logo} alt="Logo" />
          <h1>Lisbo - React Next Language School Online Courses System</h1>
          <button class="demo-button">See Demos</button>
        </div>

        <div class="left">
          <img
            class="img-left"
            src={img1}
            alt="Image 1"
          />
        </div>

        <div class="right">
          <img src={img6}/>
          <img
            class="img-right"
            src={img3}
            alt="Image 3"
          />
        </div>

        <div class="bottom">
          <img
            class="img-bottom"
            src={img5}
            alt="Image 5"
          />
        </div>

        <div class="bottom-right">
          <img src={img4}/>
        </div>
      </div>
    </section>

    )
}