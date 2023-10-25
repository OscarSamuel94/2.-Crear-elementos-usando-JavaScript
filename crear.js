window.onload = inicio;

function inicio() {

    document.querySelector("body").insertAdjacentHTML("afterbegin",`
        <section class="seccionbtns">
        <button class="buttons" >BOTON1</button>
        <button class="buttons" >BOTON2</button>
        <button class="buttons" >BOTON3</button> </section>
        <div id="imag"><img src="img/face2.jpg" class="imagen"></div>`);

    document.querySelectorAll(".buttons")[0].onclick = accion1;
    
    document.querySelectorAll(".buttons")[2].onclick = accion3;

}

function accion1() {
    document.querySelector("img").style.backgroundColor="#1162ac";
    document.querySelector(".imagen").style.borderRadius = "50%";
    document.querySelector("#imag").style.transform = "rotate(10deg)";
    document.querySelectorAll(".buttons")[0].style.visibility = "hidden";
}
 function accion3() {
    document.querySelector("img").style = null;
    document.querySelector(".imagen").style = null;
    document.querySelector("#imag").style = null;

    let numBotones = document.querySelectorAll(".buttons").length;
    
    for (i = 0; i < numBotones-1 ; i++){

        document.querySelectorAll(".buttons")[i].style = null;

    }

    

    
 }