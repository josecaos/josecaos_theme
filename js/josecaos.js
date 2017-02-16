/*
Funciones fuera del ready usar prefijo 'jQuery'
en vez de '$', este solo dentro de el ready
*/
jQuery(document).foundation()
//
jQuery(document).ready(function($){

  contador()

  boton_menu_movil()

})//ready

function contador() {

  var iter = 0

  setInterval(function(){

    jQuery('.numeros').html('<p class="font-xxl">' + iter + '</p>')


    if (iter <= 10) {
      iter = iter + 1

    } else {
      iter = 0
    }



  },100)

}

function boton_menu_movil() {

// cambia consecutivamente el icono del menu
  var iconos = ['bars','barcode','align-left','barcode','align-right','barcode','align-justify','barcode','align-left','barcode','align-right','barcode']
  var iconindex = 0
  var arrlong = iconos.length - 2

  setInterval(function(){

    jQuery('.iconos').html('<a class="columns p-0"><i class="fa fa-' + iconos[iconindex] + ' "></i></a>')


    if (iconindex <= arrlong)  {

      iconindex = iconindex + 1

    } else {

      iconindex = 0

    }


  },125)

}
