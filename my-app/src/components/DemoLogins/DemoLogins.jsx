import './DemoLogins.scss'

export const DemoLogins=()=>{
    // const cards=[
    //     {id:1,role:"Student",email:"lami@gmail.com",pasword:12345},
    //     {id:2,role:"Student",email:"lami@gmail.com",pasword:12345}
    // ]
    // class DemosLogins extends HTMLElement{
    //     connectedCallback(){
    //       this.render()
    //     }
      
    //     render(){
    //       cards.map(({role,email,pasword})=>{
    //         this.innerHTML=`
    //         <h3>${role}</h3>
    //         <div>${email}</div>
    //          <div>${pasword}</div>
    //   `
    //       }).join("")
    //     }  
    //   }
      
    //   customElements.define("demos-logins",DemoLogins)
    return(
        <section id="demo-logins">
    <h3 class="live-demo">Live Demo Access Credentials</h3>
   <div class="container">
    <div className="row">
        <div className="col-4 last-card">
           <div className="cards">
            <div className="card">
                <h3>Student:</h3>
                <p>Email: student@lisbo.com</p>
                <p>Password:123456</p>
            </div>
            </div> 
        </div>

        <div className="col-4">
           <div className="cards">
            <div className="card">
                <h3>Instructor:</h3>
                <p>Email: student@lisbo.com</p>
                <p>Password:123456</p>
            </div>
            </div> 
        </div>


        <div className="col-4">
           <div className="cards">
            <div className="card">
                <h3>Admin:</h3>
                <p>Email: student@lisbo.com</p>
                <p>Password:123456</p>
            </div>
            </div> 
        </div>
     

        <div className="col-4">
           <div className="cards ">
            <div className="card last card">
                <h3>Test Credit Card:</h3>
                <p>Email: student@lisbo.com</p>
                <p>Card:4242 2424 2244</p>
                <p>MM/YY:02/23 CVC:212</p>
            </div>
            </div> 
        </div>
    </div>
    </div>
  </section>
    )
}