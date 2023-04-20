/*expreciones regulares*/
const exprecionRegular = {
  nombre: /^[a-zA-z]+\s?[a-zA-z]+\s?$/,
  correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/,
  telefono: /^.\d{11}$/,
  motivo: /^[a-zA-Z \.\s,&-]+/,
  fecha: /^\d{4}-\d{2}-\d{2}$/,
  hora: /^\d{2}:\d{2}$/,
  cantidadAsis: /^\d{1}$/,
};
// caja de formulario
let formulario1 = $("#formulario1");
let formulario2 = $("#formulario2");
//captando formulario
const formularioUno = $("#form1");
const formularioDos = $("#form2");
//eventos
formularioUno.submit(function () {
  validarFormularioUno();
});
formularioDos.submit(function () {
  validarFormularioDos();
});
//falidar primer formulario
function validarFormularioUno() {
  let nombre = $("#nombre").val();
  let correo = $("#correo").val();
  let telefono = $("#telefono").val();
  let motivo = $("#motivo").val();
  let cajatexto = $("#cajatexto").val();
  let valid = true;

  if (exprecionRegular.nombre.test(nombre) == false) {
    valid = false;
    alert("nombre Invalido, ingresa un nombre valido");
  }

  if (exprecionRegular.correo.test(correo) == false) {
    valid = false;
    alert("telefono Invalido");
  }

  if (exprecionRegular.telefono.test(telefono) == false) {
    valid = false;
    alert("telefono Invalido");
  }

  if (exprecionRegular.nombre.test(motivo) == false) {
    valid = false;
    alert("motivo invalido");
  }

  if (cajatexto == "") {
    valid = false;
    alert("cajatexto vacia");
  }

  if (valid) {
    alert(`Hola ${nombre} hemos registrado con exito tus datos`);
  }
}
// funcion validar formulario
function validarFormularioDos(e) {
  let nombre = $("#nombre-reserva").val();
  let correo = $("#correo-reserva").val();
  let telefono = $("#telefono-reserva").val();
  let fecha = $("#fecha-reserva").val();
  let hora = $("#hora-reserva").val();
  let cantidadAsis = $("#cantidadAsis-reserva").val();
  let valid = true;

  if (exprecionRegular.nombre.test(nombre) == false) {
    valid = false;
    alert("nombre Invalido");
  }
  if (exprecionRegular.correo.test(correo) == false) {
    valid = false;
    alert("correo Invalido");
  }
  if (exprecionRegular.telefono.test(telefono) == false) {
    valid = false;
    alert("telefono Invalido");
  }

  if (exprecionRegular.fecha.test(fecha) == false) {
    valid = false;
    alert(`fecha invalida ${fecha}`);
  }

  if (exprecionRegular.hora.test(hora) == false) {
    valid = false;
    alert("hora invalido");
  }

  if (exprecionRegular.cantidadAsis.test(cantidadAsis) == false) {
    valid = false;
    alert("cantidadAsis invalido");
  }

  if (valid) {
    alert(
      `Estimado ${nombre} agradecemostu reserva. Hemos registrado ${cantidadAsis} asistentes. Se han enviado el código de verificación al correo ${correo}\nGracias por preferirnos`
    );
  }
}
//se encargan de mostrar y ocultar los formularios en pantallas pequeñas
function desplegarContactanos() {
  formulario1.removeClass("d-none");
  formulario2.addClass("d-none");
}

function desplegarReservanos() {
  formulario2.removeClass("d-none");
  formulario1.addClass("d-none");
}

//modal
let ventanaModal = $("#ventanaModal");
console.log(ventanaModal);
let titulo = $(this);
let modal;

//evento que levanta el modal de los elementos destacados
$("#cabecera img").click(function () {
  let elementoTomado = $(this);
  modal = `
    <div class="row justify-content-center align-items-center">
    <div class="col-12">
    </div>
     <div class="col-9 col-lg-8 my-5 bg-dark py-5">
         <div class="row">
         
             <div class="col-2">
             <button class="btn btn-dark" id="cerrar">X</button>
             </div>
             <div class="col-10">
                 <div class="card d-flex justify-content-center align-items-center" style="max-width: 50rem;">
                     <div class="card-body">
                         ${elementoTomado.siblings(".card-body").html()}
                     </div>
                     <img src="${$(this).attr(
                       "src"
                     )}" class=" img-fluid" id="imgModal"   alt="bebidas"> 
                   </div>
             </div>
         </div>
     </div>
    </div>`;

  ventanaModal.toggleClass("d-none", "d-block");
  $("#ventanaModal").html(modal);

  $("#cerrar").click(function () {
    $("#ventanaModal").html("");
    ventanaModal.toggleClass("d-none", "d-block");
  });
});

$("#sobreNosotros").click(function () {
  ventanaModal.toggleClass("d-none", "d-block");

  let slideModal = `<div class="row justify-content-center pt-5">
    <div class="col-5 bg-dark mt-5">
    <button class="btn btn-dark" id="cerrar">X</button>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">

            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>

            </div>
            <div class="carousel-inner text-center">
             
                <div class="carousel-item active" >

                  <div class="carousel-caption d-none d-md-block text-center">
                    <h5>Nimrode Pub Restaurant</h5>
                    <p>“Nimrodel Significa “dama de la cueva blanca”. Fue una elfa silvana que vivió 
                  durante la Tercera Edad del Sol en el bosque de Lothlórien. En honor a su nombre, se acuña 
                  Nimrodel al río que nace en las Montañas Nubladas</p>
                  </div>

                  <img src="assets/img/IMG2.jpg" class=" img-fluid mt-55" alt="Nimrode Pub Restaurant">
              
                </div>

                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>“Nimrodel Pub Restaurant es un oasis de calma y diversión, lleno de rincones acogedores 
                  en donde se resalta la belleza de su decoración élfica. 
                  Es un lugar ideal para visitar solo o acompañado, disfrutar una tarde con amigos, terminar 
                  el día después del trabajo o almorzar con tu familia. 
                  Puedes probar nuestras tradicionales tablas, en todas sus variedades y que nos han 
                  otorgado reconocimiento dentro de la cultura gastronómica. 
                  También puedes disfrutar nuestras cervezas de fabricación propia, con sabores que te 
                  llevarán a un mágico mundo.”
                    </p>
                  </div>
                </div>
                <div class="carousel-item ">
                  <img src="assets/img/IMG1.jpg" class="d-block w-100" alt="loremasdjf">
                  
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
    </div>
</div>`;

  $("#ventanaModal").html(slideModal);

  $("#cerrar").click(function () {
    ventanaModal.toggleClass("d-none", "d-block");
  });
});
