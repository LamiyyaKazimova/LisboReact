import './Demos.scss';
import img1 from '../../assets/images/img1.jpg'

export const Demos=()=>{
   return(
    <section id="demos">
    <h2>Lisbo</h2>
   <img src={img1} alt="" />
    <h3 class="view"><a href="#">Home Page</a></h3>
   </section>
   )
}