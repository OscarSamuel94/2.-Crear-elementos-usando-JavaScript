// window.onload = inicio;
// var imagen, cajaImagen, boton;

// function inicio() {

//     document.querySelector("body").insertAdjacentHTML("afterbegin",`
//                                     <section class="seccionbtns">
//                                     <button class="buttons" >BOTON1</button>
//                                     <button class="buttons" >BOTON2</button>
//                                     <button class="buttons" >BOTON3</button> 
//                                     </section>
//                                     <div id="imag"><img src="img/face2.jpg" class="imagen"></div>`);

//     imagen = document.querySelector("img");
//     cajaImagen = document.querySelector("#imag");
//     boton = document.querySelectorAll(".buttons");

//     boton[0].onclick = accion1;
//     boton[1].onclick = accion2;
//     boton[1].style.background = "orange";
//     boton[2].onclick = accion3;

// }

// function accion1() {
//     document.querySelector("img").style.backgroundColor="#1162ac";
//     imagen.style.borderRadius = "50%";
//     imagen.style.transform = "rotate(10deg)";
//     boton[0].style.visibility = "hidden";
// }

// function accion2() {
//     if (cajaImagen.style.display == "none") {

//         cajaImagen.style.display = "block";
//         boton[1].style.backgroundColor = "orange";

//     }else{

//         cajaImagen.style.display = "none";
//         boton[1].style.background = null;

//     }
   
    

// }



//  function accion3() {
    
//     imagen.style = null;
//     cajaImagen.style = null;
//     let numBotones = boton.length;
    
//     for (i = 0; i < numBotones-1 ; i++){

//         boton[i].style = null;
        

//     }

//     boton[1].style.background = "orange";

    
//  }

window.onload = inicio;

var boton, cajaImagen, imagen;


function inicio() {
    document.querySelector("body").insertAdjacentHTML("afterbegin",`
                                                       <section class="seccionbtns">
                                                       <button class="buttons">BOTON 1</button>
                                                       <button class="buttons">BOTON 2</button>
                                                       <button class="buttons">BOTON 3</button>                                            
                                                       </section>
                                                       <div class="divimag"><img src="/img/face2.jpg" alt="mujer" class="imagen"></div>
                                                    `);

    boton = document.querySelectorAll(".buttons");
    cajaImagen = document.querySelector(".divimag");
    imagen = document.querySelector(".imagen");    
    
    boton[0].onclick = accion1;
    boton[1].onclick = accion2;
    boton[1].style.backgroundColor = "orange";
    boton[2].onclick = accion3;


}

function accion1() {
    imagen.style.backgroundColor = "#1162ac";
    imagen.style.borderRadius = "50%";
    imagen.style.transform = "rotate(-16deg)";
}

function accion2() {
    // imagen.style.visibility = "hidden";

    if (imagen.style.visibility == "hidden" ){

        imagen.style.visibility = "visible";
        boton[1].style.background = "orange";


    }else{

        imagen.style.visibility = "hidden";
        boton[1].style.background = null;
    }


}


function accion3() {
    boton.style = null;
    imagen.style = null;
    cajaImagen.style = null;

}
