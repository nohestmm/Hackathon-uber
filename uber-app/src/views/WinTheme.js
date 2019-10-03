import React  from 'react';
import perfil from '../images/perfil.jpg'
import star from '../images/star.png'
import starcount from '../images/star_count.png'
import bunny from '../images/bunny.png'
import ruleta from '../images/logo_ruleta.png'
import toruleta from '../images/to_ruleta.png'
import '../styles/win.css'
import {Link} from 'react-router-dom'

class WinTheme extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         
          
        }
        
        }
      
       render(){
   return(
 <section className="content-winner">
   {/*  <div  className=" navbar">
         Ayuda y gana
      </div> */}
     
      <div className="row justify-content-center perfil-back">
               <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-9" > 
                    <div className="row justify-content-center">
                        <div className="col-5 col-sm-3 col-md-3 col-lg-4 col-xl-3 align-self-endr info"> 
                            <img src={perfil}  id="logo" alt="logo" className="img-fluid  rounded-circle center"></img>
                            <p className="name">Gonzalo</p>
                        </div>
                       
                        
                   </div>
             </div>
       </div>
     
     
      <div className="container">
      
          
            <div className="row justify-content-md-center">
                
                      <div className="col-4 col-sm-3 col-md-3 col-lg-4 col-xl-1 star-img ">
                         <img src={star}  id="logo" alt="logo" className="img-fluid center"></img>
                      
                      </div>
                      <div className="col-8 col-sm-3 col-md-3 col-lg-4 col-xl-3   ">
                             <p className="count">contador de estrellas<br></br>10 <img src={starcount}  id="logo" alt="logo" className="img-fluid"></img></p>
                             
                             
                      </div>
                      </div>
                      <hr className="margin-for-line"></hr>
                     
            <div className="row justify-content-md-center">
                     <div className="col-4 col-sm-3 col-md-3 col-lg-4 col-xl-1 ">
                      <img src={bunny}  id="logo" alt="logo" className="img-fluid center"></img>
                    </div>
                      
                       <div className="col-8 col-sm-3 col-md-3 col-lg-4 col-xl-3  "> 
                              <div className="level">
                                Nivel 1
                              </div>                    
                        </div>
            
            </div>
            

            
              <hr className="margin-for-line"></hr>
              <div className="row justify-content-md-center">
                    <div className="col-4 col-sm-3 col-md-3 col-lg-4 col-xl-1 ">
                      <img src={ruleta}  id="logo" alt="logo" className="img-fluid center"></img>
                    </div>
                    <div className="col-8 col-sm-3 col-md-3 col-lg-4 col-xl-3  "> 
                             
                               ¡Llegó tu momento de jugar!<br></br>
                               <Link to="/game" className="btn btn-outline-primary btn-ruleta">¡Prueba tu suerte aquí!</Link>
                               {/* <button type="button" class="btn btn-outline-primary btn-ruleta">¡Prueba tu suerte aquí!</button> */}
                        </div>
              </div> 

              <hr className="margin-for-line"></hr>
               <div className="row justify-content-md-center">
                    <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-3  "> 
                             
                               <p className="insign">
                               ¡Cuando llegues al nivel 3 podrás desbloquear tu insigna de resposabilidad social!
                               </p>
                              
                        </div>
                  </div>
                  <div className="row justify-content-md-center align-items-center">
                  <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-12 ">
                      <img src={toruleta}  id="logo" alt="logo" className="img-fluid center"></img>
                    </div>
                  </div>     
      </div>
      </section>
     
   )
   }


}
export default WinTheme;