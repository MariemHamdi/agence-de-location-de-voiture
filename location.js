//boxshadow
var swiper = new Swiper(".slideshow-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //login
  document.querySelector('#login').onclick = () =>{
  document.querySelector('.connexion').classList.toggle('active');
  
  }
  document.querySelector('#close-form').onclick = () =>{
  document.querySelector('.connexion').classList.remove('active');
    
    }
//reservation vehicule

  document.querySelector('.reserver').onclick = () =>{
  document.querySelector('.res-vic').classList.toggle('active');
  
  }
  document.querySelector('#close-form1').onclick = () =>{
  document.querySelector('.res-vic').classList.remove('active');
    
    }
  document.querySelector('.touc').onclick = () =>{
  document.querySelector('.res-vic').classList.toggle('active');
      
      }
  document.querySelector('#close-form1').onclick = () =>{
  document.querySelector('.res-vic').classList.remove('active');
        
        }
  document.querySelector('.touc1').onclick = () =>{
   document.querySelector('.res-vic').classList.toggle('active');
          
          }
  document.querySelector('#close-form1').onclick = () =>{
  document.querySelector('.res-vic').classList.remove('active');
            
            }
document.querySelector('.touc2').onclick = () =>{
document.querySelector('.res-vic').classList.toggle('active');
                     
            }
document.querySelector('#close-form1').onclick = () =>{
document.querySelector('.res-vic').classList.remove('active');
                       
            }  
document.querySelector('.touc3').onclick = () =>{
document.querySelector('.res-vic').classList.toggle('active');
                               
                }
document.querySelector('#close-form1').onclick = () =>{
document.querySelector('.res-vic').classList.remove('active');
                                 
                }    
document.querySelector('.touc4').onclick = () =>{
document.querySelector('.res-vic').classList.toggle('active');
                                         
                }
document.querySelector('#close-form1').onclick = () =>{
document.querySelector('.res-vic').classList.remove('active');
                                           
                  }
document.querySelector('.touc5').onclick = () =>{
document.querySelector('.res-vic').classList.toggle('active');
                                                   
                  }
document.querySelector('#close-form1').onclick = () =>{
 document.querySelector('.res-vic').classList.remove('active');
                                                     
                  } 
document.querySelector('.touc6').onclick = () =>{
 document.querySelector('.res-vic').classList.toggle('active');
                                                             
                  }
document.querySelector('#close-form1').onclick = () =>{
document.querySelector('.res-vic').classList.remove('active');
                                                               
                  }                                       
//valider reservation 
  document.querySelector('#btn2').onclick = () =>{
  document.querySelector('.val-res').classList.toggle('active');
  document.querySelector('.res-vic').classList.remove('active');
         
         }                 
document.querySelector('#close-form2').onclick = () =>{
  document.querySelector('.val-res').classList.remove('active');
            
            } 
/*
    //controle de saisie: contactez nous
    const nom = document.getElementsByClassName('.name');
    const email = document.getElementsByClassName('.email');
    const sujet = document.getElementsByClassName('.subject');
    const message = document.getElementsByClassName('.message');
    const form = document.getElementsByTagName('form');
    const envoyer = document.getElementsByClassName('envoyer');

    form.addEventListener('envoyer',(e) =>{
      if (nom.value === '' || nom.value == nul) {
        alert('il faut saisir votre nom');
      }
    })   */