/*
Funciones fuera del ready usar prefijo 'jQuery'
en vez de '$', este solo dentro de el ready
*/
jQuery(document).foundation()
//
jQuery(document).ready(function($){

  // svgs()

  contador()

  boton_menu_movil()

})//ready

function svgs() {

  new Vivus('home-svg', {
    duration: 2000
  },function() {
    console.log('heyhey si esviyi');
  });

}



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
  var iconos = ['bars','barcode','align-left','barcode','bars','align-right','barcode','bars']
  var iconindex = 0
  var arrlong = iconos.length - 2

  setInterval(function(){
    //boton menu
    jQuery('.iconos a').html('<i class="fa fa-' + iconos[iconindex] + ' z-1"></i>')

    if (iconindex <= arrlong)  {

      iconindex = iconindex + 1

    } else {

      iconindex = 0

    }


  },200)

  jQuery('.iconos').on('click', function() {

    jQuery('.iconos').toggleClass('gira-icono-menu regresa-icono-menu')

  })


}
