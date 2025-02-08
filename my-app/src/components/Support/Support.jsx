import './Support.scss'
import enite from '../../assets/images/enite.png'
import people from '../../assets/images/people.png'

export const Support=()=>{
    return(
    <section className='support'>
    <div className="container">
        <div className="row">
            <div className="col-6">
            <img className='enite' src={enite} alt="enite" />
            <h3>A Project By Envato Elite Author</h3>
            <p>Proud to be a member of The Envato Elite Club</p>
            <div class="button">
          <button>View Portfilo</button>
      </div>
    </div>
     <div className="col-6">
     <img className='people' src={people} alt="people" />
     </div>
    </div>
    </div>

    </section>
    )
}