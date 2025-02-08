import './Function.scss'
import functionlogo  from '../../assets/images/function.png'


export const Function=()=>{
    return(
        <section className='functionName' >
        <h2>Functions</h2>
        <p>Some of implemented functions</p>
        
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Signup</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Email address verification</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Course create</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Course edit</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Course delete</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Video upload</span>
              </div>
            </div>


            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Asset upload</span>
              </div>
            </div>


            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Asset delete</span>
              </div>
            </div>


            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Courses</span>
              </div>
            </div>


            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Course details</span>
              </div>
            </div>


            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Courses search</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Course filtering</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Contact Form</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Admin</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Create category</span>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
               <img src={functionlogo} alt="function-logo" />
               <span>Create category</span>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}