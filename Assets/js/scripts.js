 
 /*expreciones regulares*/
 const exprecionRegular= {
    nombre : /^[a-zA-z]+\s?[a-zA-z]+\s?$/,
    correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/,
    telefono: /^.\d{11}$/,
    motivo: /^[a-zA-Z \.\s,&-]+/,
    fecha: /^\d{4}-\d{2}-\d{2}$/,
    hora: /^\d{2}:\d{2}$/,
    cantidadAsis: /^\d{1}$/
 }

let formulario1 = $('#formulario1');
let formulario2 = $('#formulario2');

const formularioUno = $('#form1');
const formularioDos = $('#form2');

formularioUno.submit(function (){
    validarFormularioUno();
})
formularioDos.submit(function (){
    validarFormularioDos();
})
 
function validarFormularioUno(){
    let nombre = $('#nombre').val();
    let correo = $('#correo').val();
    let telefono = $('#telefono').val();
    let motivo = $('#motivo').val();
    let cajatexto = $('#cajatexto').val();
    let valid = true;

    if(exprecionRegular.nombre.test(nombre) == false){
       valid = false;
       alert('nombre Invalido, ingresa un nombre valido');
    }

    if(exprecionRegular.correo.test(correo)== false){
        valid = false;
        alert('telefono Invalido');
    }

    if(exprecionRegular.telefono.test(telefono)== false){
        valid = false;
        alert('telefono Invalido');
    }

    if(exprecionRegular.nombre.test(motivo)== false){
        valid = false;
        alert('motivo invalido');
    }

    if(cajatexto == ""){
        valid = false;
        alert('cajatexto vacia');
    }

    if(valid){
        alert(`Hola ${nombre} hemos registrado con exito tus datos`);
    }
}

function validarFormularioDos(e){
    let nombre = $('#nombre-reserva').val();
    let correo = $('#correo-reserva').val();
    let telefono = $('#telefono-reserva').val();
    let fecha = $('#fecha-reserva').val();
    let hora = $('#hora-reserva').val();
    let cantidadAsis = $('#cantidadAsis-reserva').val();
    let valid = true;

    if(exprecionRegular.nombre.test(nombre) == false){
       valid = false;
       alert('nombre Invalido');

    }
    if(exprecionRegular.correo.test(correo)== false){
        valid = false;
        alert('correo Invalido');
    }
    if(exprecionRegular.telefono.test(telefono)== false){
        valid = false;
        alert('telefono Invalido');
    }

    if(exprecionRegular.fecha.test(fecha)== false){
        valid = false;
        alert(`fecha invalida ${fecha}`);
    }

    if(exprecionRegular.hora.test(hora)== false){
        valid = false;
        alert('hora invalido');
    }

    if(exprecionRegular.cantidadAsis.test(cantidadAsis)== false){
        valid = false;
        alert('cantidadAsis invalido');
    }

    
    if(valid){
        alert(`Estimado ${nombre} agradecemostu reserva. Hemos registrado ${cantidadAsis} asistentes. Se han enviado el código de verificación al correo ${correo}\nGracias por preferirnos` );
    }

    
}
//se encargan de mostrar y ocultar los formularios en pantallas pequeñas
 function desplegarContactanos() {
     formulario1.classList.remove('d-none');
     formulario2.classList.add('d-none');
 }

 function desplegarReservanos() {
     formulario1.classList.add('d-none');
     formulario2.classList.remove('d-none');
 }

 //modal

 let ventanaModal = $('#ventanaModal');
 console.log(ventanaModal);
 let titulo = $(this);

 $('#cabecera img').click(function (){
    let elementoTomado = $(this);
   console.log(elementoTomado.siblings('.card-body').html());
   ventanaModal.toggleClass('d-none' , 'd-block');
   $('#ventanaModal .card .card-body').html(elementoTomado.siblings('.card-body').html());
   $('#ventanaModal .card img').attr('src' , $(this).attr('src'))
 });

 $('#cerrar').click( function (){
    
 
   ventanaModal.toggleClass('d-none' , 'd-block');
    
 });